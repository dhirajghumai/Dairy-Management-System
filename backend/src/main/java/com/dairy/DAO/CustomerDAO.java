package com.dairy.DAO;

import java.sql.*;
import com.dairy.model.Customer;
import com.dairy.util.DBUtil;

public class CustomerDAO {

    public Customer getCustomerByCode(int code) {
        Customer c = null;
        try (Connection con = DBUtil.getConnection()) {

            String sql = "SELECT * FROM customer WHERE code=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, code);

            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                c = new Customer();
                c.setCode(rs.getInt("code"));
                c.setName(rs.getString("name"));
                c.setMobile(rs.getString("mobile"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return c;
    }

    public boolean addCustomer(Customer c) {
        try (Connection con = DBUtil.getConnection()) {

            String sql = "INSERT INTO customer(code,name,mobile) VALUES(?,?,?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, c.getCode());
            ps.setString(2, c.getName());
            ps.setString(3, c.getMobile());

            return ps.executeUpdate() > 0;
        } catch (Exception e) {
            return false;
        }
    }
}
