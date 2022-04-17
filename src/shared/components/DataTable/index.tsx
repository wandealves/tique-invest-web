import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FaArrowLeft, FaArrowRight, FaPen, FaTrash } from 'react-icons/fa';

import * as S from './styles';

export type Column = {
  title: string
  width: number
  textAlign:
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start'
}

type RowItem = {
  value: string | number | boolean
  icon: IconType | null
  //func: (type: string) => void
}

export type Row = {
  id: number
  items: RowItem[]
}

export type Props = {
  columns: Column[]
  rows: Row[]
  children?: ReactNode
}

/*
<th style={{ width: 180 }}>Ativo</th>
<th style={{ width: 120 }}>Tipo</th>
<th style={{ width: 120 }}>Data Compra</th>
<th style={{ width: 120 }}>Quantidade</th>
<th style={{ width: 120 }}>Preço Médio</th>
<th style={{ width: 90, textAlign: 'center' }}></th>
<th style={{ width: 90, textAlign: 'center' }}></th>*/

export const DataTable: React.FC<Props> = ({ columns, rows }) => {
  return (
    <S.Container>
      <table className="customers">
        <tr>
          {columns.map((c, index) => (
            <th key={index} style={{ width: c.width, textAlign: c.textAlign }}>
              {c.title}
            </th>
          ))}
        </tr>
        {rows.map((row) => (
          <tr key={row.id}>
            {row.items.map((item, index) =>
              item.icon ? (
                <td style={{ textAlign: 'center', cursor: 'pointer' }}>
                  {<item.icon />}
                </td>
              ) : (
                <td key={index}>{item.value}</td>
              )
            )}
          </tr>
        ))}
        <tfoot className="footer">
          <tr>
            <td colSpan={7}>
              <div className="footer-item">
                <div className="action-pagination">
                  <FaArrowLeft className="actions" />
                  <FaArrowRight className="actions" />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </S.Container>
  );
};
