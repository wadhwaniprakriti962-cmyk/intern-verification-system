import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css"; 

export default function Dashboard() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/interns/all");

        console.log("API RESPONSE:", res.data);

        const data =
          res.data?.interns ||
          res.data?.data ||
          res.data ||
          [];

        setInterns(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
        setInterns([]);
      }
    };

    fetchInterns();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Intern Dashboard</h1>

      {Array.isArray(interns) && interns.length > 0 ? (
        <div className="card-container">
          {interns.map((item) => (
            <div className="card" key={item._id}>
              <h2>{item.name}</h2>
              <p><b>Role:</b> {item.designation}</p>
              <p><b>Duration:</b> {item.duration}</p>
              <p><b>Code:</b> {item.verificationCode}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No interns found
        </p>
      )}
    </div>
  );
}