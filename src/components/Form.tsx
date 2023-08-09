import { useEffect, useState } from 'react';
import './form.css';
import { IProducts } from '../types';

type PropType = {
  setFormIsVisible: (valor: boolean) => void;
  setPasswords: (valor: IProducts[]) => void;
  passwords: IProducts[];
};

function Form(props: PropType) {
  const { setFormIsVisible, setPasswords, passwords } = props;
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  // Condições
  const validationServiceName = () => {
    if (serviceName.length > 0) return true;
    if (serviceName.length === 0) return false;
  };

  const validationLogin = () => {
    if (login.length > 0) return true;
    if (login.length === 0) return false;
  };

  const validationUrl = () => {
    if (url.length > 0) return true;
    if (url.length === 0) return false;
  };

  // validação da senha

  const validationPassword = () => {
    const regexLettersNumbers = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
    const regexCharactersSpecial = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 8) return false;
    if (password.length > 16) return false;
    if (!regexLettersNumbers.test(password)) return false;
    if (!regexCharactersSpecial.test(password)) return false;

    if (
      password.length >= 8
     && password.length <= 16
     && regexCharactersSpecial.test(password)
     && regexLettersNumbers.test(password)
    ) return true;
  };

  // validação de todo o form
  const validationForm = () => {
    if (
      validationServiceName()
     && validationLogin()
     && validationUrl()
     && validationPassword()
    )setIsDisabled(false);
    else setIsDisabled(true);
  };

  // vizinha fofoqueira
  useEffect(() => {
    validationForm();
  }, [serviceName, login, password, url]);

  const classNameValid = 'valid-password-check';
  const classNameInvalid = 'invalid-password-check';

  // função de cadastrar form
  const savePasswords = (e: any) => {
    e.preventDefault();

    // let passwords:IProducts [] = [];

    // if (Object.prototype.hasOwnProperty.call(localStorage, 'passwords')) {
    //   const storage = localStorage.getItem('passwords');
    //   if (storage) {
    //     passwords = JSON
    //       .parse(storage) as [IProducts];
    //   }
    // }
    // passwords.push({ serviceName, login, password, url });

    // localStorage.setItem('passwords', JSON.stringify(passwords));

    // cria um novo array mantendo o antigo e adicionando as novas informações
    const newPasswords = [...passwords, { serviceName, login, password, url }];
    setPasswords(newPasswords);
    setFormIsVisible(false);
  };

  return (
    <form onSubmit={ savePasswords }>
      <div className="sla">
        <div className="inputs">
          <label htmlFor="serviceName">
            Nome do serviço
            <input
              type="text"
              id="serviceName"
              className="name"
              onChange={ (e) => setServiceName(e.target.value) }
            />
          </label>
          <label htmlFor="login" className="loginPassword">
            Login
            <input
              type="text"
              id="login"
              className="login"
              onChange={ (e) => setLogin(e.target.value) }
            />
          </label>
          <label htmlFor="password" className="loginPassword">
            Senha
            <input
              type="password"
              id="password"
              className="password"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
          <label htmlFor="url">
            URL
            <input
              type="text"
              id="url"
              className="url"
              onChange={ (e) => setUrl(e.target.value) }
            />
          </label>
        </div>
        <div className="messages">
          <p
            className={ password.length >= 8 ? classNameValid : classNameInvalid }
          >
            Possuir 8 ou mais caracteres
          </p>
          <p
            className={
              password.length <= 16 ? classNameValid : classNameInvalid
            }
          >
            Possuir até 16 caracteres
          </p>
          <p
            className={
              /^(?=.*[a-zA-Z])(?=.*\d).*$/.test(password)
                ? classNameValid
                : classNameInvalid
            }
          >
            Possuir letras e números
          </p>
          <p
            className={
              /[!@#$%^&*(),.?":{}|<>]/.test(password)
                ? classNameValid
                : classNameInvalid
            }
          >
            Possuir algum caractere especial
          </p>
        </div>
      </div>
      <div className="button">
        <button className="Cancelar" onClick={ () => setFormIsVisible(false) }>
          Cancelar
        </button>
        <button className="Cadastrar" type="submit" disabled={ isDisabled }>
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default Form;
