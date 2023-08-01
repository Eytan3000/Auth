import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
// function App() {
//   return (
//     <AuthProvider>
//       <Container
//         className="d-flex align-items-center justify-content-center"
//         style={{ minHeight: '100vh' }}>
//         <div className="w-=100" style={{ maxWidth: '400px' }}>
//           <SignUp />
//         </div>
//       </Container>
//     </AuthProvider>
//   );
// }
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'update-profile',
      element: (
        <PrivateRoute>
          <UpdateProfile />
        </PrivateRoute>
      ),
    },
  ]);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}>
      <div className="w-=100" style={{ maxWidth: '400px' }}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
