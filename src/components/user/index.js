import React from 'react';
import Followers from './followers.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';
export class User extends React.Component {
  render() {
    const { data } = this.props;
    console.log('user', data.data);
    return (
      <section className="container-content">
        <div className="container-user">
          <p>{data.data.id}</p>
          <p>{data.data.login}</p>
          <p>{data.data.name}</p>
          <p>{data.data.bio}</p>
          <img src={data.data.avatar_url} alt={data.data.name} className="img-user" />
          <Router>
            <Link to="/b"> asdasdasd</Link>
          </Router>
        </div>
        <Followers data={data} />
      </section>
    );
  }
}

export default User;
