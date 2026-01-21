package com.dairy.milkcontroller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.dairy.DAO.CustomerDAO;
import com.dairy.DAO.MilkDAO;
import com.dairy.model.Customer;
import com.dairy.model.MilkEntry;

@RestController
@RequestMapping("/api/milk")
@CrossOrigin("*")
public class MilkController {

    CustomerDAO customerDAO = new CustomerDAO();
    MilkDAO milkDAO = new MilkDAO();

    // ================= GET CUSTOMER BY CODE =================
    @GetMapping("/customer/{code}")
    public Customer getCustomer(@PathVariable int code) {
        return customerDAO.getCustomerByCode(code);
    }

    // ================= ADD CUSTOMER =================
    @PostMapping("/customer")
    public String addCustomer(@RequestBody Customer c) {
        return customerDAO.addCustomer(c)
                ? "Customer Added"
                : "Customer Exists";
    }

    // ================= SAVE MILK ENTRY =================
    @PostMapping("/milk")
    public String saveMilk(@RequestBody MilkEntry m) {
        return milkDAO.saveMilk(m)
                ? "Milk Saved"
                : "Failed to Save";
    }

    // ================= TODAY MILK REPORT =================
    @GetMapping("/today")
    public List<MilkEntry> todayMilkReport() {
        return milkDAO.getTodayMilk();
    }
}
