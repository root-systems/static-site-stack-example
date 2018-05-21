import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Header from '../components/header'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children, data }) => {
  const { title } = data.site.siteMetadata
  
  return (
    <div>
      <Helmet
        title={title}
      />
      <Header siteTitle={title} />
      <Wrapper>
        {children()}
      </Wrapper>
    </div>
  )
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
