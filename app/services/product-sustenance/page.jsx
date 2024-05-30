import data from "../Data";
import React from "react";
import ServiceTitle from "@/components/ourServices/ServiceTitle";
import RowThin from "@/components/ourServices/rowThin";
import Defination from "@/components/ourServices/Defination-block";
import ColumnInfo from "@/components/ourServices/Column-Info";
import ImageDesc2 from "@/components/ourServices/ImageDesc2";
import "../../style/globals.css";

const sustenanceData = data[0]["product-sustenance"];

export default function ProductSustenance() {
  return (
    <>
      <ServiceTitle data={sustenanceData[0]} />
      <Defination data={sustenanceData[1]} />
      <ColumnInfo data={sustenanceData[2]} />
      <ImageDesc2 data={sustenanceData[3]} />
      <ImageDesc2 data={sustenanceData[4]} reverse={true} />
      <ImageDesc2 data={sustenanceData[5]} />
      <ImageDesc2 data={sustenanceData[6]} reverse={true} />
      <RowThin data={sustenanceData[7]} />
      <ColumnInfo data={sustenanceData[8]} />
    </>
  );
}
