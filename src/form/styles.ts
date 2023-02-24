import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.9375em;
  margin: 0 auto 2.25em;
  max-width: 29.8125em;
`

export const InputsWrapper = styled.div`
  display: flex;
  gap: 1.0625em;
`

export const Input = styled.input`
  font-size: 0.75rem;
  line-height: 1.1666em;
  color: #0D0D0D;
  padding: 0 0.8333em;
  border: 1px solid #D5D4D8;
  border-radius: 0.4166em;
  height: 2.9166em;
  width: 100%;
`

export const SendBtn = styled.button`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875em;
  letter-spacing: -0.1em;
  height: 2.5em;
  padding: 0 1em;
  background: var(--primary-gradient);
  color: inherit;
  border-radius: 0.3125em;
  border: none;
  cursor: pointer;
`
