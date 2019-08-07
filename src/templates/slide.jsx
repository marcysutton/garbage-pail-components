import React from 'react'
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import theme from "../theme"

const headerFooterStyles = css`
  background-color: ${theme.colors.headerFooterBackground};
  font-size: 1.25rem;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
`
const Footer = styled.footer`
  bottom: 0;
  padding: 0 0 1em 0;
  ${headerFooterStyles}
`
const Main = styled.main`
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`
const FooterByline = styled.p`
  font-size: inherit;
  font-weight: normal;
  margin: 0;
  text-align: center;
`
export default ({ footer = 'false', children }) => (
  <>
    <SEO title="Slides" keywords={['workshop', 'javascript', 'accessibility', 'react']} />
    <Main className="main">
      {children}
    </Main>
    <Footer css={headerFooterStyles} className="footer">
      { footer === 'true' ? <FooterByline>
        Garbage Pail Components ~  <span>by <a href="https://twitter.com/marcysutton">@marcysutton</a></span>
      </FooterByline> : null }
    </Footer>
  </>
)
