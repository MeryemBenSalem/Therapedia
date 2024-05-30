package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepository extends ProfileRepository<Patient> {
    @Query("SELECT p FROM Patient p WHERE TYPE(p) = Patient")
    List<Patient> findAllPatients();

}
