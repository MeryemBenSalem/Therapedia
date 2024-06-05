package com.ppp.Therapedia.controller;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.springframework.security.crypto.password.PasswordEncoder;


import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.service.DoctorService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/doctor")
public class DoctorController extends ProfileController {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private HttpSession session;

    @PostMapping("/add")
    public String add(@RequestBody Doctor doctor){
        doctorService.saveDoctor(doctor);
        return "New Doc is added";
    }

    @PostMapping("/signup")
    public String signup(@RequestBody Doctor doctor) {
        doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
        doctorService.saveDoctor(doctor);
        return "User registered successfully!";
    }


    @GetMapping("/getAll")
    public List<Doctor> getAllDoctors(){
        return doctorService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> get(@PathVariable Integer id){
        try{
            Doctor doctor=doctorService.get(id);
            return new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<Doctor>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> update(@RequestBody Doctor doctor,
                                         @PathVariable Integer id){
        try {
            Doctor existingDoctor= doctorService.get(id);
            doctorService.saveDoctor(doctor);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<Doctor>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        doctorService.delete(id);
        return "Deleted Doctor";
    }
}