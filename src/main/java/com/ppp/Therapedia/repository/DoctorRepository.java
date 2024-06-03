package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.model.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends ProfileRepository<Doctor> {
    @Query("SELECT d FROM Doctor d WHERE TYPE(d) = Doctor")
    List<Doctor> findAllDoctors();
}
