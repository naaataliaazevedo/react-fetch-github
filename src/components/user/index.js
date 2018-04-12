import React from 'react';
import Followers from './followers.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export class User extends React.Component {
  render() {
    const { data } = this.props;
    console.log('user', data.data);
    return (
      <section className="container-content">
        <div className="container-user">
          {/*Object.values(data)[0].map((user, index) => {
            return (
              <div key={user.id}>
                <p>{user.login}</p>
                <img src={user.avatar_url} alt={user.login} />
                <a href={user.html_url}>Github</a>
              </div>
            );
          })*/}
          <p>{data.data.id}</p>
          <p>{data.data.login}</p>
          <p>{data.data.name}</p>
          <p>{data.data.bio}</p>
          <img src={data.data.avatar_url} alt={data.data.name} className="img-user" />
          <Followers data={data} />
          <Router>
            <Link to="/b"> asdasdasd</Link>
          </Router>
        </div>
      </section>
    );
  }
}

export default User;
