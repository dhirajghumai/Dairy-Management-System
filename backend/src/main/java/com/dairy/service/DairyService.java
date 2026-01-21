package com.dairy.service;

import com.dairy.model.Customer;

public class DairyService {

    public double calculateRate(Customer c) {

        String milkType = c.getMilkType();
        if (milkType == null) {
            milkType = "C"; // default
        }

        double baseRate = milkType.equalsIgnoreCase("C") ? 52 : 65;

        double fat = c.getFat();
        double snf = c.getSnf();

        double fatBonus = (fat > 3.5) ? (fat - 3.5) * 2 : 0;
        double snfBonus = (snf > 8.5) ? (snf - 8.5) * 1 : 0;

        return baseRate + fatBonus + snfBonus;
    }

    public double calculateBill(Customer c) {
        return c.getMilkLitres() * c.getRate();
    }
}
