package com.kodilla.calculator;

import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@RequestMapping("v1/calculator")
@CrossOrigin(origins = "http://localhost:63342")
public class CalcualtorController {

    @RequestMapping(method = RequestMethod.GET, value = "calculate")
    public double calcualte(@RequestParam String equation){
        Random rand = new Random();
        return rand.nextInt(100);
    }
}
