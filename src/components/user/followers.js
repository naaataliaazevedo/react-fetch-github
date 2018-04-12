import React from 'react';

export class Followers extends React.Component {
  render() {
    const { data } = this.props;
    console.log('followers', data.data);
    return (
      <div>adadadasd</div>
    );
  }
}

export default Followers;