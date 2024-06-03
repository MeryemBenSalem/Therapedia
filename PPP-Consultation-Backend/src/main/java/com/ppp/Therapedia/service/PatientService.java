package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.model.Role;
import com.ppp.Therapedia.model.Profile;
import com.ppp.Therapedia.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientService extends ProfileService{

    @Autowired
    private PatientRepository patientRepository;

    public Patient savePatient(Patient patient) {
        patient.setRoles(Arrays.asList(new Role("ROLE_PATIENT")));
        return (Patient) saveProfile(patient);
    }

    @Override
    public Patient get(Integer id) {
        return patientRepository.findById(Long.valueOf(id)).orElse(null);
    }


    public List<Patient> getAllPatients() {
//        return getAllProfiles().stream()
//                .map(profile -> (Patient) profile)
//                .collect(Collectors.toList());
        return patientRepository.findAllPatients();
    }


}