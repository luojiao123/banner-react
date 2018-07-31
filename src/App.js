import React, { Component } from 'react';
import './App.css';
import Banner from './banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerJson={{
					picUrl:['./images/img-1.jpg','./images/img-2.jpg','./images/img-3.jpg','./images/img-4.jpg','./images/img-5.jpg','./images/img-6.jpg'],
					timer:2000
				}} />
      </div>
    );
  }
}

export default App;
