package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository<T extends Profile> extends JpaRepository<T, Long> {
    Profile findByEmailAndPassword(String email, String password);
}
