import { memeObj, memesArr } from '@/resources/atom'
import { useAtom, useAtomValue } from 'jotai'
import { ChangeEvent, FormEvent } from 'react'

import * as S from './styles'

export const Form = () => {
  const [meme, setMeme] = useAtom(memeObj)
  const allMemes = useAtomValue(memesArr)

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setMeme(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (allMemes) {
      const randomNum = Math.floor(Math.random() * allMemes.length)
      const meme = allMemes[randomNum]

      setMeme(prev => ({
        ...prev,
        url: meme.url,
        name: meme.name,
      }))
    }
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
