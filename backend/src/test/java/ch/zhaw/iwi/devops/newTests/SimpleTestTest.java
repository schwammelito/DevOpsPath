package ch.zhaw.iwi.devops.newTests;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SimpleTestTest {

    @Test
    public void testConcatenate() {
        SimpleTest simpleTest = new SimpleTest();

        String result = simpleTest.concatenate("one", "two");

        assertEquals("onetwo", result);

    }
}
