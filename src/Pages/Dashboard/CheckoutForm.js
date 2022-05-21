import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

// import '../styles/common.css';

const CheckoutForm = ({ appointment }) => {
    const [success, setSuccess] = useState();
        const [error, setError] = useState();
        const [transactionId, setTransactionId] = useState();
        const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const {_id, price, patientName, patient } = appointment;
    const [clientSecret, setClientSecret] = useState();
    useEffect(() => {
        fetch(' https://dry-hollows-31914.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
            },
            body: JSON.stringify({ price })
        }).then(response => response.json()).then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret)
            }
        })
    }, [price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


setSuccess('');
setProcessing(true)
        //  confirm card payment
        const { paymentIntent, payError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if(payError){
            setError(payError?.message);
            setProcessing(false)
 
        }else{
            setError('');
            setTransactionId(paymentIntent.id);
            setSuccess('done');
            console.log(paymentIntent);


// store payment on database

const payment ={
    appointment: _id,
    trasnsectionId: paymentIntent.id,
}


            fetch(` https://dry-hollows-31914.herokuapp.com/bookings/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
                },
                body: JSON.stringify(payment)
            })
            .then(response => response.json())
            .then(data =>{
                console.log(data);
            })
            setProcessing(false)
        }

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret}>
                    <button className="btn btn-info"> Pay</button>
                </button>
            </form>
            {error && <p>{error}</p>}
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </div>
    );
}

export default CheckoutForm;