import { useState } from "react";
import MilkEntry from "./components/MilkEntry";
import DailyReport from "./components/DailyReport";
import ShiftReport from "./components/ShiftReport";
import MonthlyBill from "./components/MonthlyBill";




function App() {
  const [page, setPage] = useState("milk");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🥛 Dairy Management</h1>

      {/* MENU */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setPage("milk")}>Milk Entry</button>
        <button onClick={() => setPage("daily")}>Daily Report</button>
        <button onClick={() => setPage("shift")}>Shift Report</button>
       < button onClick={() => setPage("shift")}>MilkEntryt</button>
        < button onClick={() => setPage("MontlyBill")}>MonthlyBillt</button>
      </div>

      {/* PAGE LOAD */}
      {page === "milk" && <MilkEntry />}
      {page === "daily" && <DailyReport />}
      {page === "shift" && <ShiftReport />}
    </div>
  );
}

export default App;
