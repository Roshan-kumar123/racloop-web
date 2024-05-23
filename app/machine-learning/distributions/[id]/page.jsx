import ServiceTitle from "@/components/ourServices/ServiceTitle";
import Data from "@/components/machine-learning/Data";
import Defination from "@/components/ourServices/Defination-block";
import RowThin from "@/components/ourServices/rowThin";
import "../../../style/globals.css";
import Cards1 from "@/components/ourServices/Cards-1";
import StepsInfo from "@/components/ourServices/stepsInfo";
import ColumnInfo from "@/components/ourServices/Column-Info";
import ImageDesc from "@/components/ourServices/ImageDesc";
import CodeBlock from "@/components/machine-learning/codeBlock";

export default function Page({ params }) {
  const data = Data[0][params.id];
  return (
    <>
      <ServiceTitle data={data[0]} />
      <Defination data={data[1]} />
      <RowThin data={data[2]} />
      <ImageDesc data={data[3]} />
      <Defination data={data[4]} />
      <img
        src={data[4].image}
        alt={data[4].title}
        className="h-[200px] md:h-[400px]"
      />
      <CodeBlock data={data[5]} />
      <StepsInfo data={data[6]} />
    </>
  );
}
