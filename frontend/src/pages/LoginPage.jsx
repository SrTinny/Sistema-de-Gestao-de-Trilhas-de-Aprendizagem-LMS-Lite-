
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(credentials.username, credentials.password);
      // O redirecionamento será feito pelo useEffect
    } catch (error) {
      alert("Falha no login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="w-full max-w-sm flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6 tracking-tight drop-shadow-sm select-none">LMS Lite</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 w-full flex flex-col gap-6 border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="px-4 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            autoFocus
          />
          <input
            type="password"
            placeholder="Senha"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="px-4 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
          <button
            type="button"
            className="mt-2 bg-white border border-blue-400 text-blue-700 hover:bg-blue-50 font-semibold py-2 rounded transition"
            onClick={() => navigate('/register')}
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
