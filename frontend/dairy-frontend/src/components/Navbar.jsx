import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>🥛 Dairy</h2>
      <div>
        <Link to="/" style={styles.link}>Milk Entry</Link>
        <Link to="/report" style={styles.link}>Daily Report</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 30px",
    background: "#f5f5f5"
  },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;
