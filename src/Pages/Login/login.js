import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import '../../App.css';
import {Container, Form, ButtonLink} from './style';


function login () {
    return (
        <div className="App">
          <>
            <Container>
              <img src={Logo} alt="Logo Conta Simples" />
              <h1>Faça seu login</h1>

              <Form>
                <input
                  type="text"
                  name="CPF"
                  placeholder="Digite seu CPF"
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

export default login;
