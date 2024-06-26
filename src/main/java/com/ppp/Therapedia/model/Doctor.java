package com.ppp.Therapedia.model;

import jakarta.persistence.DiscriminatorValue;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "Doctor")
@DiscriminatorValue("doctor")
public class Doctor extends Profile implements Serializable {
    private static final long serialVersionUID = 1L;

    private String licenseNumber;
    private String specialization;
    private String yearsOfExperience;
    private String Affiliations;


    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(String yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public String getAffiliations() {
        return Affiliations;
    }

    public void setAffiliations(String affiliations) {
        this.Affiliations = affiliations;
    }

}
