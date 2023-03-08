import React, { Component } from 'react'
import AirlineService from '../services/AirlineService';
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

class CreateAirlineComponent extends Component 
{
    constructor(props) {
        super(props)

        this.state = 
        {
            // step 2
            id: this.props.match.params.id,
            departure: '',
            destination: '',
            departingTime: '',
            returningTime: '',
            adults:'',
            children:'',
            travelClass:''
        }
        this.changeDepartureHandler = this.changeDepartureHandler.bind(this);
        this.changeDestinationHandler = this.changeDestinationHandler.bind(this);
        this.changeDepartingTimeHandler = this.changeDepartingTimeHandler.bind(this);
        this.changeReturningTimeHandler = this.changeReturningTimeHandler.bind(this);
        this.changeAdultsHandler = this.changeAdultsHandler.bind(this);
        this.changechildrenHandler = this.changechildrenHandler.bind(this);
        this.changeTravelClassHandler = this.changeTravelClassHandler.bind(this);
        this.saveOrUpdateAirline = this.saveOrUpdateAirline.bind(this);
    }

    // step 3
    componentDidMount()
    {

        // step 4
        if(this.state.id === '_add'){
            return
        }
        else
        {
            AirlineService.getAirlineById(this.state.id).then( (res) =>{
                let airline = res.data;
                this.setState({
                    departure: airline.departure,
                    destination:airline.destination,
                    departingTime:airline.departingTime,
                    returningTime:airline.returningTime,
                    adults:airline.adults,
                    children:airline.children,
                    travelClass:airline.travelClass


                });
            });
        }        
    }
    saveOrUpdateAirline = (e) => {
        e.preventDefault();
        let airline = {departure: this.state.departure, destination: this.state.destination, departingTime: this.state.departingTime, returningTime: this.state.returningTime,
            adults: this.state.adults,children: this.state.children,travelClass: this.state.travelClass};
        console.log('airline => ' + JSON.stringify(airline));

        // step 5
        if(this.state.id === '_add')
        {
            AirlineService.createAirline(airline).then(res =>{
                this.props.history.push('/reserve');
            });
        }
        else
        {
            AirlineService.updateAirline(airline, this.state.id).then( res => {
                this.props.history.push('/reserve');
            });
        }
    }
    
    changeDepartureHandler= (event) => {
        this.setState({departure: event.target.value});
    }

    changeDestinationHandler= (event) => {
        this.setState({destination: event.target.value});
    }

    changeDepartingTimeHandler= (event) => {
        this.setState({departingTime: event.target.value});
    }
    changeReturningTimeHandler= (event) => {
        this.setState({returningTime: event.target.value});
    }
    changeAdultsHandler= (event) => {
        this.setState({adults: event.target.value});
    }
    changechildrenHandler= (event) => {
        this.setState({children: event.target.value});
    }
    changeTravelClassHandler= (event) => {
        this.setState({travelClass: event.target.value});
    }

    cancel(){
        this.props.history.push('/reserve');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center p-4 m-2 text-info">Add</h3>
        }else{
            return <h3 className="text-center p-4 m-2 text-info">Update</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Departure: </label>
                                            <input placeholder="Departure" name="Departure" className="form-control" 
                                                value={this.state.departure} onChange={this.changeDepartureHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Destination: </label>
                                            <input placeholder="Destination" name="Destination" className="form-control" 
                                                value={this.state.destination} onChange={this.changeDestinationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Departing Time: </label>
                                            <input placeholder="DepartingTime" name="DepartingTime" className="form-control" 
                                                value={this.state.departingTime} onChange={this.changeDepartingTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Returning Time: </label>
                                            <input placeholder="ReturningTime" name="ReturningTime" className="form-control" 
                                                value={this.state.returningTime} onChange={this.changeReturningTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Adults: </label>
                                            <input placeholder="Adults" name="Adults" className="form-control" 
                                                value={this.state.adults} onChange={this.changeAdultsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> children: </label>
                                            <input placeholder="children" name="children" className="form-control" 
                                                value={this.state.children} onChange={this.changechildrenHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Travel Class: </label>
                                            <input placeholder="TravelClass" name="TravelClass" className="form-control" 
                                                value={this.state.travelClass} onChange={this.changeTravelClassHandler}/>
                                        </div>
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.saveOrUpdateAirline}><BsCheckCircleFill/> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><BsFillXCircleFill/> Cancel</button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateAirlineComponent
