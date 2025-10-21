"use client"
import { useAuth } from '@clerk/nextjs';
import { CheckoutProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { CartItemsType, ShippingFormInputs } from '@repo/types';
import useCartStore from '@/stores/cartStore';
const stripe = loadStripe("pk_test_51Ozi6IAsBW4tfXq72XtTyNIycKKxcxOJgau8r5yjmz2rY0wHboGa9cgJUb2AV1yBoCbsDDGb5pr6hZ0EqHee3XoJ004KDcCurE");

const fetchClientSecret = async (cart:CartItemsType, token:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}/sessions/create-checkout-session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
    });

    const json = await res.json();
    console.log("🧾 Response from /create-checkout-session:", json);
    return json.checkoutSessionClientSecret;
};

const StripePaymentForm = ({ shippingForm, }: { shippingForm: ShippingFormInputs }) => {
    const {cart}=useCartStore()
    const [token, setToken] = useState<string | null>(null)
    const { getToken } = useAuth()

    useEffect(() => {
        getToken().then((token) => setToken(token))
    }, []);


    if (!token) {
        return <div className=''>
            Loading...
        </div>
    }


    return (

        <CheckoutProvider
            stripe={stripe}
            options={{ fetchClientSecret: () => fetchClientSecret(cart,token) }}
        >
            <CheckoutForm shippingForm={shippingForm} />
        </CheckoutProvider>

    )
}

export default StripePaymentForm