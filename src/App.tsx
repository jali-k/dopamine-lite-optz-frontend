import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setUser, clearUser } from './state/slices/userSlice';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/ClassLessonsPage';
import NotesPage from './pages/ClassNotesPage';
import LessonPage from './pages/LessionPage';
import ClassesPage from './pages/ClasesPage';
import Navbar from './components/Navbar';
import NavbarStatic from './components/NavbarStatic';


function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const updateUserData = async () => {
      try {
        const { username, userId, signInDetails } = await getCurrentUser();
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
        console.log(`The accessToken: ${accessToken}`);
        console.log(`The idToken: ${idToken}`);
        
        dispatch(setUser({
          username,
          userId,
          loginId: signInDetails?.loginId,
          email: idToken?.payload.email as string,
          isAuthenticated: true,
        }));
      } catch (err) {
        console.error('Error fetching user data:', err);
        dispatch(clearUser());
      }
    };

    updateUserData();
  }, [dispatch]);

  if (user.isLoading) {
  return(

    
  <>
  <NavbarStatic />
    <Box  height="80vh" display="flex" alignItems="center" justifyContent="center">
     
     <Spinner size="xl" color="blue.500" />
   </Box></>
  )
}

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={user.isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/classes/:clsid/lessons" element={<LessonsPage />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/notes" element={<NotesPage />} />
       <Route path="/classes/:clsid/lessons/:id/:title?" element={<LessonPage />} />
    </Route>
      </Routes>
    </BrowserRouter>
 

  );
}

export default App;