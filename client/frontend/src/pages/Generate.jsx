import { useState } from "react";
import axios from "axios";
import "./Generate.css";

export default function Generate() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    duration: ""
  });

  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/interns/generate",
        form
      );

      console.log(res.data);

      // IMPORTANT: make sure backend sends this key
      setCode(res.data.verificationCode);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      <h2>Generate Internship Code</h2>

      <div className="center-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Intern Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="designation"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
          />

          <input
            name="duration"
            placeholder="Duration"
            value={form.duration}
            onChange={handleChange}
          />

          <button type="submit">Generate</button>
        </form>

        {/* ✅ RESULT SHOWING PART */}
        {code && (
          <div className="result">
            <h3>Generated Code:</h3>
            <p>{code}</p>
          </div>
        )}
      </div>
    </div>
  );
}