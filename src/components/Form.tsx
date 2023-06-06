function Form() {
  return (
    <form>
      <h1>Gerenciador de senhas</h1>
      <label htmlFor="serviceName">
        <input type="text" id="serviceName" />
        Nome do serviço
      </label>
      <label htmlFor="login">
        <input type="text" id="login" />
        Login
      </label>
      <label htmlFor="password">
        <input type="password" id="password" />
        Senha
      </label>
      <label htmlFor="url">
        <input type="text" id="url" />
        URL
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
