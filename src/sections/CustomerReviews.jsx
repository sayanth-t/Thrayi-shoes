import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container ">
            <h3 className="font-palanquin font-bold text-3xl leading-normal text-center">What Our <span className="text-coral-red">Customer</span> Say</h3>
            <p className="text-slate-gray info-text mt-5 lg:max-w-lg sm:max-w-md text-center mx-auto ">Here genuine store from our satisfied customers about their exceptional experience with us .</p>
            <div className="mt-4 flex max-lg:flex-col">
                {
                    reviews.map((review,i)=> (
                        <ReviewCard key={i} review={review} />
                    ))
                }
            </div>
        </section>
    );
}

export default CustomerReviews;
