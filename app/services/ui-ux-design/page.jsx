import React from "react"; // Add this line
import data from "../../../data/services";
import "../../style/globals.css";
import ServiceTitle from "@/components/ourServices/ServiceTitle";
import RowThin from "@/components/ourServices/rowThin";
import StepsInfo from "@/components/ourServices/stepsInfo";
import Cards1 from "@/components/ourServices/Cards-1";
import ColumnInfo from "@/components/ourServices/Column-Info";
const uiuxData = data[0]["ui-ux-design"];
export default function uiux() {
  console.log("uiuxData", data);
  return (
    <>
      <ServiceTitle data={uiuxData[0]} />
      <RowThin data={uiuxData[1]} />
      <StepsInfo data={uiuxData[3]} />
      <Cards1 data={uiuxData[4]} />
      <ColumnInfo data={uiuxData[5]} />
    </>
  );
}
