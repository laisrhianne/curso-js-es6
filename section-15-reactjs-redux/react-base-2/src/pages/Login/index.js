import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

// import axios from '../../services/axios';

export default function Login() {
  /*   React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/users');
      console.log(response);
    }

    getData();
  }, []); */

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed>
        Login
        <small>Oi</small>
      </Title>
      <Paragrafo>Lorem Ipsum</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
