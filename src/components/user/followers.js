import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import github from '../../assets/gitHub2.png'; 
export class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      following: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/naaataliaazevedo/following')
      .then(response => response.json())
      .then(following => {
          console.log(following);
          this.setState({
            following: following,
          });
      });
  }

  render() {
    const { following } = this.state;
    if (!following) {
      return (<div>loading</div>);
    }
    console.log('followers2', Object.values(following));

    const containerFollowing = {
      padding: '2rem 4rem',
    };

    const boxFollowing = {
      width: '50%',
      float: 'left',
      margin: '4rem 0',
    };
  
    const internalBoxFollowing = {
      width: '20rem',
      margin: '0 auto',
    };

    const imgFollow = {
      width: '20rem',
      height: '20rem',
      borderRadius: '50%',
    };

    return (
      <section style={containerFollowing}>
        <h2>{'GitHub API - Following'}</h2>
          {Object.values(following).map((follow, index) => {
            return (
              <div key={follow.id} style={boxFollowing}>
                <div style={internalBoxFollowing}>
                  <p>{follow.login}</p>
                  <img src={follow.avatar_url} style={imgFollow} alt={follow.id} />
                  <Router>
                    <Link to={follow.html_url} target="_blank">
                      <img src={github} alt="GitHub" />
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