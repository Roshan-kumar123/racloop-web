import Data from "@/data/machinelearning";
import ServiceTitle from "@/components/ourServices/ServiceTitle";
import RowThin from "@/components/ourServices/rowThin";
import ImageDesc4 from "@/components/ourServices/ImageDesc4";
import "../../style/globals.css";
import ImageDesc3 from "@/components/about/ImageDesc3";
import Defination from "@/components/ourServices/Defination-block";
import ColumnInfo from "@/components/ourServices/Column-Info";
import StepsInfo from "@/components/ourServices/stepsInfo";
import ColumnInfo2 from "@/components/about/ColumnInfo2";
import ImageDesc from "@/components/ourServices/ImageDesc";
import CodeBlock from "@/components/machine-learning/codeBlock";
export default function LinearRegression({ params }) {
  const data = Data[0][params.id];
  return (
    <>
      <ServiceTitle data={data[0]} />
      <ImageDesc3 data={data[1]} />
      <ImageDesc4 data={data[2]} />
      <ColumnInfo data={data[3]} />
      <StepsInfo data={data[4]} />
      <ImageDesc data={data[5]} />
      <ColumnInfo2 data={data[6]} />
      <CodeBlock data={data[7]} />
      <ColumnInfo data={data[8]} />
    </>
  );
}
