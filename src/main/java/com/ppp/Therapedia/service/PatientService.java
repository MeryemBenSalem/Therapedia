// PatientService.java
package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getAllPatients() {
        return patientRepository.findAllPatients();
    }

    public void savePatient(Patient patient) {
        patientRepository.save(patient);
    }

    public Patient get(Integer id) {
        return patientRepository.findById(Long.valueOf(id)).orElse(null);
    }

    public void delete(Integer id) {
        patientRepository.deleteById(Long.valueOf(id));
    }
}
