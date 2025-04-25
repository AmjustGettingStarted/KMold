import ChooseYourCar from "@/components/ChooseYourCar";
import CommonFaq from "@/components/CommonFaq";
import Enquiry from "@/components/Enquiry";
import NewCars from "@/components/NewCars";
import OnRoadPrice from "@/components/OnRoadPrice";
import PeriodicService from "@/components/PeriodicService";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <NewCars />
      <OnRoadPrice />
      <ChooseYourCar />
      <Enquiry />
      <Service />
      <PeriodicService />
      <CommonFaq />
    </>
  );
}
