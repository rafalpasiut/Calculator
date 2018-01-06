package com.kodilla.calculator;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/calculator")
public class CalcualtorController {

    @RequestMapping(method = RequestMethod.GET, value = "calculate")
    public double calcualte(String quation){
        return 0.0;
    }
}
