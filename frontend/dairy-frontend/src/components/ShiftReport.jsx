import { useState } from "react";

function ShiftReport() {
  const [shift, setShift] = useState("Morning");
  const [data, setData] = useState([]);

  const load = () => {
    fetch(`http://localhost:8080/api/milk/report/shift/${shift}`)
      .then(res => res.json())
      .then(setData);
  };

  return (
    <div style={{ width: "900px", margin: "auto" }}>
      <h2>🕒 Shift Wise Milk Report</h2>

      <select value={shift} onChange={e => setShift(e.target.value)}>
        <option>Morning</option>
        <option>Evening</option>
      </select>

      <button onClick={load} style={{ marginLeft: "10px" }}>
        Load
      </button>

      <table border="1" width="100%" cellPadding="6" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Milk</th>
            <th>Litres</th>
            <th>Rate</th>
            <th>Total ₹</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, i) => (
            <tr key={i}>
              <td>{c.code}</td>
              <td>{c.name}</td>
              <td>{c.milkType}</td>
              <td>{c.milkLitres}</td>
              <td>{c.rate}</td>
              <td>{c.totalBill}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShiftReport;
