import React from 'react'
import Link from 'gatsby-link'

import Container from '../container/container';
import './topnav.scss'

const nav = [
	{
		text: "Home",
		url: "/"
	},
	{
		text: "JavaScript",
		url: "/javascript"
	},,
	{
		text: "react",
		url: "/react"
	},
	{
		text: "Angular",
		url: "/angular"
	},
	{
		text: "AngularJS",
		url: "/angularjs"
	},
	{
		text: "HTML / CSS",
		url: "/html-css"
	},
	{
		text: "Fiction",
		url: "/fiction"
	},
	{
		text: "Contact",
		url: "#contact"
	},
]

const TopNav = () => (
  <nav className="c-topnav">
  	<ul>
  		{nav.map((row) =>
	  		<li>
	  			<Link to={row.url}>
			      {row.text}
			    </Link>
	  		</li>
  		)}
  	</ul>

  </nav>
)

export default TopNav;
