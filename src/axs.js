import axios from 'axios'
const Instance=axios.create({
    baseURL: "https://food-delivery-web-app.herokuapp.com/"
})
export default Instance;