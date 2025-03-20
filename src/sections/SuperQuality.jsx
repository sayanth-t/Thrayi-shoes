import Button from "../components/Button";

import { shoe8 } from "../assets/images";

const SuperQuality = () => {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="flex flex-col  sm:flex-col justify-between items-center md:gap-32 lg:flex-row">
                <div className="flex flex-1 flex-col max-sm:max-w-sm gap-5">
                    <h1 className="text-4xl max-sm:text-4xl font-bold">We Provide Your 
                        <span className="text-coral-red"> Super</span> 
                        <br />
                        <span className="text-coral-red">Quality</span> Shoes</h1>
                        <p className="info-text mt-4 md:max-w-lg ">The story of Nike starts with Blue Ribbon Sports in 1964. Back then, Phil Knight had just received his MBA at Stanford following his graduation from the University of Oregon. </p>
                        <p className="info-text mt-5 md:max-w-lg">Our Dedication to Detail and Excellence ensures your satisfication </p>
                        <div className="md:max-w-lg">
                          <Button label="View Details" />
                        </div>
                </div>
                <div className="flex sm:mt-10 items-center justify-center">
                    <img src={shoe8} alt="" />
                </div>
            </div>
        </section> 
    );
}

export default SuperQuality;
