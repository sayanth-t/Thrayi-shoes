const ServicesCard = ({ serviceInfo }) => {
  const { imgURL, label, subtext } = serviceInfo;

  return (
    <div className="flex-1 flex-col gap-10 shadow-3xl rounded-[20px] px-10 py-16 w-full sm:max-w-[350px] sm:min-w-[350px] lg:min-h-[350px]  sm:min-h-[300px]">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full ">
        <img width={21} height={21}  src={imgURL} alt="Service-icon" />
      </div>
      <h2 className="text-3xl font-palanquin mt-4 font-bold leading-normal">{label}</h2>
      <p className="mt-3 break-words font-montserrat text-slate-gray lg:max-w-sm">{subtext}</p>
    </div>
  );
};

export default ServicesCard;
