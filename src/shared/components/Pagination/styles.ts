import styled from 'styled-components';

export const Container = styled.div`
  .actions {
    fill: var(--teal2);

    cursor: pointer;

    &:hover {
      opacity: 0.8;
      fill: var(--teal3);
      transition: 0.3s ease-in;
    }
  }

  .actions-disable{
    fill: gray;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NextButton = styled.span`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--teal2);
  color: var(--white);

  font-size: 18px;
  font-weight: bold;

  border-radius: 20px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background-color: var(--teal4);
    transition: 0.3s ease-in;
  }
`;
