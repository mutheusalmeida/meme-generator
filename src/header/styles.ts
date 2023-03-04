import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 1.6666em;
  background: var(--primary-gradient);
  display: grid;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25em;
  grid-template-columns: max-content minmax(auto, 500px);

  > span:last-child {
    margin-right: 1.0625em;
    justify-self: end;
  }
`

export const LogoWrapper = styled.h1`
  width: max-content;
  font-size: 1.3125rem;
  line-height: 1.1428em;
  letter-spacing: -0.07em;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 7px;
  }
`
