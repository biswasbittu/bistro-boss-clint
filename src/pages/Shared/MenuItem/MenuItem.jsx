
const MenuItem = ({item}) => {
    console.log(item)
    const {name,price,recipe,image}=item;

    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[118px] " src={image} alt="" />
            <div>
                <h3 className="font-[Cinzel] text-xl">{name}-------------------</h3>
                <p className="font-[Inter]">{recipe}</p>
            </div>
              <p className="font-[Inter] text-xl text-[#BB8506]">${price}</p>
        </div>
   
    );
};

export default MenuItem;