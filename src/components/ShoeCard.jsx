const ShoeCard = (props) => {
  const { thumbnail, bigShoe } = props.imgURL;
  const { bigShoeImage, changeBigShoeImage } = props;

  const handleClick = () => {
    if (bigShoeImage !== bigShoe) {
      changeBigShoeImage(bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl  cursor-pointer flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4   ${
        bigShoeImage === bigShoe ? 'border-coral-red' : 'border-transparent'
      } max-sm:flex-1`}
      onClick={handleClick}
    >
      
        <img 
          className='object-contain' src={thumbnail} alt="Show-IMG" />
      
    </div>
  );
};

export default ShoeCard;
