package com.ppp.Therapedia.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Consultation")
public class Consultation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    private Integer doctor_Id;

    public Integer getDoctor_Id() {
        return doctor_Id;
    }

    public void setDoctor_Id(Integer doctor_Id) {
        this.doctor_Id = doctor_Id;
    }

    public Integer getPatient_Id() {
        return patient_Id;
    }

    public void setPatient_Id(Integer patient_Id) {
        this.patient_Id = patient_Id;
    }

    private Integer patient_Id;

    private LocalDateTime dateTime;
    private boolean available = true;

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}
