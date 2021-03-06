import React from 'react'
import styled, { css } from 'styled-components';

type Props = {
  width?: string;
  height?: string;
  isClose: boolean;
  isCloseToggler?: () => void
}

const MenuIcon: React.FC<Props> = ({ width = "1em", height = "1em", isClose, isCloseToggler }) => {
  return (
    <Container width={width} height={height} onClick={isCloseToggler}>
      <Line className={isClose ? 'is-close' : ''} />
      <Middle isClose={isClose} />
      <Line className={isClose ? 'is-close' : ''} />
    </Container>
  )
}

const Container = styled.div<{
  width: string,
  height: string,
}>`
  width: ${p => p.width};
  height: ${p => p.height ? p.height : "100%"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

const Line = styled.div`
  background: ${p => p.theme.colors.textPrimary};
  height: 2px;
  transition: all .3s;

  &.is-close {
    opacity: 0;
  }
`

const Middle = styled.div<
  {
    isClose: boolean
  }>`
  height: 2px;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${p => p.theme.colors.textPrimary};
    transition: all .3s;
  }

  ::before {
    ${p => p.isClose ? css`transform: rotate(45deg);` : ''}
  }
  ::after {
    ${p => p.isClose ? css`transform: rotate(-45deg);` : ''}
  }
`

export default MenuIcon