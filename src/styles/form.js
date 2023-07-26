import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 27.1875rem;
  width: 100%;

  padding: 1.875rem;
  background: var(--color-white);
  border: 0.0625rem solid rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1024px) {
    max-width: 24.5625rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }

  button:nth-child(5) {
    margin-top: 0.9375rem;
  }
`