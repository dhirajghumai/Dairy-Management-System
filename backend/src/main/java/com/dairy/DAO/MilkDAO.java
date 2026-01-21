package com.dairy.DAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.dairy.model.MilkEntry;

public class MilkDAO {

    private Connection con;

    public MilkDAO() {
        try {
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/dairy",
                    "root",
                    "root"
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ================= SAVE MILK =================
    public boolean saveMilk(MilkEntry m) {
        try {
            String sql = """
                INSERT INTO milk_entry
                (code, name, milk_type, shift, milk_litres, fat, snf, rate, total)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """;

            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, m.getCode());
            ps.setString(2, m.getName());
            ps.setString(3, m.getMilkType());
            ps.setString(4, m.getShift());
            ps.setDouble(5, m.getMilkLitres());
            ps.setDouble(6, m.getFat());
            ps.setDouble(7, m.getSnf());
            ps.setDouble(8, m.getRate());
            ps.setDouble(9, m.getTotalBill());

            return ps.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    // ================= TODAY MILK REPORT =================
    public List<MilkEntry> getTodayMilk() {

        List<MilkEntry> list = new ArrayList<>();

        try {
            String sql = """
                SELECT code, name, milk_type, milk_litres, rate, total
                FROM milk_entry
                WHERE entry_date = CURDATE()
            """;

            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                MilkEntry m = new MilkEntry();
                m.setCode(rs.getInt("code"));
                m.setName(rs.getString("name"));
                m.setMilkType(rs.getString("milk_type"));
                m.setMilkLitres(rs.getDouble("milk_litres"));
                m.setRate(rs.getDouble("rate"));
                m.setTotalBill(rs.getDouble("total"));

                list.add(m);   // ✅ हा भाग missing होता
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }
}
