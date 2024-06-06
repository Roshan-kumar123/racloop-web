import Data from "@/data/machinelearning";
import ServiceTitle from "@/components/ourServices/ServiceTitle";
import ImageDesc4 from "@/components/ourServices/ImageDesc4";
import "../../style/globals.css";
import ImageDesc3 from "@/components/about/ImageDesc3";
import ColumnInfo from "@/components/ourServices/Column-Info";
import StepsInfo from "@/components/ourServices/stepsInfo";
import ColumnInfo2 from "@/components/about/ColumnInfo2";
import ImageDesc from "@/components/ourServices/ImageDesc";
import CodeBlock from "@/components/machine-learning/codeBlock";
export default function LinearRegression({ params }) {
  const data = Data[0][params.id];
  const name = params.id;
  const n = data.length;

  if (params.id === "k-nearest-neighbors") {
    return (
      <>
        <ServiceTitle data={data[0]} />
        <ImageDesc3 data={data[1]} />
        <ImageDesc data={data[2]} />
        <ImageDesc4 data={data[3]} />
        <CodeBlock data={data[n - 2]} />
        <ColumnInfo data={data[n - 1]} />
      </>
    );
  }
  if (params.id === "decision-trees") {
    return (
      <>
        <ServiceTitle data={data[0]} />
        <ImageDesc3 data={data[1]} />
        <ColumnInfo2 data={data[2]} />
        <ImageDesc4 data={data[3]} />
        <ImageDesc4 data={data[4]} reverse={true} />
        <ColumnInfo data={data[5]} />
        <StepsInfo data={data[6]} />
        <CodeBlock data={data[7]} />
        <ColumnInfo data={data[8]} />
      </>
    );
  }
  return (
    <>
      <ServiceTitle data={data[0]} />
      <ImageDesc3 data={data[1]} />
      <ImageDesc4 data={data[2]} />
      <ColumnInfo data={data[3]} />
      <StepsInfo data={data[4]} />
      <ImageDesc data={data[5]} />
      <ColumnInfo2 data={data[6]} />
      <CodeBlock data={data[n - 2]} />
      <ColumnInfo data={data[n - 1]} />
    </>
  );
}
