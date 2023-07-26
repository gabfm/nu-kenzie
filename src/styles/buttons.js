import styled from 'styled-components'

export const AddButton = styled.button`
  width: 100%;
  min-width: 10rem;
  padding: 0.8125rem 1.25rem;
  font-weight: var(--font-weight-4);
  font-size: var(--font-size-3);
  
  color: var(--color-white);
  gap: 0.625rem;
  background: var(--color-color-primary-1);
  border: 0.125rem solid var(--color-color-primary-1);
  border-radius: 0.5rem;

  @media screen and (min-width: 1024px) {
    max-width: 21.875rem;
  }

  :hover {
    background: var(--color-color-primary-2);
    border: 0.125rem solid var(--color-color-primary-2);
    transition: 0.5s;
  }
`
export const DeleteButton = styled.button`
  width: 3.125rem;
  padding: 0.1875rem 0.5625rem;
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-5);
 
  color: var(--color-grey-4);
  background: var(--color-grey-1);
  border-radius: 0.125rem;

  :hover {
    color: var(--color-grey-1);
    background: var(--color-grey-4);
    transition: 0.5s;
  }
`