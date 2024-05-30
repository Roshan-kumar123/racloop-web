import ServiceTitle from "@/components/ourServices/ServiceTitle";
import "../style/globals.css";
import data from "./aboutData";
import AboutData from "@/components/about/aboutData";
import ImageDesc3 from "@/components/about/ImageDesc3";
import ColumnInfo2 from "@/components/about/ColumnInfo2";
export default function AboutUs() {
  return (
    <>
      <ServiceTitle data={data[0]} />
      <AboutData data={data[1]} />
      <ImageDesc3 data={data[3]} />
      <ImageDesc3 data={data[4]} reverse={true} />
      <ColumnInfo2 data={data[2]} />
    </>
  );
}