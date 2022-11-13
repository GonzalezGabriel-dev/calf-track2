import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { ContractProvider } from './context/ContractProvider';
import RegisterScreen from './screens/RegisterScreen';
function App() {
  return (
    <ContractProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
    </ContractProvider>
  );
}

export default App;
