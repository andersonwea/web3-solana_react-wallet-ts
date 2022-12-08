import React from 'react';
import './App.css';
import WalletAdapaterSol from './components/WalletAdapter/WalletAdapaterSol';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


function App() {
  return (
    <div>
      <WalletAdapaterSol>
        <WalletMultiButton />
      </WalletAdapaterSol>
    </div>
  );
}

export default App;
