import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import { theme } from '@/themes/amplifytheme';
import "../styles/loginpage.css";
import { Image } from '@chakra-ui/react';
import LoginImage from "../styles/login_side_dark.png";

export default function LoginPage() {
  const user = useAppSelector((state) => state.user);

  if (user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }


  return (
    <div className="login-page" style={{ display: 'flex', height: '100vh' }}>
      <div className="login-image" style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={LoginImage} alt="Login Illustration" 
          style={{ width: '100%', height: '100vh', objectFit: "cover" }} />
      </div>
      <div className="login-container" style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="auth-container">
          <ThemeProvider theme={theme}>
            <Authenticator.Provider>
              <Authenticator 
                socialProviders={['google']}
              />
            </Authenticator.Provider>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
