package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Consultation;
import com.ppp.Therapedia.service.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/consultation")
public class ConsultationController {

    @Autowired
    private ConsultationService consultationService;


    private static final Logger logger = LoggerFactory.getLogger(ConsultationController.class);


    @PostMapping("/doctor/{doctorId}")
    public ResponseEntity<String> addConsultation(@PathVariable Integer doctorId, @RequestBody Consultation consultation) {
        try {
            consultationService.saveConsultation(doctorId, consultation);
            return new ResponseEntity<>("Consultation added successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add consultation: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAll")
    public List<Consultation> getAllConsultations() {
        return consultationService.getAllConsultations();
    }

    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Map<String, Object>>> getConsultationsByDoctorId(@PathVariable Integer doctorId) {
        List<Consultation> consultations = consultationService.findByDoctorId(doctorId);
        List<Map<String, Object>> response = consultations.stream().map(consultation -> {
            Map<String, Object> data = new HashMap<>();
            data.put("consultationId", consultation.getId());
            data.put("consultationTime", consultation.getDateTime()); // Assurez-vous que votre entité Consultation a un champ dateTime
            Map<String, Object> doctorData = new HashMap<>();
            doctorData.put("doctorId", consultation.getDoctor_Id());
            doctorData.put("doctorName", consultation.getDoctor_Id().getFirstName() + " " + consultation.getDoctor().getLastName());
            data.put("doctor", doctorData);
            return data;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/doctor/{doctorId}/available")
    public ResponseEntity<List<Map<String, Object>>> getAvailableConsultationsByDoctorId(@PathVariable Integer doctorId) {
        try {
            List<Consultation> consultations = consultationService.findAvailableConsultationsByDoctorId(doctorId);
            if (consultations.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            List<Map<String, Object>> response = consultations.stream().map(consultation -> {
                Map<String, Object> data = new HashMap<>();
                data.put("consultationId", consultation.getId());
                data.put("consultationTime", consultation.getDateTime()); // Assurez-vous que votre entité Consultation a un champ dateTime
                Map<String, Object> doctorData = new HashMap<>();
                doctorData.put("doctorId", consultation.getDoctor().getId());
                doctorData.put("doctorName", consultation.getDoctor().getFirstName() + " " + consultation.getDoctor().getLastName());
                data.put("doctor", doctorData);
                return data;
            }).collect(Collectors.toList());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/doctor/{doctorId}/NotAvailable")
    public ResponseEntity<List<Map<String, Object>>> getNotAvailableConsultationsByDoctorId(@PathVariable Integer doctorId) {
        try {
            List<Consultation> consultations = consultationService.findNotAvailableConsultationsByDoctorId(doctorId);
            if (consultations.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            List<Map<String, Object>> response = consultations.stream().map(consultation -> {
                Map<String, Object> data = new HashMap<>();
                data.put("consultationId", consultation.getId());
                data.put("consultationTime", consultation.getDateTime()); // Assurez-vous que votre entité Consultation a un champ dateTime
                Map<String, Object> patientData = new HashMap<>();
                patientData.put("patientId", consultation.getPatient().getId());
                patientData.put("patientName", consultation.getPatient().getFirstName() + " " + consultation.getPatient().getLastName());
                data.put("patient", patientData);
                return data;
            }).collect(Collectors.toList());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/patient/{patientId}/reserved")
    public ResponseEntity<List<Map<String, Object>>> getReservedConsultationsByPatientId(@PathVariable Integer patientId) {
        List<Consultation> consultations = consultationService.findReservedConsultationsByPatientId(patientId);
        List<Map<String, Object>> response = consultations.stream().map(consultation -> {
            Map<String, Object> data = new HashMap<>();
            data.put("consultationId", consultation.getId());
            data.put("consultationTime", consultation.getDateTime()); // Assurez-vous que votre entité Consultation a un champ dateTime
            Map<String, Object> doctorData = new HashMap<>();
            doctorData.put("doctorId", consultation.getDoctor().getId());
            doctorData.put("doctorName", consultation.getDoctor().getFirstName() + " " + consultation.getDoctor().getLastName());
            data.put("doctor", doctorData);
            return data;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@RequestBody ConsultationRequest request, @PathVariable Integer id) {
        try {
            consultationService.updateConsultation(id, request.getDoctorId(), request.getDateTime());
            return new ResponseEntity<>("Consultation updated successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("Consultation not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id) {
        try {
            consultationService.delete(id);
            return new ResponseEntity<>("Consultation deleted successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("Consultation not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/reserve/{consultationId}/patient/{patientId}")
    public ResponseEntity<String> reserveConsultation(@PathVariable Integer consultationId, @PathVariable Integer patientId) {
        try {
            consultationService.reserveConsultation(consultationId, patientId);
            return new ResponseEntity<>("Consultation reserved successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to reserve consultation: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    @PutMapping("/cancelReservation/{consultationId}")
    public ResponseEntity<String> cancelReservation(@PathVariable Integer consultationId) {
        try {
            consultationService.cancelReservation(consultationId);
            return new ResponseEntity<>("Reservation canceled successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to cancel reservation: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

class ConsultationRequest {
    private Integer doctorId;
    private LocalDateTime dateTime;

    public Integer getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Integer doctorId) {
        this.doctorId = doctorId;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
