package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Admin;
import com.ppp.Therapedia.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody Admin admin) {
        try {
            boolean result = adminService.authenticate(admin.getEmail(), admin.getPassword());
            if (result) {
                return ResponseEntity.ok()
                        .header("Access-Control-Allow-Origin", "http://localhost:3000")
                        .body("Successfully signed in.");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .header("Access-Control-Allow-Origin", "http://localhost:3000")
                        .body("Invalid email or password.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .header("Access-Control-Allow-Origin", "http://localhost:3000")
                    .body("Failed to sign in. Please try again.");
        }
    }
    @GetMapping("/isloggedin")
    public ResponseEntity<?> isLoggedIn() {
        try {
            boolean loggedIn = adminService.isUserLoggedIn();
            return new ResponseEntity<>(loggedIn, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to check login status.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        try {
            adminService.logout();
            return new ResponseEntity<>("Logged out successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to logout. Please try again.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}



