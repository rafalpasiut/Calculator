package com.kodilla.calculator;

import com.kodilla.calculator.exception.CalculateEquationException;
import org.springframework.context.annotation.Configuration;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

@Configuration
public class Calculator {

    public Calculator (){

    }

    public double calculate(String equation) throws CalculateEquationException{
        ScriptEngineManager mgr = new ScriptEngineManager();
        ScriptEngine engine = mgr.getEngineByName("JavaScript");
        try {
            equation = equation.replaceAll("--","+");
            String result = engine.eval(equation).toString();
            return Double.parseDouble(result);
        } catch (ScriptException e) {
            throw new CalculateEquationException("JS parse equation error");
        } catch (NumberFormatException e){
            throw new CalculateEquationException("Cannot parse equation result to Double");
        }
    }
}
