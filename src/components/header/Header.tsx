import React, { useState } from 'react';
import LogoBold from '../../assets/svg/logo-bold.svg';
import * as S from './styles';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleModal = () => {
    setIsOpened(!isOpened);
  };
  return (
    <S.Container>
      <S.LeftContainer>
        <LogoBold />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Links className={`${isOpened && 'active'}`}>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Productos</li>
          <li>Contact</li>
        </S.Links>
        <button
          type='button'
          onClick={handleModal}
          className={`${isOpened && 'active'}`}
        >
          <span />
          <span />
          <span />
        </button>
      </S.RightContainer>
    </S.Container>
  );
};

export default Header;
