import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import { Pagination } from 'shared/components';

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
  onClick?: (type: string) => void
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

export const DataTable: React.FC<Props> = ({ columns, rows }) => {
  const handleNextPage = (page: number) => {
    console.log('page', page);
  };

  return (
    <S.Container>
      <table className="customers">
        <thead>
          <tr>
            {columns.map((c, index) => (
              <th
                key={index}
                style={{ width: c.width, textAlign: c.textAlign }}
              >
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.items.map((item, index) =>
                item.icon ? (
                  <td
                    key={index}
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                  >
                    {<item.icon />}
                  </td>
                ) : (
                  <td key={index}>{item.value}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
        <tfoot className="footer">
          <tr>
            <td colSpan={7}>
              <Pagination pages={6} onNext={(page) => handleNextPage(page)} />
            </td>
          </tr>
        </tfoot>
      </table>
    </S.Container>
  );
};
