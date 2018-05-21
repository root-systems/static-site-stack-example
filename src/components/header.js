import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Container = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <h1>
        <HomeLink to="/">
          {siteTitle}
        </HomeLink>
      </h1>
    </Wrapper>
  </Container>
)

export default Header
