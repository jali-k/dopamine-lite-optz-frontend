import { withAuthenticator, Button, Heading, Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { getCurrentUser, fetchAuthSession  } from '@aws-amplify/auth'

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails, } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}

async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    console.log(`The accessToken: ${accessToken}`);
    console.log(`The idToken: ${idToken}`);
    let email = idToken?.payload.email;
    console.log(`The email: ${email}`);
  } catch (err) {
    console.log(err);
  }
}
   

function App() {
  currentAuthenticatedUser();
  currentSession();
  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <h1>Hello {user?.userId}</h1>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App)