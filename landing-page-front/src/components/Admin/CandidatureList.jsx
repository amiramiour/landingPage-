import React, { useEffect, useState } from "react";
import "./UserList.css";
const CandidatureList = () => {
  const [candidatures, setCandidatures] = useState([]);
  const token = localStorage.getItem("token");

  const fetchCandidatures = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/candidatures`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setCandidatures(data);
  };

  useEffect(() => {
    fetchCandidatures();
  }, []);

  return (
  <div className="admin-container">
    <h2>Candidatures</h2>

    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Étudiant</th>
          <th>Mission</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {candidatures.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.student?.email}</td>
            <td>{c.mission?.title}</td>
            <td>
  <span className={`badge ${c.status}`}>
    {c.status}
  </span>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default CandidatureList;