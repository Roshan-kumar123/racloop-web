"use client";
// const Skills = () => {
//   return (
//     <>
//       <div className="row">
//         <div className="col-lg-4 my-3">
//           <div className="sm-title">
//             <h4 className="font-alt">Education</h4>
//           </div>
//           <ul className="aducation-box theme-bg">
//             <li>
//               <span className="dark-bg">2010-2012</span>
//               <h6>Front-end Engineer</h6>
//               <p>International Design Institute</p>
//             </li>
//             <li>
//               <span className="dark-bg">2010-2012</span>
//               <h6>Graphic Designer</h6>
//               <p>Rio Design Institute</p>
//             </li>
//             <li>
//               <span className="dark-bg">2010-2012</span>
//               <h6>Visual Designer</h6>
//               <p>Jakarta Design Institute</p>
//             </li>
//           </ul>
//           {/* End  .aducation-box */}
//         </div>
//         {/* End .col */}

//         <div className="col-lg-4 my-3">
//           <div className="sm-title">
//             <h4 className="font-alt">Experience</h4>
//           </div>
//           <ul className="aducation-box dark-bg">
//             <li>
//               <span className="theme-bg">2010-2012</span>
//               <h6>Software Engineer</h6>
//               <p>Furious Design Institute</p>
//             </li>
//             <li>
//               <span className="theme-bg">2010-2012</span>
//               <h6>Android Developer</h6>
//               <p>Ketlimte Design Ltd.</p>
//             </li>
//             <li>
//               <span className="theme-bg">2010-2012</span>
//               <h6>Rubby Developer</h6>
//               <p>Randara Institute Academy</p>
//             </li>
//           </ul>
//           {/* End  .aducation-box */}
//         </div>
//         {/* End .col */}

//         <div className="col-lg-4 ml-auto my-3">
//           <div className="sm-title">
//             <h4 className="font-alt">My Skills</h4>
//           </div>
//           <div className="gray-bg skill-box">
//             <div className="skill-lt">
//               <h6>React js</h6>
//               <div className="skill-bar">
//                 <div
//                   className="skill-bar-in theme-bg"
//                   style={{ width: 92 + "%" }}
//                 >
//                   <span>92%</span>
//                 </div>
//               </div>
//             </div>
//             {/* End skill-lt */}

//             <div className="skill-lt">
//               <h6>WordPress</h6>
//               <div className="skill-bar">
//                 <div
//                   className="skill-bar-in theme-bg"
//                   style={{ width: 75 + "%" }}
//                 >
//                   <span>75%</span>
//                 </div>
//               </div>
//             </div>
//             {/* End skill-lt */}

//             <div className="skill-lt">
//               <h6>Vue js</h6>
//               <div className="skill-bar">
//                 <div
//                   className="skill-bar-in theme-bg"
//                   style={{ width: 86 + "%" }}
//                 >
//                   <span>86%</span>
//                 </div>
//               </div>
//             </div>
//             {/* End skill-lt */}

//             <div className="skill-lt">
//               <h6>UI/UX</h6>
//               <div className="skill-bar">
//                 <div
//                   className="skill-bar-in theme-bg"
//                   style={{ width: 88 + "%" }}
//                 >
//                   <span>88%</span>
//                 </div>
//               </div>
//             </div>
//             {/* End skill-lt */}

//             <div className="skill-lt">
//               <h6>CSS3</h6>
//               <div className="skill-bar">
//                 <div
//                   className="skill-bar-in theme-bg"
//                   style={{ width: 92 + "%" }}
//                 >
//                   <span>92%</span>
//                 </div>
//               </div>
//             </div>
//             {/* End skill-lt */}
//           </div>
//         </div>
//         {/* End .col */}
//       </div>
//     </>
//   );
// };

// export default Skills;

const TechnologySection = () => {
  return (
    <section className="mshome-sec client-sec even rel" id="technology-sec">
      <div className="container-fluid">
        <div className="sec-head client">
          <h2 className="mshome-heading">
            Constant Innovation with Technology Competence
          </h2>
          <p className="sub-heading">
            Dedicated center of excellence for each focus area.
          </p>
        </div>
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <a href="/services/mobile-app-development-services">
                    <h3>Mobile</h3>
                  </a>
                  <p>
                    Swift,{" "}
                    <a href="/services/hire-kotlin-app-developers">Kotlin</a>,{" "}
                    <a href="/services/flutter-app-development-company">
                      Flutter
                    </a>
                    ,{" "}
                    <a href="/services/react-native-app-development-company">
                      React Native
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <a href="/services/web-application-development-company">
                    <h3>Web</h3>
                  </a>
                  <p>
                    <a href="/services/hire-java-jee-programmers-developers">
                      Java
                    </a>
                    ,{" "}
                    <a href="/services/hire-golang-developers-india">GoLang</a>,{" "}
                    <a href="/services/nodejs-app-development-company">
                      NodeJS
                    </a>
                    ,{" "}
                    <a href="/services/reactjs-development-company">ReactJS</a>,{" "}
                    <a href="/services/hire-angularjs-developers">Angular</a>,
                    Spring MVC,{" "}
                    <a href="/services/mean-stack-development-company">MEAN</a>,
                    PHP, Python, ASP.NET
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <a href="/services/devops">
                    <h3>DevOps</h3>
                  </a>
                  <p>
                    Jenkins, Docker, Kubernetes, Azure DevOps, Ansible,
                    Git/Gitlab, Terraform, CloudFormation
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <a href="/services/cloud-development-services">
                    <h3>CLOUD</h3>
                  </a>
                  <p>AWS, Microsoft Azure, Google Cloud</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <h3>DATABASE</h3>
                  <p>
                    MySQL, PostgreSQL, MS SQL Server, Oracle, Snowflake, AWS
                    Athena, Amazon Redshift, Amazon Redshift Spectrum,
                    Elasticsearch, Mixpanel
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <a href="/services/ui-ux-design-services">
                    <h3>UX/UI Design</h3>
                  </a>
                  <p>
                    Adobe Illustrator, Sketch, Adobe XD, Figma, Invision, Zeplin
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <a href="/services/test-automation">
                    <h3>QA</h3>
                  </a>
                  <p>
                    <a href="/services/hire-selenium-testers">Selenium</a>,
                    JUnit, Appium Espresso, Apple XCTest
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inno-div">
                  <a href="/technology-stack">
                    <h3>Analytics</h3>
                  </a>
                  <p>
                    Firebase Analytics, AWS Redshift, Snowflake, Data
                    Warehousing, Data Lake, PowerBI, Tableau
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="innovation">
              <h3>EMERGING</h3>
              <p>
                <a href="/services/metaverse-consulting-services">
                  Metaverse & AR/VR
                </a>
              </p>
              <p>
                <a href="/services/iot-development">Internet of Things (IoT)</a>
              </p>
              <p>
                <a href="/services/artificial-intelligence-services">
                  Artificial Intelligence (AI)
                </a>
              </p>
              <p>
                <a href="/services/robotic-process-automation-services">RPA</a>
              </p>
              <p>
                <a href="/technology-stack" className="common-btn">
                  Explore Our Tech Expertise{" "}
                  <span className="ms-sprite right-blue-icon bounce"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
