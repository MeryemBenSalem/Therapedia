package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.model.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends ProfileRepository<Doctor> {
    @Query("SELECT d FROM Doctor d WHERE TYPE(d) = Doctor")
    List<Doctor> findAllDoctors();
     @Query("SELECT d FROM Doctor d WHERE d.id = :id")
    Optional<Doctor> findById(@Param("id") Integer id);
}
