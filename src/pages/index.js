import React from "react"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Copy = styled.span`
  font-size: 1.5rem;
`

export default () => {
  return (
    <Container>
      <Copy>Hi there! This is the main page of the example site.</Copy>
    </Container>
  )
}
