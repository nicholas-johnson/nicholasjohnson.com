import React from 'react'
import Link from 'gatsby-link'

import Bio from '../components/bio/bio'
import Container from '../components/container/container'

export default ({data}) =>
	<Container>
		{console.log(data)}
		{data.allMarkdownRemark.edges.map(({node}) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h1>
            <Link to={['blog', node.fields.slug].join('')}>
              {title}
            </Link>
          </h1>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })}

	</Container>


export const query = graphql`
	query BlogPosts {
		allMarkdownRemark {
			edges {
		  	node {
	      	excerpt(pruneLength: 500)
					html
	        wordCount {
	          paragraphs
	          sentences
	          words
	        }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          fields {
            slug
          }
		  	}
			}
	  }
	}

`
