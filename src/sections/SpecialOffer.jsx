import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
    return (
        <section className="flex justify-center items-center max-container max-xl:flex-col-reverse gap-10">
            <div className="flex flex-1 ">
                <img src={offer} width={773} height={663} className="object-contain w-full" alt="" />
            </div>
            <div className="flex flex-1 flex-col max-sm:max-w-sm gap-5">
                    <h1 className="text-4xl max-sm:text-4xl font-bold">
                        <span className="text-coral-red"> Special</span>  Offer</h1>
                        <p className="info-text mt-4  ">Empark on a shoping journey that redefines your experience with unbeatable deals . From premier selections to increadible savings , we offer unparrelled value that sets us apart .</p>
                        <p className="info-text mt-5 ">Navigate a realm of possibilitis designed to fullfill your unique designs , surpassing the loftlest expectations . Your journey with usin nothing short exceptional . </p>
                        <div className="md:max-w-lg flex flex-wrap gap-5">
                          <Button label="Shop Now" iconURL={arrowRight} />
                          <Button label="Learn More" bgColor="bg-white" border="border-slate-gray"  textColor="text-slate-gray" />
                        </div>
                </div>
        </section>
    );
}

export default SpecialOffer;
