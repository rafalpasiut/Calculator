package com.kodilla.calculator.controller;

import com.kodilla.calculator.Calculator;
import com.kodilla.calculator.exception.CalculateEquationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v1/calculator")
@CrossOrigin(origins = "*")
public class CalcualtorController {

    @Autowired
    private Calculator calculator;

    @RequestMapping(method = RequestMethod.GET, value = "calculate")
    public double calcualte(@RequestParam String equation) {
        try {
            return calculator.calculate(equation);
        } catch (CalculateEquationException e) {
            return Double.NaN;
        }
    }
}
