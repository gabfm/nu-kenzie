import styled, { css } from 'styled-components'

export const TittleDefault = css`
  font-family: var(--font-family-default);
  font-style: normal;
`

export const StyledH1 = styled.h1`
  ${TittleDefault}
  font-weight: var(--font-weight-1);
  font-size: var(--font-size-1);
  color: var(--color-grey-4);
`

export const StyledH2 = styled.h2`
  ${TittleDefault}
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-2);
  color: var(--color-grey-4);
`

export const StyledH3 = styled.h3`
  ${TittleDefault}
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-3);
  color: var(--color-grey-4);
`

export const StyledH4 = styled.h4`
  ${TittleDefault}
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-4);
  color: var(--color-grey-4);
`

export const StyledParagraph = styled.p`
  ${TittleDefault}
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-4);
  color: var(--color-grey-2);
`

export const StyledLabel = styled.label`
  ${TittleDefault}
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-3);
  color: var(--color-grey-4);
`