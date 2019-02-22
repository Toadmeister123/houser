import React, {Component} from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      houses: []
    }
    this.deleteHouse = this.deleteHouse.bind(this)
  }

  componentDidMount() {
    axios.get('/api/Houses').then(res => {
      this.setState({
        houses: res.data
      })
    })
  }

  deleteHouse(id) {
    axios.delete(`/api/House/${id}`).then(res => {
      this.setState({
        houses: res.data
      })
      console.log(res.data)
    })
  }

  render() {
    const mappedHouses= this.state.houses.map(house => {
      return (
        <House
          key = {house.id}
          house={house} 
          delete={this.deleteHouse}/>
      )
    })
    return(
      <div>
        <p>Dashboard</p>
        <Link className="links" to="/wizard/step1">
          <button>Add New Property</button>
        </Link> 
        {mappedHouses}
      </div>
    )
  }
}


  export default Dashboard;
