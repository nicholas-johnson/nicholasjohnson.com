import React from 'react';
import Link from './Link';
import './style.scss';

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email,
    }


    return (
      <div className="links">
        <ul className="links__list">
          <Link icon='twitter' url='https://www.twitter.com/superluminary' />
          <Link icon='github' url='https://www.github.com/nicholas-johnson' />
          <Link icon='mail' url='mailto:hello@nicholasjohnson.com' />
        </ul>

        <ul className="links__list">
          <Link icon='stackoverflow' url='https://stackoverflow.com/users/687677/superluminary' />
          <Link icon='medium' url='https://medium.com/@me_76676' />
        </ul>

        <ul className="links__list">
          <Link icon='linkedin' url='https://www.linkedin.com/in/nicholashowardjohnson/' />
        </ul>
      </div>
    )
  }
}

export default Links
