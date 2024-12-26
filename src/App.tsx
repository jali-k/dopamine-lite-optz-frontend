import { withAuthenticator, Button, Heading, Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect } from 'react'
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { setUser, clearUser } from './state/slices/userSlice'

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const updateUserData = async () => {
      try {
        const { username, userId, signInDetails } = await getCurrentUser();
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        
        dispatch(setUser({
          username,
          userId,
          loginId: signInDetails?.loginId,
          email: idToken?.payload.email as string,
        }));
      } catch (err) {
        console.error('Error fetching user data:', err);
        dispatch(clearUser());
      }
    };

    updateUserData();
  }, [dispatch]);

  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user: authUser }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <h1>User ID: {user.userId}</h1>
          <h1>Login ID: {user.loginId}</h1>
          <h1>Email: {user.email}</h1>
          <button onClick={() => {
            signOut!();
            dispatch(clearUser());
          }}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App)