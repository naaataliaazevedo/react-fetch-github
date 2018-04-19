import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import User from './components/user';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/naaataliaazevedo')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          this.setState({
            data: data,
          });
      });
  }

  render() {
    const data = this.state;
    if (!data) {
      // console.log('dataa', data);
      return (<div>loading</div>);
    }

    return (
      <section className="App">
        <Header />
          <div className="container">
          <User data={data} />
          </div>
        <Footer />
      </section>
    );
  }
}

export default App;
