import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { UserForm } from "../components/UserForm";
import { UserList } from "../components/UserList";

export function Home() {
  const { users, addUser, updateUser, deleteUser, loading } = useUsers();
  const [editingUser, setEditingUser] = useState(null);

  const handleSubmit = (user) => {
    if (editingUser && editingUser.id) {
      updateUser(editingUser.id, { ...user, id: editingUser.id });
      setEditingUser(null);
    } else {
      addUser(user);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">UserVault</h1>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            {editingUser ? "Editar usuário" : "Novo usuário"}
          </h2>
          <UserForm onSubmit={handleSubmit} initialData={editingUser} />
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Lista de usuários</h2>
          {loading ? (
            <p>Carregando usuários...</p>
          ) : (
            <UserList
              users={users}
              onEdit={(u) => setEditingUser(u)}
              onDelete={(id) => {
                if (confirm("Tem certeza que deseja excluir?")) {
                  deleteUser(id);
                  if (editingUser?.id === id) setEditingUser(null);
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
