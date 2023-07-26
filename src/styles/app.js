import styled from 'styled-components'

export const ResponsiveMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;


   div {
    width: 100%;

    @media screen and (min-width: 1024px) {
      max-width: 22.1875rem;
    }
  }

`