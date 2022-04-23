import React from 'react';

import * as S from './styles';

export const Investment: React.FC = () => {
  return (
    <S.Form>
      <div className="form-field">
        <label>Código</label>
        <input type="text" placeholder="Informe o código do ativo" />
      </div>

      <div className="form-field">
        <label>Ativo</label>
        <input type="text" placeholder="Informe o nome do ativo" />
      </div>

      <div className="form-field">
        <label>Tipo</label>
        <select name="select">
          <option value="valor1">
            Selecione o tipo de ativo
          </option>
          <option value="valor2">Ação</option>
          <option value="valor3">FIIS</option>
        </select>
      </div>

      <div className="form-field">
        <label>Quantidade</label>
        <input type="number" placeholder="Informe a quantidade" />
      </div>

      <div className="form-field">
        <label>Preço unitário</label>
        <input type="number" placeholder="Informe o preço unitário" />
      </div>
      <button>Salvar</button>
    </S.Form>
  );
};
