package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Consultation;
import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.repository.ConsultationRepository;
import com.ppp.Therapedia.repository.DoctorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class ConsultationService {
    private static final Logger logger = LoggerFactory.getLogger(ConsultationService.class);

    @Autowired
    private ConsultationRepository consultationRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    public void saveConsultation(Integer doctorId, Consultation consultation) throws Exception {
        Doctor doctor = doctorRepository.findById(doctorId).orElseThrow(() -> new Exception("Doctor not found"));
        consultation.setDoctorId(doctorId);
        consultationRepository.save(consultation);
    }

    public List<Consultation> getAllConsultations() {
        return consultationRepository.findAll();
    }

    public Consultation get(Integer id) {
        return consultationRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Consultation not found"));
    }

    public void updateConsultation(Integer id, Integer doctorId, LocalDateTime dateTime) {
        Consultation consultation = consultationRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Consultation not found"));
        Doctor doctor = doctorRepository.findById(doctorId).orElseThrow(() -> new NoSuchElementException("Doctor not found"));
        consultation.setDoctorId(doctorId);
        consultation.setDateTime(dateTime);
        consultationRepository.save(consultation);
    }

    public List<Consultation> findByDoctorId(Integer doctorId) {
        return consultationRepository.findByDoctorId(doctorId).stream()
                .distinct()
                .collect(Collectors.toList());
    }

    public List<Consultation> findAvailableConsultationsByDoctorId(Integer doctorId) {
        return consultationRepository.findByDoctorIdAndAvailableTrue(doctorId);
    }

    public List<Consultation> findNotAvailableConsultationsByDoctorId(Integer doctorId) {
        return consultationRepository.findByDoctorIdAndAvailableFalse(doctorId);
    }

    public void reserveConsultation(Integer consultationId, Integer patientId) throws Exception {
        Consultation consultation = consultationRepository.findById(consultationId).orElseThrow(() -> new Exception("Consultation not found"));
        if (!consultation.isAvailable()) {
            throw new Exception("Consultation is already reserved");
        }
        consultation.setAvailable(false);
        consultation.setPatientId(patientId);
        consultationRepository.save(consultation);
        logger.info("ConsultationId: {} reserved for patientId: {}", consultationId, patientId);
    }

    public List<Consultation> findReservedConsultationsByPatientId(Integer patientId) {
        logger.info("Fetching reserved consultations for patientId: {}", patientId);
        List<Consultation> consultations = consultationRepository.findByPatientIdAndAvailableFalse(patientId);
        logger.info("Found {} consultations for patientId: {}", consultations.size(), patientId);
        return consultations;
    }

    public void delete(Integer id) {
        consultationRepository.deleteById(id);
    }

    public void cancelReservation(Integer consultationId) throws Exception {
        logger.info("Canceling reservation for consultationId: {}", consultationId);
        Consultation consultation = consultationRepository.findById(consultationId).orElseThrow(() -> new Exception("Consultation not found"));
        if (consultation.isAvailable()) {
            logger.warn("ConsultationId: {} is already available", consultationId);
            throw new Exception("Consultation is already available");
        }
        consultation.setAvailable(true);
        consultation.setPatientId(null);
        consultationRepository.save(consultation);
        logger.info("Reservation for consultationId: {} has been canceled", consultationId);
    }
}
