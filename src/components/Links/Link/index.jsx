import React from 'react';
import '../../../assets/fonts/fontello-04c4281b/css/fontello.css';

class Link extends React.Component {
  render() {
    const url = this.props.url;
    const icon = this.props.icon;
    return (
      <li className="links__list-item">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`icon-${icon}`} />
        </a>
      </li>
    )
  }
}

export default Link
