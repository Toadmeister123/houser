import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import stepOne from '../stepOne'
import stepTwo from '../stepTwo'
import stepThree from '../stepThree'


class Wizard extends Component {
  
  

  render() {
    console.log(this.state)
    return(
      <div>
        <Route component={stepOne} path="/wizard/step1"/>
        <Route component={stepTwo} path="/wizard/path2"/>
        <Route component={stepThree} path="/wizard/path3"/>
        <Link className='links' to="/">
          <button>Cancel</button>
        </Link>
      </div>
    )
  }
}


  export default Wizard;