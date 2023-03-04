import { Form } from '@/form'
import { memeObj, memesArr } from '@/resources/atom'
import { useAtom, useAtomValue } from 'jotai'
import { MemesType } from 'memes'
import { useEffect } from 'react'

import * as S from './styles'

export const Playground = () => {
  const meme = useAtomValue(memeObj)
  const [allMemes, setAllMemes] = useAtom(memesArr)

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      const { memes } = data.data

      setAllMemes(() => (memes.map((meme: MemesType) => ({ url: meme.url, name: meme.name }))))
    }

    fetchMemes()
  }, [setAllMemes])

  return (
    <S.PlaygroundWrapper>
      <Form />

      <S.ImgWrapper>
        {meme.topText && <S.Text pos='top'>{meme.topText}</S.Text>}

        {meme.bottomText && <S.Text pos='bottom'>{meme.bottomText}</S.Text>}

        {allMemes
          ? (
            <S.MemeImg
              src={meme.url ? meme.url : allMemes[0].url}
              alt={meme.name ? meme.name : allMemes[0].name}
            />
            )
          : null}
      </S.ImgWrapper>
    </S.PlaygroundWrapper>
  )
}
