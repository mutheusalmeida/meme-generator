import { memeObj } from '@/resources/atom'
import { useAtom } from 'jotai'
import { ChangeEvent, FormEvent } from 'react'

import * as S from './styles'

export const Form = () => {
  const [meme, setMeme] = useAtom(memeObj)

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setMeme(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <S.FormWrapper onSubmit={handleFormSubmit}>
      <S.InputsWrapper>
        <S.Input
          placeholder='Top text'
          type='text'
          name='topText'
          onChange={(handleFormChange)}
          value={meme.topText}
        />

        <S.Input
          placeholder='Bottom text'
          type='text'
          name='bottomText'
          onChange={handleFormChange}
          value={meme.bottomText}
        />
      </S.InputsWrapper>

      <S.SendBtn type='submit'>Get a new meme image 🗿</S.SendBtn>
    </S.FormWrapper>
  )
}
