type PropType = {
  setFormIsVisible: (valor : boolean) => void
};

function Form(props: PropType) {
  const { setFormIsVisible } = props;
  return (
    <form>
      <label htmlFor="serviceName">
        Nome do serviço
        <input type="text" id="serviceName" />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" id="login" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" id="password" />
      </label>
      <label htmlFor="url">
        URL
        <input type="text" id="url" />
      </label>
      <button>Cadastrar</button>
      <button onClick={ () => setFormIsVisible(false) }>Cancelar</button>
    </form>
  );
}

export default Form;
