import Button from "../components/Button";
import {arrowRight} from '../assets/icons' ;
import {statistics,shoes} from '../constants/index' ;

import {bigShoe1} from '../assets/images/index' ;

import ShoeCard from "../components/ShoeCard";
import { useState } from "react";


const Hero = () => {

    const [bigShoe,setBigShoe] = useState(bigShoe1) ;

    return ( 
        <section className="relative w-full flex flex-col xl:flex-row justify-center min-h-screen max-container">
            <div className="relative xl:w-2/5 max-xl:pl-10 flex flex-col gap-5 items-start pt-32" >
                <p className="text-xl text-coral-red">Our Summer Collection</p>
                <h1 className="text-8xl max-sm:text-4xl font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-24 " >The New Arrival</span>
                    <br />
                    <span className="text-coral-red ">Nike</span> Shoes
                </h1>
                <p className="text-slate-500 text-xl sm:max-w-sm">Discover stylish Nike arrivals , quality comfort , and innovation of your active life</p>
                <Button label="Show Now" iconURL = {arrowRight} />
                <div className=" flex flex-col flex-wrap justify-start items-start gap-16 md:flex-row mt-5 ">
                {statistics.map((stat)=>(
                    <div key={stat.label}>
                        <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                        <p className="text-xl text-slate-500">{stat.label}</p>
                    </div>
                ))}
            </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 max-md:mt-7 md:mt-10  bg-primary bg-hero bg-cover bg-center ">
                <img src={bigShoe} alt="Shoe-IMG" />
            </div>
            
            <div className="absolute flex flex-row gap-10 sm:gap-12 -bottom-[5%] left-[20%] xl:left-[50%] max-sm:left-[10%] max-sm:gap-3">
                {shoes.map((shoe)=>(
                    <div key={shoe.bigShoe} className="w-32">
                        <ShoeCard 
                        imgURL={shoe} 
                        bigShoeImage={bigShoe}
                        changeBigShoeImage = {(shoe)=> {
                            
                            setBigShoe(shoe)} } 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;
