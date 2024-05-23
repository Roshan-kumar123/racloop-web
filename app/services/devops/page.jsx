import ServiceTitle from "@/components/ourServices/ServiceTitle";
import data from "../Data";
import "../../style/globals.css";
import RowThin from "@/components/ourServices/rowThin";

const devopsData = data[0]["devops"];
export default function devops() {
  console.log("devopsData", data);
  return (
    <>
      <ServiceTitle data={devopsData[0]} />
      <RowThin data={devopsData[1]} />
    </>
  );
}
