package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<User, Integer> {
}