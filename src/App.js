import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(data => {
          // console.log(data);
          this.setState({
            data: data,
          });
      });
  }

  render() {
    const data = this.state;
    if (!data) {
      console.log('dataa', data);
      return (<div>loading</div>);
    }
    console.log('data', Object.values(data)[0].map((item, index) => { return item.login }));
    return (
      <section className="App">
        <Header />
          <div>
            {Object.values(data)[0].map((user, index) => {
              return (
                <div>
                  <p>{user.login}</p>
                  <img src={user.avatar_url} alt={user.login} />
                  <a href={user.html_url}>Github</a>
                  <a href="{user.followers_url}">quem segui o cara</a>
                </div>
              )
            })
            }
          </div>
        <Footer />
      </section>
    );
  }
}

export default App;
