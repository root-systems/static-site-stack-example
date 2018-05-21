import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark } = data;

  return (
    <div>
      <Helmet title={`${markdownRemark.frontmatter.title}`} />
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </div>
  );
}

export const pagePageQuery = graphql`
  query PagePage($template: String!) {
    markdownRemark(frontmatter: { template: { eq: $template } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
;
