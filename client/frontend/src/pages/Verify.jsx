import { useState } from "react";
import axios from "axios";
import "./Verify.css";

export default function Verify() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/interns/verify/${input.trim()}`
      );

      console.log(res.data);
      setResult(res.data);

    } catch (err) {
      console.log(err);
      setResult({ status: "Not Found ❌" });
    }

    setLoading(false);
  };

  return (
    <div className="verify-page">
      <h2>Verify Internship Code</h2>

      <form onSubmit={handleVerify} className="verify-form">
        <input
          type="text"
          placeholder="Enter verification code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>

      {result && (
  <div className="result-card">
    {result.intern ? (
      <>
        <h3>Verified ✅</h3>

        <p><strong>Name:</strong> {result.intern.name}</p>
        <p><strong>Designation:</strong> {result.intern.designation}</p>
        <p><strong>Duration:</strong> {result.intern.duration}</p>
      </>
    ) : (
      <h3>Not Found ❌</h3>
    )}
  </div>
)}
</div>)}