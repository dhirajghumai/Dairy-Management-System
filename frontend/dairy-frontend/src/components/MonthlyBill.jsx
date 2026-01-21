import { useState } from "react";
import "./MonthlyBill.css";


function MonthlyBill() {
  const [month, setMonth] = useState("");
  const [data, setData] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const fetchReport = async () => {
    if (!month) {
      alert("Please select month");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:8080/api/milk/report/monthly?month=${month}`
      );
      const result = await res.json();
      setData(result);

      let total = 0;
      result.forEach(r => total += r.totalAmount);
      setGrandTotal(total);
    } catch (err) {
      alert("Failed to load monthly report");
    }
  };

  return (
    <div className="monthly-page">
      <div className="monthly-card">
        <h2>📅 Monthly Bill Report</h2>

        <div className="filter">
          <input
            type="month"
            value={month}
            onChange={e => setMonth(e.target.value)}
          />
          <button onClick={fetchReport}>View</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Total Milk (L)</th>
              <th>Total Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, i) => (
              <tr key={i}>
                <td>{c.code}</td>
                <td>{c.name}</td>
                <td>{c.totalMilk}</td>
                <td>{c.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="grand">
          💰 Grand Total: ₹ {grandTotal}
        </h3>
      </div>
    </div>
  );
}

export default MonthlyBill;
