import React from 'react';
import Followers from './followers';

export class User extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {Object.values(data)[0].map((user, index) => {
          return (
            <div key={user.id}>
              <p>{user.login}</p>
              <img src={user.avatar_url} alt={user.login} />
              <a href={user.html_url}>Github</a>
              <Followers user={user} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default User;
