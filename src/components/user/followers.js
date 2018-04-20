import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import github from "../../assets/gitHub2.png";
export class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      following: [],
      hover: false
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/naaataliaazevedo/following")
      .then(response => response.json())
      .then(following => {
        console.log(following);
        this.setState({
          following: following
        });
      });
  }

  render() {
    const { following, hover } = this.state;
    console.log('hover', hover);
    if (!following) {
      return <div>loading</div>;
    }
    console.log('followers2', Object.values(following));

    const containerFollowing = {
      padding: '2rem 4rem',
    };

    const boxFollowing = {
      width: '50%',
      float: 'left',
      margin: '1rem 0'
    };

    const titleFollow = {
      textAlign: 'center',
      fontWeight: 'bold'
    };

    const internalBoxFollowing = {
      width: '12rem',
      margin: '0 auto'
    };

    const imgFollow = {
      width: '12rem',
      height: '12rem',
      borderRadius: '50%'
    };

    const iconCenter = {
      display: 'block',
      margin: '0 auto'
    };

    return (
      <section style={containerFollowing}>
        <h2>{"GitHub API - Following"}</h2>
        {Object.values(following).map((follow, index) => {
          return (
            <div key={follow.id} style={boxFollowing}>
              <div style={internalBoxFollowing}>
                <h3 style={titleFollow}>{follow.login}</h3>
                <img
                  src={follow.avatar_url}
                  style={imgFollow}
                  alt={follow.id}
                />
                <Router>
                  <Link to={follow.html_url} target="_blank">
                    <img src={github} alt="GitHub" style={iconCenter} />
                  </Link>
                </Router>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Followers;
