import { ReactComponent as Logo } from '@/assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <a href='/' title='Meme Generator'>
          <Logo />

          <span>Meme Generator</span>
        </a>
      </S.LogoWrapper>

      <span>React Course - Project 3</span>
    </S.HeaderWrapper>
  )
}
