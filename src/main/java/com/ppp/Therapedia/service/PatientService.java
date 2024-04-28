package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.model.Profile;
import com.ppp.Therapedia.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientService extends ProfileService{

    @Autowired
    private PatientRepository patientRepository;

    public Patient savePatient(Patient patient) {
        return (Patient) saveProfile(patient);
    }


    public List<Patient> getAllPatients() {
        return getAllProfiles().stream()
                .map(profile -> (Patient) profile)
                .collect(Collectors.toList());
    }


}
