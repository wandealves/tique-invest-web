import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  .form-field {
    width: 500px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 10px;

    label {
      font-size: 18px;
      font-weight: 500;
      color: var(--white);
    }

    input {
      padding: 10px;

      border-radius: 5px;

      &:hover {
        border: 2px solid var(--teal2);
      }
    }

    select {
      padding: 10px;

      border-radius: 5px;

      &:hover {
        border: 2px solid var(--teal2);
      }
    }
  }

  button {
    width: 500px;

    background-color: var(--teal2);
    color: var(--white);

    font-size: 18px;
    font-weight: 700;

    padding: 10px;

    border: none;

    border-radius: 5px;

    margin-top:20px;

    &:hover {
      opacity:0.8;
      background-color: var(--teal2);
      transition: 0.3s ease-in;
    }
  }
`;
