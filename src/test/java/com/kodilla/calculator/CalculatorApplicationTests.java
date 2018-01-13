package com.kodilla.calculator;

import com.kodilla.calculator.exception.CalculateEquationException;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CalculatorApplicationTests {

    @Test
    public void contextLoads() {
    }

    @Test
    public void testCalculateEquation() {
        //Given
        Calculator calculator = new Calculator();
        String equation1 = "5+4";
        String equation2 = "3+5-1";
        String equation3 = "2+2*2";

        //When
        Double result1 = null;
        Double result2 = null;
        Double result3 = null;
        try {
            result1 = calculator.calculate(equation1);
            result2 = calculator.calculate(equation2);
            result3 = calculator.calculate(equation3);
        } catch (CalculateEquationException e) {
            e.printStackTrace();
        }

        //Then
        Assert.assertEquals(new Double(9), result1);
        Assert.assertEquals(new Double(7), result2);
        Assert.assertEquals(new Double(6), result3);
    }

}
