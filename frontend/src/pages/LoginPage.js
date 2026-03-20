import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(credentials.username, credentials.password);
    } catch (error) {
      alert("Falha no login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuário"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default LoginPage;