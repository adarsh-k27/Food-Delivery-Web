import axios from 'axios'
const Instance=axios.create({
    baseURL: "https://food-delivery-web-app.herokuapp.com/"
    //baseURL: "http://localhost:5000"
})
export default Instance;