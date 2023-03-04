import { Form } from '@/form'
import { memeObj } from '@/resources/atom'
import { useAtomValue } from 'jotai'

import * as S from './styles'

export const Playground = () => {
  const meme = useAtomValue(memeObj)

  return (
    <S.PlaygroundWrapper>
      <Form />

      <S.ImgWrapper>
        <S.Text pos='top'>{meme.topText}</S.Text>

        <S.Text pos='bottom'>{meme.bottomText}</S.Text>
      </S.ImgWrapper>
    </S.PlaygroundWrapper>
  )
}
