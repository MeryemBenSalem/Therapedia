package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService extends ProfileService{

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor saveDoctor(Doctor doctor) {
        return (Doctor) saveProfile(doctor);
    }

    @Override
    public Doctor get(Integer id) {
        return doctorRepository.findById(Long.valueOf(id)).orElse(null);
    }


}
