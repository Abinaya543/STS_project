import React, { Component } from 'react'
import AirlineService from '../services/AirlineService'
import { BsFillTrashFill,BsPencilFill,BsFillEyeFill,BsFillPlusCircleFill } from "react-icons/bs";

class ListAirlineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                airlines: []
        }
        this.addAirline = this.addAirline.bind(this);
        this.editAirline = this.editAirline.bind(this);
        this.deleteAirline = this.deleteAirline.bind(this);
    }

    deleteAirline(id){
        AirlineService.deleteAirline(id).then( res => {
            this.setState({airlines: this.state.airlines.filter(airline => airline.id !== id)});
        });
    }
    viewAirline(id){
        this.props.history.push(`/view/${id}`);
    }
    editAirline(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
        AirlineService.getAirlines().then((res) => {
            this.setState({ airlines: res.data});
        });
    }

    addAirline(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div>
                 <div className = "row mt-4">
                    <button className="btn btn-primary pt-2 pb-2 float-right" onClick={this.addAirline}><BsFillPlusCircleFill/>  Add </button>
                 </div>
                 <br></br>
                 <div className = "card p-5 row cardshadow3">
                        <table className = "table table-bordered">

                            <thead>
                                <tr>
                                    <th className='text-center'> Profile</th>
                                    <th className='text-center'> Departure</th>
                                    <th className='text-center'> Destination</th>
                                    <th className='text-center'> Departing Time</th>
                                    <th className='text-center'> Returning Time</th>
                                    <th className='text-center'> Adults</th>
                                    <th className='text-center'> children</th>
                                    <th className='text-center'> Travel Class</th>
                                    <th className='text-center'> Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.airlines.map(
                                        airline => 
                                        <tr key = {airline.id}>
                                             <td className='text-center'><img src={airline.img} className="profile-image" alt="dynamic" /></td>
                                             <td> {airline.departure} </td>   
                                             <td> {airline.destination}</td>
                                             <td> {airline.departingTime}</td>
                                             <td> {airline.returningTime} </td>
                                             <td> {airline.adults} </td>
                                             <td> {airline.children} </td>
                                             <td> {airline.travelClass} </td>
                                             <td className='text-center'>
                                                 <button onClick={ () => this.viewAirline(airline.id)} className="btn-hover btn-hover-x color-1"><BsFillEyeFill/></button>
                                                 <button onClick={ () => this.editAirline(airline.id)} className="ml-2 btn-hover btn-hover-x color-7"><BsPencilFill/></button>
                                                 <button onClick={ () => this.deleteAirline(airline.id)} className="ml-2 btn-hover btn-hover-x color-11"><BsFillTrashFill/> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAirlineComponent
