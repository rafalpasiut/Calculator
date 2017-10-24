package com.kodilla.calculator;

public class Calculator {
    public Calculator (){

    }
    public double subtract(double a, double b){
        return a-b;
    }
    public double add(double a, double b){
        return a+b;
    }

    public static void main(String[] args){
        Calculator calc = new Calculator();

        System.out.println(calc.add(2,3));
        System.out.println(calc.subtract(5,10));
    }
}
