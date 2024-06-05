package com.ppp.Therapedia.service;

//import com.ppp.Therapedia.model.Patient;
//import com.ppp.Therapedia.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    @Autowired
//    private PatientRepository patientRepository;
    private ProfileRepository<Profile> profileRepository;

//    public Profile login(String email, String password) {
//        Profile user = profileRepository.findByEmailAndPassword(email, password);
//        return user;
//    }

    public Profile saveProfile(Profile profile){
        return profileRepository.save(profile);
    }

    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    public Profile get(Integer id) {

        return profileRepository.findById(Long.valueOf(id)).orElse(null);
    }

    public void delete(Integer id) {

        profileRepository.deleteById(Long.valueOf(id));
    }


}
