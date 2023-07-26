import { DeleteButton } from '../../styles/buttons'
import { StyledParagraph, StyledH3 } from '../../styles/typography'
import { StyledCard } from '../../styles/lists'

export const FinancialSummary = ({
  selectedValue,
  descriptionValue,
  totalValue,
  removeCard,
  summaryId,
}) => {
  return (
    <StyledCard borderColor={selectedValue}>
      <div>
        <StyledH3>{descriptionValue}</StyledH3>
        <StyledParagraph>{selectedValue}</StyledParagraph>
      </div>
      <div>
        <StyledParagraph>{totalValue}</StyledParagraph>
        <DeleteButton onClick={() => removeCard(summaryId)}>
          Excluir
        </DeleteButton>
      </div>
    </StyledCard>
  )
}