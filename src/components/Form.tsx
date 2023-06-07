import { useEffect, useState } from 'react';

type PropType = {
  setFormIsVisible: (valor: boolean) => void;
};

function Form(props: PropType) {
  const { setFormIsVisible } = props;
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
    ) setIsDisabled(false);
    else setIsDisabled(true);
  };

  // vizinha fofoqueira
  useEffect(() => {
    validationForm();
  }, [serviceName, login, password, url]);

  const classNameValid = 'valid-password-check';
  const classNameInvalid = 'invalid-password-check';

  return (
    <form>
      <label htmlFor="serviceName">
        Nome do serviço
        <input
          type="text"
          id="serviceName"
          onChange={
            (e) => setServiceName(e.target.value)
          }
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          id="login"
          onChange={
            (e) => setLogin(e.target.value)
          }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          onChange={
            (e) => setPassword(e.target.value)
          }
        />
      </label>
      <label htmlFor="url">
        URL
        <input type="text" id="url" onChange={ (e) => setUrl(e.target.value) } />
      </label>
      <button disabled={ isDisabled }>Cadastrar</button>
      <button onClick={ () => setFormIsVisible(false) }>Cancelar</button>
      <div>
        <p className={ password.length >= 8 ? classNameValid : classNameInvalid }>
          Possuir 8 ou mais caracteres
        </p>
        <p className={ password.length <= 16 ? classNameValid : classNameInvalid }>
          Possuir até 16 caracteres
        </p>
        <p className={ /^(?=.*[a-zA-Z])(?=.*\d).*$/.test(password) ? classNameValid : classNameInvalid }>Possuir letras e números</p>
        <p className={ /[!@#$%^&*(),.?":{}|<>]/.test(password) ? classNameValid : classNameInvalid }>Possuir algum caractere especial </p>
      </div>
    </form>
  );
}

export default Form;
