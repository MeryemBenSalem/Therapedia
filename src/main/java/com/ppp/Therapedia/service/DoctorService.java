package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.model.Role;
import com.ppp.Therapedia.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorService extends ProfileService{

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor saveDoctor(Doctor doctor) {
        doctor.setRoles(Arrays.asList(new Role("ROLE_DOCTOR")));
        return (Doctor) saveProfile(doctor);
    }

    @Override
    public Doctor get(Integer id) {
        return doctorRepository.findById(Long.valueOf(id)).orElse(null);
    }

    public List<Doctor> getAllDoctors() {
        return getAllProfiles().stream()
                .map(profile -> (Doctor) profile)
                .collect(Collectors.toList());
    }


}
