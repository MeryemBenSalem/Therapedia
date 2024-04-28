package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.model.Profile;

import java.util.List;

public interface PatientService extends ProfileService {
    public Patient savePatient(Patient patient);
    public List<Profile> getAllPatients();


}
