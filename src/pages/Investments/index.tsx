import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

import { Toolbar, DataTable, Column, Row } from 'shared/components';

//import * as S from './styles';

export const Investments: React.FC = () => {
  const columns: Column[] = [
    {
      title: 'Ativo',
      width: 180,
      textAlign: 'left'
    },
    {
      title: 'Tipo',
      width: 120,
      textAlign: 'left'
    },
    {
      title: 'Data Compra',
      width: 120,
      textAlign: 'left'
    },
    {
      title: 'Quantidade',
      width: 120,
      textAlign: 'left'
    },
    {
      title: 'Preço Médio',
      width: 120,
      textAlign: 'left'
    },
    {
      title: '',
      width: 90,
      textAlign: 'center'
    },
    {
      title: '',
      width: 90,
      textAlign: 'center'
    }
  ];

  const rows: Row[] = [
    {
      id: 1,
      items: [
        {
          value: 'MXRF112',
          icon: null
        },
        {
          value: 'FIIS',
          icon: null
        },
        {
          value: '20/10/2022',
          icon: null
        },
        {
          value: 10,
          icon: null
        },
        {
          value: 'R$ 20,10',
          icon: null
        },
        {
          value: '',
          icon: FaPen
        },
        {
          value: '',
          icon: FaTrash
        }
      ]
    }
  ];

  return (
    <>
      <Toolbar toNew="/investimento" />
      <DataTable columns={columns} rows={rows} />
    </>
  );
};
