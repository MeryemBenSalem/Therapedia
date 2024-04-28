package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.model.Profile;
import com.ppp.Therapedia.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
public class PatientController extends ProfileController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/add")
    public String add(@RequestBody Patient patient){
        patientService.savePatient(patient);
        return "New patient is added";
    }

    @GetMapping("/getAll")
    public List<Profile> getAllPatients(){
        return patientService.getAllPatients();
    }


}
