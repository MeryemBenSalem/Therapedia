//package com.ppp.Therapedia.controller;
//
//import com.ppp.Therapedia.model.Profile;
//import com.ppp.Therapedia.service.ProfileService;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.ModelAndView;
//
//import java.util.Objects;
//
//@Controller
//public class LoginController {
//
//    @Autowired
//    private ProfileService profileService;
//
//    @GetMapping("/login")
//    public ModelAndView login() {
//        ModelAndView mav = new ModelAndView("login");
//        mav.addObject("user", new Profile());
//        return mav;
//    }
//
//    @PostMapping("/login")
//    public String login(@ModelAttribute("user") Profile user ) {
//        Profile oauthUser = profileService.login(user.getEmail(), user.getPassword());
//        System.out.print(oauthUser);
//        if(Objects.nonNull(oauthUser))
//        {
//
//            return "redirect:/";
//
//
//        } else {
//            return "redirect:/login";
//
//
//        }
//    }
//
//    @RequestMapping(value = {"/logout"}, method = RequestMethod.POST)
//    public String logoutDo(HttpServletRequest request, HttpServletResponse response){
//    return "redirect:/login";
//    }
//}
