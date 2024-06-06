package com.ppp.Therapedia.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import java.util.Set;
import java.io.Serializable;


@Entity
@DiscriminatorValue("patient")
@Table(name = "Patient")
public class Patient extends Profile implements Serializable {
    private static final long serialVersionUID = 1L;
    private String emergencyContact;
    private String dateOfBirth;
    private String gender;
    private String medicalHistory;
    private String reasonForTherapy;


    public String getEmergencyContact() {
        return emergencyContact;
    }

    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }

    public String getReasonForTherapy() {
        return reasonForTherapy;
    }

    public void setReasonForTherapy(String reasonForTherapy) {
        this.reasonForTherapy = reasonForTherapy;
    }

}
