package com.ppp.Therapedia.Service;

import com.ppp.Therapedia.Model.Question;
import com.ppp.Therapedia.Model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
