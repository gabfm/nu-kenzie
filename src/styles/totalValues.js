import styled from 'styled-components'

export const StyledTotalValueDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 1.25rem 0rem;
  padding: 0.625rem 1.875rem;
  gap: 0.625rem;
  background-color: var(--color-white);
  border: 0.0625rem solid rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1024px) {
    max-width: 24.5625rem;
    gap: 0.625rem;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    gap: .625rem;
  }

  > h3{
    color: var(--color-color-primary-1);
  }
`