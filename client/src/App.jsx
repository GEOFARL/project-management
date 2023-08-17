import AddClientModal from './components/AddClientModal';
import Clients from './components/Clients';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddClientModal />
        <Projects />
        <Clients />
      </div>
    </>
  );
}

export default App;
