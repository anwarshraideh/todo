
import PaginationProvider from './context/pagenation.js';
import ToDo from './components/todo/todo-connected.js';
import './app.scss';
import NavBar from './components/header/Navbar.js';

const App = () => {
  return (
    <>
      <NavBar />
      <PaginationProvider>
      <ToDo />
      </PaginationProvider>
      
    </>
  );
};

export default App;

