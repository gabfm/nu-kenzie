import { StyledParagraph, StyledH3 } from '../../styles/typography'
import { StyledTotalValueDiv } from '../../styles/totalValues'

export const TotalValue = ({ cardList }) => {
  const totalMoney = cardList.reduce((accValue, card) => {
    return card.typeValue === 'Entrada'
      ? accValue + Number(card.money)
      : accValue - Number(card.money)
  }, 0)

  const formattedMoney = totalMoney.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <StyledTotalValueDiv>
      <div>
        <StyledH3>Valor Total:</StyledH3>
        <StyledParagraph>O valor se refere ao saldo</StyledParagraph>
      </div>
      <StyledH3>{formattedMoney}</StyledH3>
    </StyledTotalValueDiv>
  )
}