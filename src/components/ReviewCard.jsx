import { star } from "../assets/icons";

const ReviewCard = ({review}) => {
    const {imgURL, customerName,rating,feedback} = review
    return (
        <div className="flex flex-col justify-center items-center ">
            <img src={imgURL} className="rounded-full w-[120px]  h-[120px]" alt="user-IMG" />
            <p className="lg:max-w-lg text-center info-text mt-5">{feedback}</p>
            <div className="mt-4 flex justify-center items-center">
                <img src={star} width={24} height={24} alt="star" />
                <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
            </div>
            <p className="mt-1  font-bold font-palanquin">{customerName}</p>
        </div>
    );
}

export default ReviewCard;
