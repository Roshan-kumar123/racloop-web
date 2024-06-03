import React, { useState } from "react";
import Link from "next/link";
// import { PiBlueprint } from "react-icons/pi";
import {
  FaPaintBrush,
  FaProductHunt,
  FaVial,
  // FaCloud,
  FaSearch,
  FaWarehouse,
  FaCogs,
  FaUsers,
  FaRedo,
  // FaSearch,
  FaTools,
  FaRocket,
  FaCloud,
  FaCode,
  FaLock,
  FaSalesforce,
  FaShieldAlt,
  FaShoppingCart,
  FaRobot,
  FaLink,
  FaBusinessTime,
} from "react-icons/fa";
import {
  AiOutlineFileText,
  AiOutlineBulb,
  AiOutlineRobot,
  AiFillExperiment,
  AiFillPieChart,
} from "react-icons/ai"; // For Consultation and Innovation as a Service

import {
  IoMdGlobe,
  IoIosGitBranch,
  IoMdPhonePortrait,
  IoLogoGameControllerB,
  IoIosCube,
} from "react-icons/io";

import "./newTab.css"; // Create this CSS file to style the tabs

const tabs = [
  {
    label: "Product Engineering",
    content: (
      <div>
        <h2 className="tab_heading">
          Crafting Vision, Shaping Values, and Engineering Successh
        </h2>
        <div className="tab_content_div">
          <div className="tab_content_card">
            <div className="solution-box">
              <FaPaintBrush className="tab_icon mb-3" />
              <Link href={"/services/ui-ux-design-services"}>UX/UI Design</Link>
            </div>

            <div className="solution-box">
              <FaProductHunt className="tab_icon mb-3" />
              <p>Product Development</p>
            </div>

            <div className="solution-box">
              <FaVial className="tab_icon mb-3" />
              <p>Test Automation</p>
            </div>

            <div className="solution-box">
              <FaCloud className="tab_icon mb-3" />
              <Link href="/services/devops">
                Deployment, DevOps &
                <br />
                Integrations
              </Link>
            </div>

            <div className="solution-box">
              <FaSearch className="tab_icon mb-3" />
              <p>
                Product Discovery/
                <br />
                Blueprint
              </p>
            </div>

            <div className="solution-box">
              <FaWarehouse className="tab_icon mb-3" />
              <Link href={"/services/product-sustenance"}>
                Product Sustenance
              </Link>
            </div>

            <div className="solution-box">
              <FaCogs className="tab_icon mb-3" />
              <p>Infrastructure Automation</p>
            </div>

            <div className="solution-box">
              <FaUsers className="tab_icon mb-3" />
              <p>Smart Teams</p>
            </div>

            <div className="solution-box">
              <FaRedo className="tab_icon mb-3" />
              <p>Modernization</p>
            </div>
          </div>

          <div className="tab_img">
            <img src="https://cdn.mobisoftinfotech.com/assets/images/newhome/services/webp/Service-1.webp" />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Innovation",
    content: (
      <div>
        <h2 className="tab_heading">
          Cultivating Creativity with Sustainable Digital Transformation &
          Driving Progress
        </h2>
        <div className="tab_content_div">
          <div className="tab_content_card">
            <div className="solution-box">
              <AiOutlineFileText className="tab_icon mb-3" />
              <p>Consultation</p>
            </div>

            <div className="solution-box">
              <FaSearch className="tab_icon mb-3" />
              <p>Discovery</p>
            </div>

            <div className="solution-box">
              <AiOutlineBulb className="tab_icon mb-3" />
              <p>Innovation as a Service</p>
            </div>

            <div className="solution-box">
              <FaTools className="tab_icon mb-3" />
              <p>Prototype & POC</p>
            </div>

            <div className="solution-box">
              <FaRocket className="tab_icon mb-3" />
              <p>MVP</p>
            </div>
          </div>

          <div className="tab_img">
            <img src="https://cdn.mobisoftinfotech.com/assets/images/newhome/services/webp/Service-2.webp" />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Emerging Technologies",
    content: (
      <div>
        <h2 className="tab_heading">
          Navigating New Horizons, Shaping Futures, and Achieving Business
          Breakthroughs
        </h2>
        <div className="tab_content_div">
          <div className="tab_content_card">
            <div className="solution-box">
              <AiOutlineRobot className="tab_icon mb-3" />
              <p>Artificial Intelligence</p>
            </div>

            <div className="solution-box">
              <AiFillExperiment className="tab_icon mb-3" />
              <p>Machine Learning</p>
            </div>

            <div className="solution-box">
              <IoMdGlobe className="tab_icon mb-3" />
              <p>AR/VR</p>
            </div>

            <div className="solution-box">
              <IoIosGitBranch className="tab_icon mb-3" />
              <p>IoT</p>
            </div>

            <div className="solution-box">
              <FaRobot className="tab_icon mb-3" />
              <p>RPA</p>
            </div>

            <div className="solution-box">
              <IoMdPhonePortrait className="tab_icon mb-3" />
              <p>Wearables</p>
            </div>

            <div className="solution-box">
              <IoLogoGameControllerB className="tab_icon mb-3" />
              <p>Metaverse</p>
            </div>

            <div className="solution-box">
              <FaLink className="tab_icon mb-3" />
              <p>Blockchain</p>
            </div>

            <div className="solution-box">
              <AiFillPieChart className="tab_icon mb-3" />
              <p>Analytics</p>
            </div>

            <div className="solution-box">
              <FaBusinessTime className="tab_icon mb-3" />
              <p>Business Intelligence</p>
            </div>

            <div className="solution-box">
              <IoIosCube className="tab_icon mb-3" />
              <p>Data Warehousing</p>
            </div>
          </div>
          <div className="tab_img">
            <img src="https://cdn.mobisoftinfotech.com/assets/images/newhome/services/webp/Service-3.webp" />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Advisory",
    content: (
      <div>
        <h2 className="tab_heading">
          Guiding Strategies and Driving Business Reinventions
        </h2>
        <div className="tab_content_div">
          <div className="tab_content_card">
            <div className="solution-box">
              <FaLock className="tab_icon mb-3" />
              <p>Dev Secure Ops</p>
            </div>

            <div className="solution-box">
              <FaCode className="tab_icon mb-3" />
              <p>Technology & Architecture</p>
            </div>

            <div className="solution-box">
              <FaCloud className="tab_icon mb-3" />
              <p>Cloud</p>
            </div>

            <div className="solution-box">
              <FaShieldAlt className="tab_icon mb-3" />
              <p>Cybersecurity</p>
            </div>

            <div className="solution-box">
              <FaSalesforce className="tab_icon mb-3" />
              <p>Salesforce</p>
            </div>

            <div className="solution-box">
              <FaShoppingCart className="tab_icon mb-3" />
              <p>Digital Commerce</p>
            </div>
          </div>

          <div className="tab_img">
            <img src="https://cdn.mobisoftinfotech.com/assets/images/newhome/services/webp/Service-4.webp" />
          </div>
        </div>
      </div>
    ),
  },
];

const VerticalNewTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const renderContent = () => {
    const activeTabContent = tabs.find(
      (tab) => tab.label === activeTab
    ).content;
    return <div className="tab-content">{activeTabContent}</div>;
  };

  return (
    <div className="tab_section">
      <h1 className="heading">Digital Enablement With Integrated Services</h1>

      <div className="vertical-tabs">
        <div className="tab-list">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`tab-button ${
                tab.label === activeTab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content-container">{renderContent()}</div>
      </div>
    </div>
  );
};

export default VerticalNewTabs;
