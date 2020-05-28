import React, { Component } from 'react';
import "./App.css";
import ScreenBanner from './components/ScreenBanner.jsx'
import ShowServer from './components/ShowServer.jsx'
import AddServer from './components/AddServer.jsx'
class App extends Component {
  state = {
    selected: 1,
  };
  onClick = (v) => {
    this.setState({
      selected: v
    })
  }
  componentDidMount() {
    // var data = new FormData();
    // const payload = {
    // id: self.refs.id,
    // studentName: self.refs.sname,
    // age: self.refs.age,
    // emailId: self.refs.emailId

    // };
    // data.append("myjsonkey", JSON.stringify(payload));
    // fetch('http://localhost:8083/students/', {
    // method: 'POST',
    // body: data
    // })



    fetch(`${process.env.REACT_APP_DB_URL}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        }
      )
  }


  render() {
    return (
      <React.Fragment>

        <main className="react-dashboard">
          <ScreenBanner selected={this.state.selected} onClick={this.onClick}>
            <h1>Work Space</h1>
          </ScreenBanner>
          {
            this.state.selected === 1 ?
              <ShowServer />
              :
              <AddServer />
          }
        </main>
      </React.Fragment>
    );
  }
}

export default App;
