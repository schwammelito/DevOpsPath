package ch.zhaw.iwi.devops.fizzbuzz;

import org.junit.Assert;
import org.junit.Test;

public class FizzBuzzConverterTest {

    @Test
    public void fizzBuzzConverter1() {

        FizzBuzzConverter fizzBuzz = new FizzBuzzConverter();
        Assert.assertEquals("1", fizzBuzz.convert(1));

    }

    @Test
    public void fizzBuzzConvertor2() {

        FizzBuzzConverter fizzBuzz = new FizzBuzzConverter();
        Assert.assertEquals("2", fizzBuzz.convert(2));

    }

    @Test
    public void fizzBuzzConvertor3() {

        FizzBuzzConverter fizzBuzz = new FizzBuzzConverter();

        Assert.assertEquals("Fizz", fizzBuzz.convert(3));
    }
    
    @Test
    public void fizzBuzzConvertorMultiplesOfThree() {

        FizzBuzzConverter fizzBuzz = new FizzBuzzConverter();

        Assert.assertEquals("Fizz", fizzBuzz.convert(6));
    }

    @Test
    public void fizzBuzzConvertorMultiplesOfSeven() {

        FizzBuzzConverter fizzBuzz = new FizzBuzzConverter();

        Assert.assertEquals("Buzz", fizzBuzz.convert(7));
    }

    @Test
    public void fizzBuzzConvertorMultiplesOfThreeAndSeven() {
        FizzBuzzConverter fizzBuzz = new FizzBuzzConverter();
        Assert.assertNotEquals("FizzBuzz", fizzBuzz.convert(14));
        Assert.assertEquals("FizzBuzz", fizzBuzz.convert(21));
        Assert.assertEquals("FizzBuzz", fizzBuzz.convert(42));
        Assert.assertEquals("FizzBuzz", fizzBuzz.convert(63));
    }

}