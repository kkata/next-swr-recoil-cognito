import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut();
    console.log('Logout successful');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
