// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    const {isDarkMode} = this.state
    if (isDarkMode) {
      this.setState({isDarkMode: false})
    } else {
      this.setState({isDarkMode: true})
    }
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div className="bg-container">
        {isDarkMode ? (
          <div className="dark-container container">
            <h1 className="dark-heading">Click To Change Mode</h1>
            <button onClick={this.changeMode} className="button" type="button">
              Light Mode
            </button>
          </div>
        ) : (
          <div className="light-container container">
            <h1 className="light-heading">Click To Change Mode</h1>
            <button onClick={this.changeMode} className="button" type="button">
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
