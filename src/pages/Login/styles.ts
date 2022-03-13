import styled from 'styled-components';

import logo from 'assets/logo_transparent.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`
})`
  width: 380px;
  height: 180px;

  //background-color: var(--bg-body);
`;

export const Content = styled.div`
  width: 800px;
  height: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: var(--padding-default);

  border-radius:10px;

  background-color: var(--light-gray);
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

export const Form = styled.form`
  width:100%;

  display: flex;
  flex-direction: column;

  gap:20px;

  margin-top:40px;

  .txt-login{
    width:100%;
  }

  .wrapper-button{
    width:100%;

    display:flex;
    justify-content:center;

    margin-top:20px;

    >button{
      width:200px;
    }
  }
`;
