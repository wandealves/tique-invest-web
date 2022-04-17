import styled from 'styled-components';

export const Container = styled.div`
width:100%;
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
