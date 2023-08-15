const handleLogout = () => {
  if (localStorage.getItem('jwtToken')) {
    // remove token for localStorage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiration');

    if (typeof window !== 'undefined') {
      const event = new Event('userLoggedOut');
      window.dispatchEvent(event);
    }
  }
  localStorage.removeItem('userId');
};

export default handleLogout;