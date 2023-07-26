import { FinancialSummary } from '../Card'

import { StyledH3, StyledH2 } from '../../styles/typography'
import { StyledUl, StyledEmptyDiv } from '../../styles/lists'

export const FinancialResume = ({ cardList, setCardList }) => {
  const removeCard = (id) => {
    if (confirm('Você realmente deseja excluir?'))
      setCardList((cardList) =>
        cardList.filter((card) => card.id !== id)
      )
  }

  return (
    <>
      <StyledH3>Resumo financeiro</StyledH3>
      {cardList.length > 0 ? (
        <StyledUl>
          {cardList.map(({ id, text, money, typeValue }) => (
            <FinancialSummary
              key={id}
              descriptionValue={text}
              totalValue={Number(money).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
              selectedValue={typeValue}
              summaryId={id}
               removeCard={removeCard}
            />
          ))}
        </StyledUl>
      ) : (
        <StyledEmptyDiv>
        <StyledH2>Você ainda não possui nenhum lançamento</StyledH2>
        </StyledEmptyDiv>
      )}
    </>
  )
}