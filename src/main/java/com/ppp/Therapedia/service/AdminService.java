package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Admin;
import com.ppp.Therapedia.repository.AdminRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private HttpSession httpSession;

    public boolean authenticate(String email, String password) {
        Optional<Admin> adminOptional = adminRepository.findByEmail(email);
        if (adminOptional.isPresent()) {
            Admin admin = adminOptional.get();
            if (admin.getPassword().equals(password)) {
                // Set the admin in the session if authentication is successful
                httpSession.setAttribute("admin", admin);
                return true;
            }
        }
        return false;
    }

    public Optional<Admin> findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    public boolean isUserLoggedIn() {
        return httpSession.getAttribute("admin") != null;
    }

    public void logout() {
        httpSession.invalidate();
    }
}
