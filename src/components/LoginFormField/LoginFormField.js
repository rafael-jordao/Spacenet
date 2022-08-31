import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import SpacenetMinorLogo from "../../assets/SpacenetMinorLogo.svg"
import '../../components/LoginFormField/LoginFormField.css'
// import UsersService from '../../services/Users';
// import GetAllUsers from '../../services/Users';




const LoginFormField = () => {
  // Criando os estados para manipular Email e Senha
  // Manipulating states of email and password
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')


  // Tranformando o User em um objeto com suas propriedades para salvar no localStorage
  // Creating the user object with his own propertys to save in localStorage
  const user = {
    email: login,
    password: password
  }
  

  // useNavigate serve para ativar a mudança de rotas
  // useNavigate active the changing routes
  const navigate = useNavigate();

  // Funçao responsável por capturar os dados inseridos no formulário quando o botao for pressionado
  // Function responsible for handling all data in the form field when the button is pressed
  const handleSubmit = (e) => {
    if(!login || !password) {
      return null
    }
    e.preventDefault()
    setLogin(e.target.value)
    setPassword(e.target.value)
    setLogin('')
    setPassword('')
    //useNavigate here
    navigate('/homepage')
   
    localStorage.setItem('userData', JSON.stringify(user))
  }

  // Ambas as funcões abaixo sao responsaveis por captar as mudanças nos inputs
   const handleChangeLogin = (e) => {
    setLogin(e.target.value)
   }
   const handleChangePassword = (e) => {
     setPassword(e.target.value)
   }

  return (

    <div className="App">

      <div className="Login">

        <form className='.container-sm' onSubmit={handleSubmit}>
          <h3>Sign up</h3>
          <input
            onChange={handleChangeLogin}
            value={login}
            type="email" />
          <br />
          <input
            value={password}
            onChange={handleChangePassword}
            
            type="password" />
          <br />
          <button className="mainButton" >Entrar</button>
          <div className='links'>
            <div><strong><a className='link' href='#'>Criar conta</a></strong></div>
            <div> <a className='link' href='#'>Esqueceu sua senha?</a></div>
          </div>
        </form>

        <div>
          <section className="one-fourth" id="html">
            <img className="logoIcon" alt="Spacenet Logo" src={SpacenetMinorLogo} />
          </section>
        </div>

      </div>

     

    </div>
  );
}

export default LoginFormField;








