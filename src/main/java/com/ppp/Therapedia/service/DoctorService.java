// DoctorService.java
package com.ppp.Therapedia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAllDoctors();
    }

    public void saveDoctor(Doctor doctor) {
        doctorRepository.save(doctor);
    }

    public Doctor get(Integer id) {
        return doctorRepository.findById(Long.valueOf(id)).orElse(null);
    }

    public void delete(Integer id) {
        doctorRepository.deleteById(Long.valueOf(id));
    }
}
