import { useState } from "react";

function MonthlyBill() {
  const [code, setCode] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("2026");
  const [bill, setBill] = useState(null);

  const loadBill = () => {
    fetch(`http://localhost:8080/api/milk/bill/monthly/${code}/${month}/${year}`)
      .then(res => res.json())
      .then(setBill);
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>🧾 Monthly Bill</h2>

      <input placeholder="Customer Code"
        onChange={e => setCode(e.target.value)} />

      <input placeholder="Month (1-12)"
        onChange={e => setMonth(e.target.value)} />

      <input placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)} />

      <button onClick={loadBill}>Generate Bill</button>

      {bill && (
        <div style={{ marginTop: "20px" }}>
          <h3>Name: {bill.name}</h3>
          <p>Total Milk: {bill.milkLitres} L</p>
          <p>Total Amount: ₹ {bill.totalBill}</p>
        </div>
      )}
    </div>
  );
}

export default MonthlyBill;
