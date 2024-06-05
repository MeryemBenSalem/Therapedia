package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.JwtRequest;
import com.ppp.Therapedia.model.JwtResponse;
import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.service.MyUserDetailsService;
import com.ppp.Therapedia.service.PatientService;
import com.ppp.Therapedia.service.ProfileService;
import com.ppp.Therapedia.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

//    @PostMapping(path = "/Sign_in")
//    public ResponseEntity<?> loginProfile(@RequestBody Login login) {
//        LoginResponse
//    }



    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        // Authenticate using email instead of username
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
        );

        // Load user details by email
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());

        // Generate JWT token
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(jwt));
    }





}
