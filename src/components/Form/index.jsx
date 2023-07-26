import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { AddButton } from '../../styles/buttons'
import { StyledForm } from '../../styles/form'
import { StyledLabel, StyledParagraph } from '../../styles/typography'
import { StyledInput } from '../../styles/inputs'
import { StyledSelect } from '../../styles/selects'

export const CardList = ({ setCardList }) => {
  const [text, setText] = useState('')
  const [money, setValue] = useState('')
  const [typeValue, setType] = useState('')

  const addNewCard = () => {
    const newCard = { id: uuidv4(), text, money, typeValue}
    setCardList((summary) => [...summary, newCard])
  }

  const submit = (e) => {
    e.preventDefault()
    addNewCard()
    setText('')
    setValue('')
    setType('')
  }

  return (
    <StyledForm onSubmit={submit}>
      <StyledLabel>Descrição</StyledLabel>
      <div>
        <StyledInput
          value={text}
          type='text'
          onChange={(e) => setText(e.target.value)}
          placeholder='Digite aqui sua descrição'
          required
        />
        <StyledParagraph>Ex: Compra de Roupas</StyledParagraph>
      </div>
      <div>
        <StyledLabel>Valor (R$)</StyledLabel>
        <StyledInput
          value={money}
          type='number'
          onChange={(e) => setValue(e.target.value)}
          placeholder='1'
          required
        />
      </div>
      <div>
        <StyledLabel>Tipo de Valor</StyledLabel>
        <StyledSelect
          value={typeValue}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option hidden>Selecionar uma opção</option>
          <option value='Entrada'>Entrada</option>
          <option value='Despesa'>Despesa</option>
        </StyledSelect>
      </div>
      <AddButton>Inserir valor</AddButton>
    </StyledForm>
  )
}