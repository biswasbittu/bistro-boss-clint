
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopulerMenu = () => {
    const[menu,setMenu]=useState([])
    useEffect(()=>{
      fetch("menu.json")
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
        const popularItems=data.filter(item=>item.category =='popular')
        setMenu(popularItems)
    })
    },[])
    return (
        <section>
            <SectionTitle
             heading={'FROM OUR MENU'}
             subHeading={'---Check it out---'}
            />
            <div className='grid  md:grid-cols-2 gap-10 mb-12'>
                {
                    menu.map(item=><MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;