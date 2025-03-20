import { services } from '../constants/index';
import ServicesCard from '../components/ServicesCard';

const Services = () => {
  return (
    <section className='max-conatainer'>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-10 lg:flex-row">
          {services.map((service, index) => (
            <div key={index}>
              <ServicesCard serviceInfo={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
