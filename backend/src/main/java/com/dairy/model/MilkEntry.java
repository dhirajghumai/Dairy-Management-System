package com.dairy.model;

public class MilkEntry {

    private int code;
    private String name;
    private String milkType;
    private String shift;
    private double milkLitres;
    private double fat;
    private double snf;
    private double rate;
    private double totalBill;

    // getters & setters
    public int getCode() {
        return code;
    }
    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getMilkType() {
        return milkType;
    }
    public void setMilkType(String milkType) {
        this.milkType = milkType;
    }

    public String getShift() {
        return shift;
    }
    public void setShift(String shift) {
        this.shift = shift;
    }

    public double getMilkLitres() {
        return milkLitres;
    }
    public void setMilkLitres(double milkLitres) {
        this.milkLitres = milkLitres;
    }

    public double getFat() {
        return fat;
    }
    public void setFat(double fat) {
        this.fat = fat;
    }

    public double getSnf() {
        return snf;
    }
    public void setSnf(double snf) {
        this.snf = snf;
    }

    public double getRate() {
        return rate;
    }
    public void setRate(double rate) {
        this.rate = rate;
    }

    public double getTotalBill() {
        return totalBill;
    }
    public void setTotalBill(double totalBill) {
        this.totalBill = totalBill;
    }
}
