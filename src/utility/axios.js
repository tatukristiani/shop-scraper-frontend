import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:4000/"  //For local testing 
    baseURL: "https://shop-scraper-backend-9bdcee7fae35.herokuapp.com//" // Herokus base URL for the backend calls 
});