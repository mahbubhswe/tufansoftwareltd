import React from "react";
import TechnologyWeLove from "./TechnologyWeLove";
import AfterTechnologyWeLove from "./AfterTechnologyWeLove";
import OurServices from "./OurServices";
import IndrustryWeServe from "./IndrustryWeServe";
import OurTechnologyExpert from "./OurTechnologyExpert";
import WhyChoceUs from "./WhyChoceUs";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import ResponsiveDesign from "./ResponsiveDesign";
import AboutUs from "./AboutUs";
export default function Home() {
  return (
    <>
      <TechnologyWeLove />
      <section id="our-services">
      <OurServices />
      </section>
      <ResponsiveDesign />
      <section id="software-categories">
      <IndrustryWeServe />
      </section>
      <OurTechnologyExpert />
      <section id="about-us">
      <AboutUs />
      </section>
      <WhyChoceUs />

      <MessengerCustomerChat
        pageId="101494675943667"
        appId="2102876166584313"
      />
    </>
  );
}
