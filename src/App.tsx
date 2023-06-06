import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  return (
    <>
      <Title />
      {formIsVisible === false && (
        <button onClick={ () => setFormIsVisible(true) }>
          Cadastrar nova senha
        </button>
      )}
      {formIsVisible === true && <Form setFormIsVisible={ setFormIsVisible } />}
    </>
  );
}

export default App;
