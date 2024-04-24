package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
