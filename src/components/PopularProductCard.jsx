import {star} from '../assets/icons' ;

const PopularProductCard = (props) => {

    const {imgURL,name,price} = props.product ;
    return (
        <div className="flex flex-col gap-5 w-full max-sm:w-full">
            <div>
                <img src={imgURL} alt="product-IMG" />
            </div>
            <div className="flex flex-col justify-start">
                <div className='flex items-center gap-3 mb-2'>
                    <img src={star} alt="Rating-Star" className='w-5' />
                    <p className='font-montserrat text-slate-500 text-md'>(4.5)</p>
                </div>
                <p className='font-semibold font-palanquin leading-normal text-2xl mt-2 '>{name}</p>
                <p className='font-semibold font-montserrat  mt-2 leading-normal text-coral-red '>{price}</p>
            </div>
        </div>
    );
}

export default PopularProductCard;
