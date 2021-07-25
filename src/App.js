import './App.css';
import Balance from './components/Balance';
import Atm from './components/Atm';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [error, setError] = useState('');
  const [type, setType] = useState('Withdraw');
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);

  const onSelectChangeHandler = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const onTextChangeHandler = (e) => {
    if (e.target.value.length === 0) {
      setError('Please enter a valid amount...');
    } else {
      setError('');
      setAmount(Number(e.target.value));
    }
  };

  const onButtonClickHandler = (e) => {
    if (amount) {
      if (type === 'Withdraw' && balance < amount) {
        setError('Insufficient Funds...');
        return;
      } else {
        setError('');
      }
      let newBalance =
        type === 'Withdraw' ? balance - amount : balance + amount;
      setBalance(newBalance);
    } else {
      setError('');
    }
  };

  return (
    <div className='App'>
      <Header className='header' text='The Ficticious Bank' />
      <div className='body'>
        <Balance text='Balance' balance={balance} />
        <Atm
          onSelectChange={onSelectChangeHandler}
          onTextChangeHandler={onTextChangeHandler}
          error={error}
          onButtonClickHandler={onButtonClickHandler}
          value={type}
        />
      </div>
    </div>
  );
}

export default App;
