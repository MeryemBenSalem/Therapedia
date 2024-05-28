package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.model.Patient;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends ProfileRepository<Doctor> {
}
