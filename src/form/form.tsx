import { bottomTextStr, topTextStr } from '@/resources/atom'
import { useAtom } from 'jotai'
import { ChangeEvent, FormEvent } from 'react'

import * as S from './styles'

export const Form = () => {
  const [topText, setTopText] = useAtom(topTextStr)
  const [bottomText, setBottomText] = useAtom(bottomTextStr)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <S.FormWrapper onSubmit={handleFormSubmit}>
      <S.InputsWrapper>
        <S.Input
          placeholder='Top text'
          type='text'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTopText(e.currentTarget.value)}
          value={topText}
        />

        <S.Input
          placeholder='Bottom text'
          type='text'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBottomText(e.currentTarget.value)}
          value={bottomText}
        />
      </S.InputsWrapper>

      <S.SendBtn type='submit'>Get a new meme image 🗿</S.SendBtn>
    </S.FormWrapper>
  )
}
