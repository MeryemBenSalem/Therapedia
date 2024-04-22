package com.ppp.Therapedia.Controller;


import com.ppp.Therapedia.Model.User;
import com.ppp.Therapedia.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")
public class UserController {
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private UserService userService;
    @PostMapping("/addUser")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return"user is added";
    }
    @GetMapping("/getallUsers")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
