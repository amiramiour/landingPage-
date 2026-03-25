import React, { useState, useEffect } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

import UserList from "../components/Admin/UserList";
import MissionList from "../components/Admin/MissionList";
import CandidatureList from "../components/Admin/CandidatureList";

import "../components/Admin/AdminDashboard.css";

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("users");

  const [stats, setStats] = useState({
    users: 0,
    missions: 0,
    candidatures: 0,
  });

  // 🔐 protection
  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  // 📊 stats
  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");

      const [u, m, c] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${import.meta.env.VITE_API_URL}/admin/missions`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${import.meta.env.VITE_API_URL}/admin/candidatures`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const users = await u.json();
      const missions = await m.json();
      const candidatures = await c.json();

      setStats({
        users: users.length,
        missions: missions.length,
        candidatures: candidatures.length,
      });
    };

    fetchStats();
  }, []);

  if (!user || user.role !== "admin") return null;

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UserList />;
      case "missions":
        return <MissionList />;
      case "candidatures":
        return <CandidatureList />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <h2>Admin</h2>

        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          👤 Utilisateurs
        </button>

        <button
          className={activeTab === "missions" ? "active" : ""}
          onClick={() => setActiveTab("missions")}
        >
          📄 Missions
        </button>

        <button
          className={activeTab === "candidatures" ? "active" : ""}
          onClick={() => setActiveTab("candidatures")}
        >
          📨 Candidatures
        </button>
      </div>

      {/* CONTENT */}
      <div className="admin-content">

        {/* TITLE */}
        <h1 className="admin-page-title">
          {activeTab === "users" && "Gestion des utilisateurs"}
          {activeTab === "missions" && "Gestion des missions"}
          {activeTab === "candidatures" && "Gestion des candidatures"}
        </h1>

        {/* STATS */}
        <div className="admin-stats">
          <div className="stat-card blue">
            <h3>{stats.users}</h3>
            <p>Utilisateurs</p>
          </div>

          <div className="stat-card orange">
            <h3>{stats.missions}</h3>
            <p>Missions</p>
          </div>

          <div className="stat-card green">
            <h3>{stats.candidatures}</h3>
            <p>Candidatures</p>
          </div>
        </div>

        {/* DATA */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;