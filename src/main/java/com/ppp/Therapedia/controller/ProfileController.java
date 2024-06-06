package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.*;
import com.ppp.Therapedia.service.MyUserDetailsService;
import com.ppp.Therapedia.service.PatientService;
import com.ppp.Therapedia.service.ProfileService;
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
@GetMapping("/email/{email}")
public ResponseEntity<Profile> getUserByEmail(@PathVariable String email) {
    Profile user = profileService.findByEmail(email);
    if (user == null) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user);
}

    @GetMapping("/{id}")
public ResponseEntity<?> getProfileById(@PathVariable Long id) {
    try {
        Profile profile = profileService.getProfileById(id)
                .orElseThrow(() -> new NoSuchElementException("Profile not found"));
        return ResponseEntity.ok(profile);
    } catch (NoSuchElementException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Profile not found");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
    }
}




    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        System.out.println(authenticationRequest.getEmail());
        System.out.println(authenticationRequest.getPassword());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
        );

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(jwt));
    }




}