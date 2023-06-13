/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import { IProducts } from './types';

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [passwords, setPasswords] = useState<IProducts[]>([]);
  // useEffect(() => {
  //   if (Object.prototype.hasOwnProperty.call(localStorage, 'passwords')) {
  //     const storage = localStorage.getItem('passwords');
  //     if (storage) {
  //       const storagePasswords = JSON
  //         .parse(storage) as [IProducts];
  //       setPasswords(storagePasswords);
  //     }
  //   }
  // }, []);
  const removePassword = (index: number) => {
    const updatedPasswords = [...passwords];
    updatedPasswords.splice(index, 1);
    setPasswords(updatedPasswords);
  };

  return (
    <body>
      <Title />
      {formIsVisible === false && (
        <button className="novaSenha" onClick={ () => setFormIsVisible(true) }>
          Cadastrar nova senha
        </button>
      )}
      {formIsVisible === true
      && <Form
        setFormIsVisible={ setFormIsVisible }
        passwords={ passwords }
        setPasswords={ setPasswords }
      />}
      <ul className="Passwords">
        {' '}
        { passwords.length > 0 ? passwords.map((password, key) => (
          <li key={ key }>
            <a href={ password.url }>{ password.serviceName }</a>
            <p>Login</p>
            <p>{password.login}</p>
            <p>Senha</p>
            <p>{password.password}</p>
            <button data-testid="remove-btn" onClick={ () => removePassword(key) }> </button>
          </li>
        )) : <h3 className="Mensagem">nenhuma senha cadastrada</h3> }
      </ul>
    </body>
  );
}

export default App;
