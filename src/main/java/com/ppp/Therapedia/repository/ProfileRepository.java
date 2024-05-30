package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Doctor;
import com.ppp.Therapedia.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Type;
import java.util.List;

@Repository
public interface ProfileRepository<T extends Profile> extends JpaRepository<T, Long> {
//    @Query("SELECT p FROM profile p WHERE TYPE(p) = Doctor")
//    List<Doctor> findAllDoctors();
//    Profile findByEmailAndPassword(String email, String password);
}
