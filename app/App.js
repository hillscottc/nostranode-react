import React from 'react';
import * as nostra from 'nostra';
import Nostra from './components/Nostra'
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fortune: "Lucky."};
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    this.setState({fortune: nostra.generate()})
  }

  buttonClick(value) {
    console.log("Clicked " + value);
    this.setState({fortune: nostra.generate()})
  }

  render() {
    const { fortune } = this.state;
    return (
        <div className={styles.app}>
          <Nostra fortune={fortune} onClick={this.buttonClick} />
        </div>
    );
  }
}