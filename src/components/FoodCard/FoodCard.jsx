const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" right-0  absolute mt-4 mr-5 px-3 py-1 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline px-8  border-0 border-b-4 text-[#BB8506] hover:bg-[#111827] hover:text-[#BB8506] font-[Inter]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
