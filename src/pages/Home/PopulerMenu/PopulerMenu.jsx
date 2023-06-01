
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from './../../../hooks/useMenu';


const PopulerMenu = () => {
   const [menu]=useMenu();
   const populer=menu.filter(item=>item.category==='popular');



    // const[menu,setMenu]=useState([])
  
    
    // useEffect(()=>{
    //   fetch("menu.json")
    //   .then(res=>res.json())
    //   .then(data=>{
    //     // console.log(data)
       
    //     const popularItems=data.filter(item=>item.category =='popular')
    //     setMenu(popularItems)
    // })
    // },[])


    return (
        <section>
            <SectionTitle
             heading={'FROM OUR MENU'}
             subHeading={'---Check it out---'}
            />
            <div className='grid  md:grid-cols-2 gap-10 mb-12'>
                {
                   populer.map(item=><MenuItem
                    key={item._id}
                    item={item}></MenuItem>,
                   
                    )
                }
            </div>
            <div>
            
            </div>
        </section>
    );
};

export default PopulerMenu;