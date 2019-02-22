import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class StepOne extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      address: '',
      city: '',
      zipcode: 0,
      input: ''
    }
  }

  handleName(val){
    this.setState({
      name: val
    })
  }

  handleAddress(val){
    this.setState({
      address: val
    })
  }

  handleCity(val){
    this.setState({
      city: val
    })
  }

  handleZipCode(val){
    this.setState({
      zipcode: val
    })
  }
  
  

  render() {
    console.log(this.state)
    return(
      <div>
        <p>Wizard</p>
        <input placeholder="name" onChange={(e) => this.handleName(e.target.value)}></input>
        <input placeholder="address" onChange={(e) => this.handleAddress(e.target.value)}></input>
        <input placeholder="city" onChange={(e) => this.handleCity(e.target.value)}></input>
        <input placeholder="zipcode" type="number" onChange={(e) => this.handleZipCode(e.target.value)}></input>
          <button onClick={() => this.createHouse()}>Complete</button>
        <Link className='links' to="/wizard/step2">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}
const { name, address, city, state, zipcode } = this.state
function mapStateToProps(state){
  return({
    name,
    address,
    city,
    state,
    zipcode
  })
}
  export default connect(mapStateToProps)(StepOne);