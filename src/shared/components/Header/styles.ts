import styled from 'styled-components';

import logo from 'assets/logo_transparent.png';

export const Container = styled.div`
  width: 100%;

  padding: 0 20px;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`
})`
  width: 160px;
  height: 80px;
`;
