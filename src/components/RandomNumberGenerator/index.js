// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumber = () => {
    const {number} = this.state
    const randomNumber = Math.ceil(Math.random() * 99)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-text">Random Number</h1>
          <p className="para-text">
            Generate a random number in the range of 0 to 100.
          </p>
          <div>
            <button
              type="button"
              className="generate-button"
              onClick={this.getRandomNumber}
            >
              Generate
            </button>
          </div>
          <p className="random-para">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
