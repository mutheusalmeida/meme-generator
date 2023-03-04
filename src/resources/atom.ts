import { atom } from 'jotai'
import { MemeObjType, MemesType } from 'memes'

export const memeObj = atom<MemeObjType>({
  topText: '',
  bottomText: '',
  name: '',
  url: '',
})

export const memesArr = atom<MemesType[] | null>(null)
