export function UserList({ users, onEdit, onDelete }) {
  if (!users.length)
    return (
      <p className="text-center text-gray-500">Nenhum usuário cadastrado.</p>
    );

  return (
    <div className="grid gap-4">
      {users.map((u) => (
        <div
          key={u.id}
          className="p-4 border rounded shadow flex justify-between items-center bg-white"
        >
          <div>
            <p className="font-semibold">{u.name}</p>
            <p className="text-sm text-gray-500">{u.email}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(u)}
              className="text-blue-600 hover:underline"
            >
              Editar
            </button>
            <button
              onClick={() => u.id && onDelete(u.id)}
              className="text-red-600 hover:underline"
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
