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

export const GetAllProducts = async (ContextState) => {
    try {
        console.log("im here");
        const res = await axios.get('/api/product')
        console.log(res.data);
        if (res.status == 200) {
            console.log(res.data.products);
            ContextState(res.data.products)
        }

    } catch (error) {
        console.log(error);
    }
}
export const GetAllCart = async (id, CartContext) => {
    try {
        const res = await axios.get(`/api/cart/${id}`)
        console.log(res.data);
        if (res.status == 200) {
            //localStorage.setItem('Cart', JSON.stringify(res.data.cart.cart))
            CartContext(res.data.cart.cart)

        }
    } catch (error) {
        console.log(error);
    }
}

export const AddCartProduct = async (user, product, CartContext) => {
    try {
        const res = await axios.post('/api/cart/add', {
            user,
            product
        })
        console.log(res.data);
        if (res.status == 200) {
            CartContext(res.data.cart.cart)
        }
    } catch (error) {
        console.log(error);
    }
}

export const ChangeCartQty = async (data, index, ContextState) => {
    try {
        const res = await axios.put('/api/cart/change', data)
        console.log(res.data);
        if (res.status == 200) {
            ContextState({
                index,
                qtychange: data.qtychange
            })
        }
    } catch (error) {
        console.log(error);
    }
}