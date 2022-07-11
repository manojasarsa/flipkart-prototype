import './App.css';
import { Filters, Header, Products } from './components';

function App() {
  return (
    <div className="App">
        <div className="main-container">

            <Header />
            <Filters />
            <Products />

        </div>
    </div>
  );
}

export default App;
