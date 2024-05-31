package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Profile;
import com.ppp.Therapedia.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

//    @PostMapping(path = "/Sign_in")
//    public ResponseEntity<?> loginProfile(@RequestBody Login login) {
//        LoginResponse
//    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Profile profile) {
        System.out.println("Received email: " + profile.getEmail());
        System.out.println("Received password: " + profile.getPassword());
        try {
            boolean result = profileService.login(profile.getEmail(), profile.getPassword());
            if (result) {
                return new ResponseEntity<>("Successfully signed in.", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid email or password.", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to sign in. Please try again.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/isloggedin")
    public ResponseEntity<?> isLoggedIn() {
        try {
            boolean loggedIn = profileService.isUserLoggedIn();
            return new ResponseEntity<>(loggedIn, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to check login status.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        try {
            profileService.logout();
            return new ResponseEntity<>("Logged out successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to logout. Please try again.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
