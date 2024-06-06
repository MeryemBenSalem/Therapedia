package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.model.Profile;
//import com.ppp.Therapedia.model.Patient;
//import com.ppp.Therapedia.repository.PatientRepository;
import com.ppp.Therapedia.repository.ProfileRepository;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProfileService {

    @Autowired
//    private PatientRepository patientRepository;
    private ProfileRepository<Profile> profileRepository;


//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;

//    @Transactional
//    public Profile signUp(Profile profile){
//        profile.setPassword(passwordEncoder.encode(profile.getPassword()));
//        Profile savedProfile = profileRepository.save(profile);
//        return savedProfile;
//    }
    public Optional<Profile> getProfileById(Long id) {
        return profileRepository.findById(id);
    }
    public Profile getProfileByEmail(String email){
        return profileRepository.findByEmail(email);
    }

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


    public Profile findByEmail(String email) {
        return profileRepository.findByEmail(email);
    }
}