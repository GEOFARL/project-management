import AddClientModal from './components/AddClientModal';
import Clients from './components/Clients';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddClientModal />
        <Clients />
      </div>
    </>
  );
}

export default App;
