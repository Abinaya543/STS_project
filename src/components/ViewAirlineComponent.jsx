import React, { Component } from 'react'
import AirlineService from '../services/AirlineService'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
class ViewAirlineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            airline: {}
        }
    }

    componentDidMount()
    {
        AirlineService.getAirlineById(this.state.id).then( res => {
            this.setState({airline: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 cardshadow3 mt-5">
                    <h3 className = "text-center mt-3 text-primary"> View  Details</h3>
                    <div className = "card-body">
                        <div className="row">
                                <div className="col-5">
                                <img src={this.state.airline.img} className="profile-image-x ml-5" alt="dynamic" />
                                </div>
                                <div className="col-7">

                                        <div className = "row">
                                            <label>Departure : </label>
                                            <div className='ml-2'> { this.state.airline.departure }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Destination : </label>
                                            <div className='ml-2'> { this.state.airline.destination }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Departing Time : </label>
                                            <div className='ml-2'> { this.state.airline.departingTime }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Returning Time : </label>
                                            <div className='ml-2'> { this.state.airline.returningTime }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Adults : </label>
                                            <div className='ml-2'> { this.state.airline.adults }</div>
                                        </div>
                                        <div className = "row">
                                            <label>children : </label>
                                            <div className='ml-2'> { this.state.airline.children }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Travel Class: </label>
                                            <div className='ml-2'> { this.state.airline.travelClass }</div>
                                        </div>
                                </div>
                        </div>
 
                    </div>
                    
                    <Link to='/' className='btn btn-primary mt-2 mb-4'><BsFillArrowLeftCircleFill/> Back</Link>

                </div>
            </div>
        )
    }
}

export default ViewAirlineComponent
