import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import '../../App.css';
import {Container, Form, ButtonLink} from './style';
import api from '../../services/api';

function Login() {

  const [infos, setInfos] = useState({
    cpf: '',
    password: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const { cpf, password: pass } = infos;

    const infosToApi = {
      cpf,
      pass,
    };

    const response = await api.post('/', infosToApi);
    console.log(response);

    if(response.status !== 200) {
      console.log(response);
      return alert('Houve um erro ao autenticar usuário');
    };

    const handleInputChange = (e) => {
      setInfos({
        ...infos,
        [e.target.name] : e.target.value
      })
    }
  };
    return (
        <div className="Login">
          <>
            <Container>
              <img src={Logo} alt="Logo Conta Simples" />
              <h1>Faça seu login</h1>

              <Form onSubmit={onFormSubmit}>
                <input
                  type="text"
                  name="CPF"
                  placeholder="Digite seu CPF"
                  //onChange={handleInputChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  //onChange={handleInputChange}
                />

                <button type="submit">Continuar</button>
              </Form>
              <ButtonLink>
                  <Link to = "/">Esqueci minha senha</Link>
                </ButtonLink>
                <ButtonLink>
                  <Link to = "/">Ainda não sou cliente</Link>
                </ButtonLink>
            </Container>
          </>
        </div>
      );
}

export default Login;
