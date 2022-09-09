import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error'

const LoginForm = () => {
  const username = useForm();
  const password = useForm();


  const { userLogin, error, loading} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  function SubmitButton({children}){
    if(username.value && password.value.length >= 3){
      return <Button>{children}</Button>
    }else{
      return <Button disabled>{children}</Button>
    }
  }
 
  return (
   
    <section className='animeLeft'>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
      
        {loading ? <Button>Carregando</Button> : <Button>Entrar</Button>}
        <Error error={error}/>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;