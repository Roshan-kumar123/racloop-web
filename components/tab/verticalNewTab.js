import React, { useState } from "react";
import { PiBlueprint } from "react-icons/pi";
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
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>UX/UI Design</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Product Development</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Test Automation</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>
                Deployment, DevOps &
                <br />
                Integrations
              </p>
            </div>
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>
                Product Discovery/
                <br />
                Blueprint
              </p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Product Sustenance</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Infrastructure Automation</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Smart Teams</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
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
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Consultation</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Discovery</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Innovation as a Service</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Prototype & POC</p>
            </div>
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
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
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>CArtificial Intelligence</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Machine Learning</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>AR/VR</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>IoT</p>
            </div>
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>RPA</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Wearables</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Metaverse</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Blockchain</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Analytics</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Business Intelligence</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
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
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Dev Secure Ops</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Technology & Architecture</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Cloud</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Cybersecurity</p>
            </div>
            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
              <p>Salesforce</p>
            </div>

            <div class="solution-box">
              <PiBlueprint className="tab_icon" />
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
