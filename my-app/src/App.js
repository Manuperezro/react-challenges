import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar link1="My Photos"  link2="My Ilustrations" link3="My Paintings"  /> */}
      <Sidebar />
      <NavBarSimple />
    </div>
  );
}

export default App;