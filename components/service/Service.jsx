"use client";
import { useState, useRef, useEffect } from "react";

const ServiceContent = [
  {
    icon: "ti-mobile",
    title: "Mobile App Development",
    descriptions: `At Racloop, we specialize in crafting custom mobile apps that boost business performance and user engagement. Our expert team delivers high-quality iOS, Android, and cross-platform applications designed for seamless user experiences. From concept to launch, we provide comprehensive development, rigorous testing, and ongoing support. Partner with us to turn your app vision into reality and stay ahead in the digital age. Contact us today to get started!`,
  },
  {
    icon: "ti-server",
    title: "Cloud Solutions",
    descriptions: `In the era of cloud computing, Racloop offers comprehensive cloud solutions tailored to your business needs. Whether it's migrating your infrastructure to the cloud, building cloud-native applications, or optimizing cloud resources, we ensure scalability, security, and efficiency. Leverage the power of the cloud with Racloop's expertise.`,
  },
  {
    icon: "ti-desktop",
    title: "Web Development",
    descriptions: `Racloop provides cutting-edge web development services to bring your online presence to life. We create responsive, user-friendly websites and web applications that reflect your brand identity and drive engagement. Our team utilizes the latest web technologies to deliver high-performance solutions that meet your business goals.`,
  },
  {
    icon: "ti-settings",
    title: "DevOps Solutions",
    descriptions: `Streamline your software development and deployment processes with Racloop's DevOps solutions. We implement industry best practices to automate workflows, improve collaboration, and accelerate time-to-market. From continuous integration and delivery to infrastructure as code, we optimize your DevOps pipeline for efficiency and innovation.`,
  },
  {
    icon: "ti-panel",
    title: "Artificial Intelligence (AI)",
    descriptions: `Unlock the potential of artificial intelligence with Racloop's AI solutions. Our team leverages machine learning, natural language processing, and computer vision technologies to build intelligent systems that drive business growth. From predictive analytics to personalized recommendations, we help you harness the power of AI for competitive advantage.`,
  },
  {
    icon: "ti-control-play",
    title: "Automation Services",
    descriptions: `At Racloop, we empower businesses with automation solutions to streamline processes and boost productivity. Whether it's automating repetitive tasks, implementing robotic process automation (RPA), or creating custom automation workflows, we help you optimize your operations and focus on innovation.`,
  },
];

export default function Service() {
  const [expanded, setExpanded] = useState({});
  const contentRefs = useRef([]);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="row">
      {ServiceContent.map((val, i) => (
        <div className="col-md-6 col-lg-4 my-3" key={i}>
          <div className="feature-box-01">
            <div className="icon">
              <i className={val.icon}></i>
            </div>
            <div className="feature-content">
              <h5>{val.title}</h5>
              <p
                ref={(el) => (contentRefs.current[i] = el)}
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                  maxHeight: expanded[i]
                    ? `${contentRefs.current[i]?.scrollHeight}px`
                    : "3em", // Adjust initial height as needed
                }}
              >
                {val.descriptions}
              </p>
              <a
                href="#"
                style={{
                  color: "#1c1d24", // Dark color
                  textDecoration: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "block",
                  marginTop: "10px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  toggleReadMore(i);
                }}
              >
                {expanded[i] ? " Read Less..." : " Read More..."}
              </a>
            </div>
          </div>
          {/* End .feature-box-01 */}
        </div>
      ))}
    </div>
  );
}
