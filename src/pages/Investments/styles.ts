import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  .customers {
    // font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  .customers td,
  .customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .customers tr {
    background-color: #f2f2f2;
  }

  //.customers tr:nth-child(even){background-color: #f2f2f2;}

  .customers tr:hover {
    background-color: #ddd;
  }

  .customers th {
    padding: 10px;
    text-align: left;
    font-weight: 700;
    background-color: var(--teal5);
    color: var(--white);
  }

  .footer tr:hover {
    background-color: #f2f2f2;
  }

  .footer-item {
    width: 100%;
    display: flex;
  }

  .action-pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 45px;

    svg {
      font-size: 30px;
      color: var(--teal5);
    }
  }

  .actions {
    cursor: pointer;

    &:hover {
      opacity: 0.6;
      color: var(--teal3);
      transition: 0.3s ease-in;
    }
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  input {
    width: 300px;

    padding: 5px;

    border-radius: 5px;

    &:hover {
      border: 2px solid var(--teal2);
    }
  }

  button {
    width: 120px;

    padding: 5px;

    font-size: 16px;
    font-weight: 700;
    color: var(--white);

    border-radius: 5px;

    background-color: var(--teal3);
    border: none;

    box-shadow: 1px 1px  var(--teal4);

    cursor: pointer;

    &:hover {
      //opacity: 0.6;
      background-color: var(--teal2);
      transition: 0.3s ease-in;
    }
  }
`;

export const StyledInput = styled.input``;
