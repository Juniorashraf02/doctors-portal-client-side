import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {  Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1dg0B5WMGrt28lrlvH9mAZ9Wg6rgSUqLsXpK5DhlJv7SafWEaXSwsOCZ5U4V0voRW4UE3yn9BJaUsF2c8byhjs00Qflj7Vdp');
const Payment = () => {
    const { id } = useParams();
    const url = ` https://dry-hollows-31914.herokuapp.com/bookings/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
        }
    }).then(response => response.json()))

    if (isLoading) {
        return <p>Loading</p>
    }


    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">

                <div>
                    <h1 class="text-5xl font-bold">Hello, {appointment.patientName}</h1>
                    <h1 class="text-2xl font-bold ">Please pay for {appointment.treatment}</h1>
                    <p class="my-2">{appointment.date}</p>
                    <p class="my-2">Please pay: ${appointment.price}</p>
                    
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm appointment={appointment}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;