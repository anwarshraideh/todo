
import PaginationProvider from './context/pagenation.js';
import AuthProvider from './context/auth';
import Auth from './components/auth/auth'
import ToDo from './components/todo/todo-connected.js';
import { Container } from 'react-bootstrap';
import './app.scss';
import NavBar from './components/header/Navbar.js';

const App = () => {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <PaginationProvider>
          <Auth capability="read">
            <ToDo />
          </Auth>
          <Auth capability="guest">
            <Container style={{ textAlign: 'center', marginTop: '100px' }}>
              <h1>To Do List Manager</h1>
              <p>You need to Signup / Signin to see what to do </p>
            </Container>
          </Auth>
        </PaginationProvider>
      </AuthProvider>
    </>
  );
};

export default App;

