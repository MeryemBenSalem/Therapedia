package com.ppp.Therapedia.Controller;

import com.ppp.Therapedia.Model.User;
import com.ppp.Therapedia.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public String addUser(@RequestBody User user) {
        userService.saveUser(user);
        return "User is added";
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}") // New endpoint to fetch user by ID
    public Optional<User> getUserById(@PathVariable("id") Integer id) {
        return userService.getUserById(id);
    }
}
