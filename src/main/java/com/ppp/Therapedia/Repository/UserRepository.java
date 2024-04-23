package com.ppp.Therapedia.Repository;

import com.ppp.Therapedia.Model.Question;
import com.ppp.Therapedia.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
