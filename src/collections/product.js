import {
    toast
} from 'react-toastify';
import axios from '../axs';

export const AddCatogeryTitle = async (name, Load) => {
    try {
        console.log(name);
        const res = await axios.post('/api/product/add-catogery', {
            name
        })
        console.log(res.data);
        if (res.status == 200) {
            console.log("success");
            Load(false)
            return toast.success("Catogery Added succesFully")
        }
    } catch (error) {
        Load(false)
        console.log(error);
        return
    }
}
export const GetCatogery = async (context) => {
    try {
        console.log("in fnctn");
        const res = await axios.get('api/product/catogery')
        console.log(res.data);
        if (res.status == 200) {
            console.log("success");
            context(res.data.catogery)
        }
    } catch (error) {
        console.log(error);
    }
}

export const AddProduct = async (data, Load) => {
    try {
        const res = await axios.post('/api/product/add-product', data)
        console.log(res.data);
        if (res.status == 200) {
            Load(false)
            return toast.success("Added Succes Fullly", {
                theme: "dark"
            })
        }
    } catch (error) {
        console.log(error);
        Load(false)
        return toast.error("wrong", {
            theme: "dark"
        })
    }
}