import React, { useEffect, useState } from "react";
import "./UserList.css";
const MissionList = () => {
  const [missions, setMissions] = useState([]);
  const token = localStorage.getItem("token");

  const fetchMissions = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/missions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setMissions(data);
  };

  const deleteMission = async (id) => {
    if (!window.confirm("Supprimer mission ?")) return;

    await fetch(`${import.meta.env.VITE_API_URL}/admin/missions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchMissions();
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  return (
  <div className="admin-container">
    <h2>Missions</h2>

    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Titre</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {missions.map((m) => (
          <tr key={m.id}>
            <td>{m.id}</td>
            <td>{m.title}</td>
            <td>{m.status}</td>
            <td>
              <button onClick={() => deleteMission(m.id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default MissionList;