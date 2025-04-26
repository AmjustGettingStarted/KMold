import Banner from "@/components/Banner";
import ChooseYourCar from "@/components/ChooseYourCar";
import CommonFaq from "@/components/CommonFaq";
import Enquiry from "@/components/Enquiry";
import { Hero } from "@/components/Hero";
import NewCars from "@/components/NewCars";
import OnRoadPrice from "@/components/OnRoadPrice";
import PeriodicService from "@/components/PeriodicService";
import SecondHeader from "@/components/SecondHeader";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <SecondHeader />
      <NewCars />
      <OnRoadPrice />
      <ChooseYourCar />
      <Enquiry />
      <Service />
      <PeriodicService />
      <CommonFaq  />
    </>
  );
}
