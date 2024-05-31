import ServiceTitle from "@/components/ourServices/ServiceTitle";
import Data from "@/data/machinelearning";
import Defination from "@/components/ourServices/Defination-block";
import RowThin from "@/components/ourServices/rowThin";
import "../../../style/globals.css";
import StepsInfo from "@/components/ourServices/stepsInfo";
import ImageDesc from "@/components/ourServices/ImageDesc";
import CodeBlock from "@/components/machine-learning/codeBlock";

export default function Page({ params }) {
  const data = Data[0]["distributions"][params.id];
  if (params.id === "normal") {
    return (
      <>
        <ServiceTitle data={data[0]} />
        <Defination data={data[1]} />
        <RowThin data={data[2]} />
        <ImageDesc data={data[3]} />
        <Defination data={data[4]} />
        <CodeBlock data={data[5]} />
        <StepsInfo data={data[6]} />
      </>
    );
  } else if (params.id === "binomial") {
    return (
      <>
        <ServiceTitle data={data[0]} />
        <Defination data={data[1]} />
        <RowThin data={data[2]} />
        <Defination data={data[3]} />
        <Defination data={data[4]} />
        <CodeBlock data={data[5]} />
        <StepsInfo data={data[6]} />
      </>
    );
  } else if (
    params.id === "poisson" ||
    params.id === "exponential" ||
    params.id === "geometrical"
  ) {
    return (
      <>
        <ServiceTitle data={data[0]} />
        <Defination data={data[1]} />
        <RowThin data={data[2]} />
        <Defination data={data[3]} />
        <CodeBlock data={data[4]} />
        <StepsInfo data={data[5]} />
      </>
    );
  }
}
