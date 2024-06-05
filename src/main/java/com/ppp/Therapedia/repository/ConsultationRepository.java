package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsultationRepository extends JpaRepository<Consultation, Integer> {
    List<Consultation> findByDoctorIdAndAvailable(Integer doctorId, boolean available);
    List<Consultation> findByDoctorId(Integer doctorId);
    List<Consultation> findByDoctorIdAndAvailableTrue(Integer doctorId);
    List<Consultation> findByDoctorIdAndAvailableFalse(Integer doctorId);
    List<Consultation> findByPatientIdAndAvailableFalse(Integer patientId);


}
