"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const tabList = ["All", "Light", "Dark", "Animation Effect"];
export default function SimpleSlider() {
  const AllDemos = [
    {
      categories: ["Light", "Animation Effect"],
      imageName: "light-animation",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
      animationDelay: "",
    },
    {
      categories: ["Animation Effect", "Dark"],
      imageName: "dark-animation",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
      animationDelay: "100",
    },
    {
      categories: ["Light"],
      imageName: "light-theme",
      title: "Light Theme",
      routePath: "home-light",
      animationDelay: "200",
    },

    {
      categories: ["Dark"],
      imageName: "dark-theme",
      title: "Dark Theme",
      routePath: "home-dark",
      animationDelay: "",
    },

    {
      categories: ["Light"],
      imageName: "video-light",
      title: "Video Light Theme",
      routePath: "home-video-light",
      animationDelay: "100",
    },
    {
      categories: ["Dark"],
      imageName: "video-dark",
      title: "Video Dark Theme",
      routePath: "home-video-dark",
      animationDelay: "200",
    },
  ];

  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const [filteredItems, setFilteredItems] = useState(AllDemos);
  useEffect(() => {
    if (currentTab == "All") {
      setFilteredItems(AllDemos);
    } else {
      const filtered = [
        ...AllDemos.filter((elm) => elm.categories.includes(currentTab)),
      ];
      setFilteredItems(filtered);
    }
  }, [currentTab]);
  return (
    <>
      <div className="portfolio-filter-01">
        <div
          className="filter d-flex flex-wrap"
          style={{
            columnGap: "12px",
            width: "100%",
            cursor: "pointer",
            justifyContent: "space-between",
            fontSize: "16px",
            color: "#1c1d24",
            fontWeight: "600",
          }}
        >
          {tabList.map((val, i) => (
            <div
              key={i}
              onClick={() => setCurrentTab(val)}
              className={` fs-6 portfolio-tab ${
                currentTab == val ? "active" : ""
              } fs-6" key={i}`}
            >
              {val}
            </div>
          ))}
        </div>
        {/* End tablist */}

        <div className="row">
          {filteredItems.map((val, i) => (
            <div
              className="col-lg-4 col-md-6 m-15px-tb"
              key={i}
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay={val.animationDelay}
            >
              <div>
                <div className="single-demo">
                  <div>
                    <Link href={val.routePath} target="_blank">
                      <div className="product-img">
                        <Image
                          style={{ height: "fit-content" }}
                          width={650}
                          height={375}
                          src={`/img/preview/${val.imageName}.png`}
                          alt="intro page"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="title text-center">
                    <h3 className="dark-color">{val.title}</h3>
                  </div>
                </div>
              </div>
              {/* End .single-demo */}
            </div>
          ))}
        </div>

        {/* End tabpanel */}
      </div>
    </>
  );
}
