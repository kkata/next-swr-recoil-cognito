import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  const { signOut } = useAuth();

  const handleClick = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleClick}>Log out</button>;
};

export default LogoutButton;
