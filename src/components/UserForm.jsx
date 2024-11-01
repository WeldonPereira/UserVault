import { useEffect, useState } from "react";

export function UserForm({ onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setEmail(initialData.email || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onSubmit({ name: name.trim(), email: email.trim() });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border rounded p-2"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border rounded p-2"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
          }}
          className="bg-gray-200 rounded p-2"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}
