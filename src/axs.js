import axios from 'axios'
const Instance=axios.create({
    baseURL: "https://food-delivery-app-m6qo.onrender.com/"
    //baseURL: "http://localhost:5000"
})
export default Instance;