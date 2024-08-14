import axios from '../backend.js'; // Ajusta la ruta según tu estructura

const TOKEN_KEY = 'token';

export function login(credentials) {
  return axios.post('/api/user/auth', credentials)
    .then(response => {
      const { token, rol } = response.data.data;
      localStorage.setItem(TOKEN_KEY, token);
      return { token, rol };
    });
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn() {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    // Aquí puedes agregar una verificación adicional del token si lo deseas
    return true;
  }
  return false;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getRole() {
  const token = getToken();
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.rol;
  }
  return null;
}
