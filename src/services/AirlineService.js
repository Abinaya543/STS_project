import axios from 'axios';

const AIRLINE_API_BASE_URL = "http://localhost:8080/api/v1/reserve"  ;

class AirlineService {

    getAirlines(){
        return axios.get(AIRLINE_API_BASE_URL);
    }

    createAirline(airline){
        return axios.post(AIRLINE_API_BASE_URL, airline);
    }

    getAirlineById(airlineId){
        return axios.get(AIRLINE_API_BASE_URL + '/' + airlineId);
    }
 
    updateAirline(airline, airlineId){
        return axios.put(AIRLINE_API_BASE_URL + '/' + airlineId, airline);
    }

    deleteAirline(airlineId){
        return axios.delete(AIRLINE_API_BASE_URL + '/' + airlineId);
    }
}

export default new AirlineService()