import { useState } from 'react'

import { Header } from './components/Header'
import { CardList } from '../src/components/Form'
import { FinancialResume } from './components/FinancialResume'
import { TotalValue } from './components/TotalValue'

import { GlobalStyles } from './styles/global'
import { ResponsiveMainDiv } from './styles/app'
import { ResetCss } from './styles/reset'

export const App = () => {
  const [card, setCardList] = useState([])

  return (
    <>
      <ResetCss />
      <GlobalStyles />

      <Header />
      <main>
        <ResponsiveMainDiv>
          <div>
            <CardList setCardList={setCardList} />
            <TotalValue cardList={card} />
          </div>
          <div>
            <FinancialResume cardList={card} setCardList={setCardList} />
          </div>
        </ResponsiveMainDiv>
      </main>
    </>
  )
}

