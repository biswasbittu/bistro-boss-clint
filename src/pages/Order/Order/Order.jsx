import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../../assets/shop/order.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const {category}=useParams();
  console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="">
      <Cover img={orderCoverImg} title={"ORDER Food"} />
      <div className="text-center font-[Inter]">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}/>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza}/>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soup}/>
          
          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert}/>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinks}/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
