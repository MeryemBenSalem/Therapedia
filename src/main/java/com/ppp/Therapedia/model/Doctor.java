package com.ppp.Therapedia.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Doctor")
@DiscriminatorValue("doctor")
public class Doctor extends Profile{
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
        Affiliations = affiliations;
    }
}
