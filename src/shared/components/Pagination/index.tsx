import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import * as S from './styles';

type Props = {
  pages: number
  onNext: (page: number) => void
}
export const Pagination: React.FC<Props> = ({ onNext, pages }) => {
  const [page, setPage] = useState(1);

  const handleNext = (value: number) => {
    if (value > 0 && page < pages) setPage((old) => old + value);
    else if (value < 0 && page > 1) setPage((old) => old + value);
  };

  useEffect(() => {
    onNext(page);
  }, [page]);

  return (
    <S.Container>
      <div className="action-pagination">
        {page > 1 ? (
          <FaArrowLeft className="actions" onClick={() => handleNext(-1)} />
        ) : (
          <FaArrowLeft className="actions-disable" />
        )}

        <S.Buttons>
          <S.NextButton onClick={() => onNext(page)}>{page}</S.NextButton>
        </S.Buttons>
        {page < pages ? (
          <FaArrowRight className="actions" onClick={() => handleNext(1)} />
        ) : (
          <FaArrowRight className="actions-disable" />
        )}
      </div>
    </S.Container>
  );
};
