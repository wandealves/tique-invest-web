import styled, { css } from 'styled-components';

import logo from 'assets/logo_transparent.png';

const Link = css`
  height: 45px;

  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;

  opacity: 0.6;
  transition: 0.3s;

  border-radius: 5px;
  border: none;

  :hover {
    opacity: 1;
  }
`;

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 990px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img.attrs({
  src: `${logo}`
})`
  width: 160px;
  height: 80px;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding-right: 20px;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Item = styled.button<{ backgroundColor: string; size: number }>`
  width: ${(p) => `calc(100% / ${p.size})`};
  ${Link}

  background-color: ${(p) => p.backgroundColor};
`;

export const MobileMenu = styled.div`
  display: none;

  svg {
    fill: var(--white);
    font-size: 30px;
  }

  @media (max-width: 990px) {
    display: inline;
  }
`;

export const MobileMenuItem = styled.div<{ mobile: boolean }>`
  width: 100%;
  height: 100vh;

  display: ${(p) => (p.mobile ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: 20px;

  position: absolute;
  left: 0;

  background-color: var(--teal4);

  opacity: 0.7;

  padding: 20px 0;
  margin-top: 5px;

  z-index: 999;

  .menu-item {
    font-size: 20px;
    font-weight: 700;
    color: var(--white);

    opacity: 0.9;
    transition: 0.3s;

    :hover {
      opacity: 1;
    }
  }
`;
