import logo from './logo.svg';
import './App.css';
import { FC, useMemo } from "react"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { ContractProvider } from './context/ContractProvider';
import RegisterScreen from './screens/RegisterScreen';
function App() {
  const endpoint = "https://muddy-aged-panorama.solana-devnet.discover.quiknode.pro/0fe7822c98ade63f96ae1be8e82d17b26d57cacc/"
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []

  )
  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
    <ContractProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
    </ContractProvider>
    </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
