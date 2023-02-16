import React from 'react'
import styled from 'styled-components'
import { BoldText } from 'components/common/Text'
import { Column } from 'components/common/Layout'
import { FiMenu } from 'react-icons/fi'
import { theme } from 'styles/theme'
import { useRouter } from 'next/router'
import { prefix } from 'infra/config'

export const Menu: React.FC<{ onMenuClick: () => void }> = ({
  onMenuClick,
}) => {
  const router = useRouter()

  return (
    <Main>
      <FiMenu
        size={24}
        color={theme.color.white}
        style={{ cursor: 'pointer' }}
        onClick={onMenuClick}
      />
      <BoldText onClick={() => router.push(`${prefix}/about`)}>About</BoldText>
      <BoldText onClick={() => router.push(`${prefix}/`)}>Home</BoldText>
    </Main>
  )
}

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 20px;
  }
  z-index: 100;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 40px 80px;
  align-items: end;
  opacity: 0.9;
  gap: 40px;
  animation: menuFadeIn 600ms 1 ease;
  background-color: ${(p) => p.theme.color.background2};
  span {
    font-size: 72px;
    color: ${(p) => p.theme.color.white};
    cursor: pointer;
  }
  @keyframes menuFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }
`
