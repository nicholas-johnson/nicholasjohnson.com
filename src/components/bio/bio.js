import React from 'react'

// import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div>
        {/*<img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />*/}
        <p>
          Written by <strong>Nicholas Johnson</strong>, who loves JavaScript.
        </p>
      </div>
    )
  }
}

export default Bio
