import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-color-primary-1: #fd377e;
    --color-color-primary-2: #e34981;
    --color-color-secondary: #03b898;
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-grey-4: #212529;
    --color-grey-3: #343a40;
    --color-grey-2: #868E96;
    --color-grey-1: #e9ecef;
    --color-grey-0: #f8f9fa;

    --font-family-default: 'Inter', sans-serif;
    
    --font-weight-1: 800;
    --font-weight-2: 700;
    --font-weight-3: 600;
    --font-weight-4: 500;
    --font-weight-5: 400;

    --font-size-1: 2.375rem;
    --font-size-2: 1.375rem;
    --font-size-3: 1rem;
    --font-size-4: 0.875rem;
    --font-size-5: 0.625rem;
    --font-size-6: 0.5rem;
  }
`