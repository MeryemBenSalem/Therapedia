package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Profile;
import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.repository.PatientRepository;
import com.ppp.Therapedia.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    @Autowired
    private PatientRepository patientRepository;

    public Profile saveProfile(Profile profile){
        return patientRepository.save(profile);
    }

    public List<Profile> getAllProfiles() {
        return patientRepository.findAll();
    }


}
