package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsultationRepository extends JpaRepository<Consultation, Integer> {

    // Find consultations by doctorId and their availability
    List<Consultation> findByDoctorIdAndAvailable(Integer doctorId, boolean available);

    // Find all consultations by doctorId
    List<Consultation> findByDoctorId(Integer doctorId);

    // Find available consultations by doctorId
    List<Consultation> findByDoctorIdAndAvailableTrue(Integer doctorId);

    // Find unavailable consultations by doctorId
    List<Consultation> findByDoctorIdAndAvailableFalse(Integer doctorId);

    // Find consultations by patientId that are not available
    List<Consultation> findByPatientIdAndAvailableFalse(Integer patientId);
}
