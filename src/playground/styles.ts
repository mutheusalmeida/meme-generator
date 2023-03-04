import styled, { css } from 'styled-components'

type TextType = {
  pos: string
}

export const PlaygroundWrapper = styled.main`
  padding: 2.25em 3.4375em 2.25em;
`

export const ImgWrapper = styled.div`
  max-width: 29.8125em;
  margin: 0 auto;
  aspect-ratio: 1.8 / 1;
  background-color: #EFEFEF;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Text = styled.h2<TextType>`
  font-family: impact, sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.2187em;
  color: #FFF;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 1em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;

  ${({ pos }) => pos === 'top' && css`
    top: 6%;
  `}

  ${({ pos }) => pos === 'bottom' && css`
    bottom: 6%;
  `}
`

export const MemeImg = styled.img`
  width: 100%;
  object-fit: cover;
`
