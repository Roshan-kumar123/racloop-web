import Data from "@/data/machinelearning";
import ImageDesc3 from "@/components/about/ImageDesc3";
import ServiceTitle from "@/components/ourServices/ServiceTitle";
import Defination from "@/components/ourServices/Defination-block";
import RowThin from "@/components/ourServices/rowThin";
import "../style/globals.css";
import ColumnInfo from "@/components/ourServices/Column-Info";
export default function MachineLearning() {
  const data = Data[0]["machine-learning"];
  return (
    <>
      <ServiceTitle data={data[0]} />
      <ImageDesc3 data={data[1]} />
      <RowThin data={data[2]} />
      <Defination data={data[3]} />
      <ColumnInfo data={data[4]} />
    </>
  );
}
