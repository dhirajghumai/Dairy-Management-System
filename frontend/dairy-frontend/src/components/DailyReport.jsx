import { useEffect, useState } from "react";

function DailyReport() {
  const [data, setData] = useState([]);
  const [totalMilk, setTotalMilk] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/milk/report/today")
      .then(res => res.json())
      .then(result => {
        setData(result);

        let milk = 0;
        let amount = 0;
        result.forEach(r => {
          milk += r.milkLitres;
          amount += r.totalBill;
        });

        setTotalMilk(milk);
        setTotalAmount(amount);
      });
  }, []);

  return (
    <div style={{ width: "700px", margin: "auto" }}>
      <h2>📊 Today Milk Report</h2>

      <table border="1" width="100%" cellPadding="6">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Milk Type</th>
            <th>Milk (L)</th>
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

      <h3>Total Milk: {totalMilk} L</h3>
      <h3>Total Amount: ₹ {totalAmount}</h3>
    </div>
  );
}

export default DailyReport;
