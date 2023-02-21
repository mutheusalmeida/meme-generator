import * as S from './styles'

export const Form = () => {
  return (
    <S.FormWrapper>
      <S.InputsWrapper>
        <S.Input placeholder='Top text' type='text' />

        <S.Input placeholder='Bottom text' type='text' />
      </S.InputsWrapper>

      <S.SendBtn>Get a new meme image 🗿</S.SendBtn>
    </S.FormWrapper>
  )
}
