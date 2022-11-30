import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {toast,ToastContainer} from 'react-toastify'
import {
  Elements,
  useElements,
  useStripe,
  CardElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import axios from "../axs";

const Stripe_Promise = loadStripe(process.env.REACT_APP_STRIPEKEY);
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#04f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto,Open Sans,sans-serief",
      fontSize: "16px",
      alignItems: "center",
      flexDirection: "column",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
function StripeContainer({amount,state}) {
  
//   const handleSubmit = async (e) => {
//     console.log(e);
//     e.preventDefault();
//     console.log("hyy");
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });
//     if (!error) {
//       try {
//         const { id } = paymentMethod;
//         console.log("id", id, paymentMethod);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

  return (
    <Elements stripe={Stripe_Promise}>
      <MyComponent amount={amount && amount} state={state} />
    </Elements>
  );
}

const MyComponent=({amount,state})=>{
    const stripe=useStripe()
    const element=useElements()
    const handleSubmit=async(e)=>{
        e.preventDefault()
      const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:"card",
        card:element.getElement(CardElement)

      })
      if(!error){
        console.log("paymm",paymentMethod);
        const res=await axios.post('/api/payment/create',{
            amount,
            id:paymentMethod.id
        })
        if(res.status==200){
            console.log("success");
            toast.success("Place Order SuccesFully")
            setTimeout(()=>{
              state(false)
            },2000)
        }
      }
      else {
           console.log("error")
      }    
    }
    return (
      <div className=''>
        <p className='text-white text-md font-bold'>Check Out Form</p>
        <form className='w-full' onSubmit={handleSubmit}>
          <fieldset className='FormGroup'>
            <CardElement options={CARD_OPTIONS} />
          </fieldset>


          <button className='bg-orange-500 mt-3 mx-24 px-2 rounded-md py-2 text-white font-semibold'>
            Pay It
          </button>
        </form>
        <ToastContainer />
      </div>
    );
}

export default StripeContainer;
