import { useEffect, useState } from "react";
import "./MilkEntry.css";

function MilkEntry() {
  const [form, setForm] = useState({
    code: "",
    name: "",
    milkType: "Cow",
    shift: "Morning",
    milkLitres: "",
    fat: "",
    snf: "",
    rate: 0,
    totalBill: 0,
  });

  /* ================= FETCH CUSTOMER NAME ================= */
  const fetchCustomer = async (code) => {
    if (!code) return;

    try {
      const res = await fetch(`http://localhost:8080/api/milk/customer/${code}`);
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setForm(prev => ({ ...prev, name: data.name }));
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (name === "code") {
      fetchCustomer(value);
    }
  };

  /* ================= AUTO RATE (FAT + SNF) ================= */
  useEffect(() => {
    const fat = Number(form.fat || 0);
    const snf = Number(form.snf || 0);

    // Dairy formula (example)
    const rate = (fat * 6) + (snf * 2);

    setForm(prev => ({ ...prev, rate }));
  }, [form.fat, form.snf]);

  /* ================= TOTAL AUTO CALC ================= */
  useEffect(() => {
    const total =
      Number(form.milkLitres || 0) * Number(form.rate || 0);

    setForm(prev => ({ ...prev, totalBill: total }));
  }, [form.milkLitres, form.rate]);

  /* ================= SAVE ENTRY ================= */
  const saveEntry = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/milk/milk", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const msg = await res.text();
      alert(msg);
    } catch (err) {
      alert("Failed to Save Entry");
    }
  };

  return (
    <div className="page-center">
      <div className="milk-card medium">
        <h2 className="title">🥛 Milk Entry</h2>

        <input
          name="code"
          placeholder="Customer Code"
          value={form.code}
          onChange={handleChange}
        />

        <input
          name="name"
          placeholder="Customer Name"
          value={form.name}
          readOnly
        />

        <select
          name="milkType"
          value={form.milkType}
          onChange={handleChange}
        >
          <option>Cow</option>
          <option>Buffalo</option>
        </select>

        <select
          name="shift"
          value={form.shift}
          onChange={handleChange}
        >
          <option>Morning</option>
          <option>Evening</option>
        </select>

        <input
          name="milkLitres"
          placeholder="Milk Litres"
          type="number"
          value={form.milkLitres}
          onChange={handleChange}
        />

        <input
          name="fat"
          placeholder="FAT (%)"
          type="number"
          value={form.fat}
          onChange={handleChange}
        />

        <input
          name="snf"
          placeholder="SNF (%)"
          type="number"
          value={form.snf}
          onChange={handleChange}
        />

        <input
          name="rate"
          placeholder="Rate"
          value={form.rate}
          readOnly
        />

        <input
          placeholder="Total Bill"
          value={form.totalBill}
          readOnly
        />

        <button className="save-btn" onClick={saveEntry}>
          Save Entry
        </button>
      </div>
    </div>
  );
}

export default MilkEntry;
