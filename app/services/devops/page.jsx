import ServiceTitle from "@/components/ourServices/ServiceTitle";
import data from "../Data";
import "../../style/globals.css";
import RowThin from "@/components/ourServices/rowThin";
import StepsInfo from "@/components/ourServices/stepsInfo";
import Defination from "@/components/ourServices/Defination-block";
import ImageDesc from "@/components/ourServices/ImageDesc";
import ColumnInfo from "@/components/ourServices/Column-Info";

const devopsData = data[0]["devops"];
export default function devops() {
  console.log("devopsData", data);
  return (
    <>
      <ServiceTitle data={devopsData[0]} />
      <RowThin data={devopsData[1]} />
      <StepsInfo data={devopsData[2]} />
      <ImageDesc data={devopsData[3]} />
      <Defination data={devopsData[4]} />
      <RowThin data={devopsData[5]} />
      <ColumnInfo data={devopsData[6]} />
    </>
  );
}
