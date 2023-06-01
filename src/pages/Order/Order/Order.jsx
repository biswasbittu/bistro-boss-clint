import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
  return (
    <div className="">
      <Cover img={orderCoverImg} title={"ORDER Food"} />
      <div className="text-center font-[Inter]">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList >
          <Tab >Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
