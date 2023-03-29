import { useRequireAuth } from '@/hooks/useRequireAuth';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  useRequireAuth(false);

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
