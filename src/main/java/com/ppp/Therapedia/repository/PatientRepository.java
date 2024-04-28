package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends ProfileRepository<Patient> {
}
