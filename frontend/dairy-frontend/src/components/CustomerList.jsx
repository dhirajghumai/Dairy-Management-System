import { useEffect, useState } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/milk/customers")
      .then(res => res.json())
      .then(data => setCustomers(data));
  }, []);

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2>👥 Customer List</h2>

      <table border="1" width="100%" cellPadding="6">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={i}>
              <td>{c.code}</td>
              <td>{c.name}</td>
              <td>{c.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
