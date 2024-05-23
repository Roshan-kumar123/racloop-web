"use client";
import uiuxdata from "./Data.js" assert { type: "json" };
import { useParams } from "next/navigation";
import devopsdata from "./devopsdata.json" assert { type: "json" };

function createMarkup(string) {
  return { __html: string };
}
export default function Services({ params }) {
  const param = useParams();
  console.log("param", param.servicesId);
  if (param.servicesId === "ui-ux-design") {
    return (
      <div>
        {uiuxdata.map((item, index) => {
          return (
            <div key={index}>
              <h1 dangerouslySetInnerHTML={createMarkup(item.title)} />
              <div dangerouslySetInnerHTML={createMarkup(item.content)} />
            </div>
          );
        })}
      </div>
    );
  }
  if (param.servicesId === "devops") {
    return (
      <div>
        {devopsdata.map((item, index) => {
          return (
            <div key={index}>
              <h1 dangerouslySetInnerHTML={createMarkup(item.title)} />
              {item.subheading && <h2>{item.subheading}</h2>}
              <div dangerouslySetInnerHTML={createMarkup(item.content)} />
            </div>
          );
        })}
      </div>
    );
  }
}
