import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 5.625rem;
  box-shadow: var(--color-grey-1) 0rem 0.125rem 1.25rem 0rem;

  figure{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3.625rem;
  }

`

export const ResponsiveHeader = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
`