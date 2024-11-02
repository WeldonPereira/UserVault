import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Erro ao buscar usuários", err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user) => {
    const res = await api.post("/users", user);
    setUsers((prev) => [...prev, res.data]);
  };

  const updateUser = async (id, updatedUser) => {
    const res = await api.put(`/users/${id}`, updatedUser);
    setUsers((prev) => prev.map((u) => (u.id === id ? res.data : u)));
  };

  const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, addUser, updateUser, deleteUser };
}
