import React, { useEffect, useState } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Supprimer cet utilisateur ?")) return;

    await fetch(`${import.meta.env.VITE_API_URL}/admin/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔍 SEARCH
  const filtered = users.filter((u) =>
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  // 🔄 SORT
  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === "email") return a.email.localeCompare(b.email);
    return a.id - b.id;
  });

  // 📄 PAGINATION
  const indexOfLast = currentPage * USERS_PER_PAGE;
  const indexOfFirst = indexOfLast - USERS_PER_PAGE;
  const currentUsers = sorted.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sorted.length / USERS_PER_PAGE);

  return (
    <div className="admin-container">

      {/* 🔍 SEARCH */}
      <div className="admin-tools">
        <input
          type="text"
          placeholder="Rechercher par email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSortKey(e.target.value)}>
          <option value="id">Trier par ID</option>
          <option value="email">Trier par Email</option>
        </select>
      </div>

      <h2>Utilisateurs</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                {u.role !== "admin" && (
                  <button onClick={() => deleteUser(u.id)}>
                    Supprimer
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📄 PAGINATION */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;