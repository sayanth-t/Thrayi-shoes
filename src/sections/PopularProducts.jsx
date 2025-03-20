
import {products} from '../constants/index' ;

import PopularProductCard from '../components/PopularProductCard';

const PopularProducts = () => {
    return (
        <section className='max-container max-sm:mt-10'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
                <p className='font-montserrat text-gray-500 text-xl'> Discover innovative designs, exclusive collections, and custom options for every sport and lifestyle.</p>
            </div>
            <div className='flex w-full justify-center items-center'>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 gap-6 mt-10'>
                    {products.map((product)=>(
                        <div className='cursor-pointer' key={product.name}>
                            <PopularProductCard product={product}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularProducts;
