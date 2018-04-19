import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
    console.log('followers2', Object.values(following));
    return (
      <section>
          {Object.values(following).map((follow, index) => {
            return (
              <div key={follow.id}>
                <p>{follow.login}</p>
                <img src={follow.avatar_url} alt={follow.id} />
                <Router>
                  <Link to={follow.html_url}>GitHUb</Link>
                </Router>
              </div>
            );
          })}
      </section>
    );
  }
}

export default Followers;