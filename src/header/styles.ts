import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 1.6666em;
  background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25em;

  span:last-child {
    margin-right: 1.0625em;
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
