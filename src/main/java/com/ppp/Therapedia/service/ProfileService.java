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
import java.util.stream.Collectors;

@Service
public class ProfileService {

    @Autowired
//    private PatientRepository patientRepository;
    private ProfileRepository<Profile> profileRepository;

    @Autowired
    private HttpSession httpSession;

//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;

//    @Transactional
//    public Profile signUp(Profile profile){
//        profile.setPassword(passwordEncoder.encode(profile.getPassword()));
//        Profile savedProfile = profileRepository.save(profile);
//        return savedProfile;
//    }

    public boolean login(String email, String password){
        Profile profile = profileRepository.findByEmail(email);
        if (profile != null &&  profile.getPassword().equals(password) ) {
            httpSession.setAttribute("Profile", profile);
            return true;
        }
        return false;
    }

    public boolean isUserLoggedIn() {
        return httpSession.getAttribute("Profile") != null;
    }

    public void logout() {
        httpSession.invalidate();
    }

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