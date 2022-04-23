import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  input {
    width: 300px;

    padding: 10px;

    border-radius: 5px;

    &:hover {
      border: 2px solid var(--teal2);
    }
  }

  button {
    width: 120px;

    padding: 10px;

    font-size: 16px;
    font-weight: 700;
    color: var(--white);

    border-radius: 5px;

    background-color: var(--teal3);
    border: none;

    box-shadow: 1px 1px var(--teal4);

    cursor: pointer;

    &:hover {
      //opacity: 0.6;
      background-color: var(--teal2);
      transition: 0.3s ease-in;
    }
  }
`;
