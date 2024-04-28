package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Patient;
import com.ppp.Therapedia.model.Profile;
import com.ppp.Therapedia.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

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
    public List<Patient> getAllPatients(){
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> get(@PathVariable Integer id){
        try{
            Patient patient=patientService.get(id);
            return new ResponseEntity<Patient>(patient, HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> update(@RequestBody Patient patient,
                                          @PathVariable Integer id){
        try {
            Patient existingPatient= patientService.get(id);
            patientService.savePatient(patient);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        patientService.delete(id);
        return "Deleted Patient";
    }

}
