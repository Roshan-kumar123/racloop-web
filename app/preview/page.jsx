import PreviewDemoGallery from "@/components/PreviewDemoGallery";
import Image from "next/image";

const FeaturesContent = [
  {
    img: "/img/preview/features/nextjs.png",
    title: "Nextjs 14+ App Dir.",
    descriptions: `We used latest Nextjs version ^14. Max Components are Reusable for you. It's a awesome design made by Nextjs.`,
    animationDelay: "",
  },
  {
    img: "/img/preview/features/2.svg",
    title: "Bootstrap 5",
    descriptions: `Made this template Bootstrap 5 Grid System. So definitely 100% Responsive & fit any type of devices.`,
    animationDelay: "100",
  },
  {
    img: "/img/preview/features/5.svg",
    title: "Sass Available",
    descriptions: `It's tamplate has Sass available for css.All Modules are well oraganized. You can Change css by sass`,
    animationDelay: "200",
  },
  {
    img: "/img/preview/features/4.svg",
    title: "Well Documented",
    descriptions: `It's documented organized way Both Online and Offline. So anyone start from zero knowledge.`,
    animationDelay: "300",
  },
  {
    img: "/img/preview/features/3.svg",
    title: "Perfect Responsive",
    descriptions: `It's 100% Responsive for all devices such as mobile, tablet, desktop even larger screen device too.`,
    animationDelay: "400",
  },
  {
    img: "/img/preview/features/6.svg",
    title: "Fast Loading Speed",
    descriptions: `Since it's made with Latest React JS so u get faster loading speed.It's enhance your pages ultra super fast`,
    animationDelay: "500",
  },
  {
    img: "/img/preview/features/7.svg",
    title: "Modern Design",
    descriptions: `It's followed with modern, creative and trendy design for Creative people and Organization.`,
    animationDelay: "600",
  },
  {
    img: "/img/preview/features/8.svg",
    title: "24/7 Support",
    descriptions: `We are provide 24/7  support for all clients.You can purchase without any type of hesitation.`,
    animationDelay: "700",
  },
];
export const metadata = {
  title: "Krozo - Preview || React Personal Portfolio Template",
};
const Preview = () => {
  return (
    <>
      <section className="section demo-section" id="demo">
        <div className="container">
          <div className=" title-wrapper text-center">
            <span className="tag gray-bg">Demos</span>
            <h2 className="title color-dark">All Awesome Demos</h2>
          </div>
          {/* End tile */}
          <div className="preview-inner">
            <PreviewDemoGallery />
          </div>
        </div>
      </section>
      {/* End Preview section */}

      <section className="section feature-section  home-dark" id="features">
        <div className="container-fluid">
          <div className="title-wrapper text-center">
            <span className="tag">Features</span>
            <h2 className=" title">
              <span className="theme-color">Krozo</span> All Features
            </h2>
          </div>

          <div className="row">
            {FeaturesContent.map((val, i) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 my-3"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.animationDelay}
              >
                <div className="feature-box-01">
                  <div>
                    <div className="icon">
                      <Image
                        width={24}
                        height={24}
                        src={`${val.img}`}
                        alt="features"
                      />
                    </div>
                    <div className="feature-content">
                      <h5>{val.title}</h5>
                      <p>{val.descriptions}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End feature section */}

      <section className="section gray-bg purchase-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="purchase-block-inner">
                <span
                  className="dark-color"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  You are at the right step now
                </span>

                <h3
                  className="m-15px-b"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Purchase The Krozo and Make Your Own{" "}
                  <span className="theme-color">NextJS</span> &{" "}
                  <span className="theme-color">Bootstrap5 </span> Based
                  Portfolio Template.
                </h3>

                <a
                  href="https://themeforest.net/item/krozo-react-personal-portfolio-template/33293104"
                  className="px-btn px-btn-theme"
                  target="_blank"
                  rel="noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <span>Purchase Now</span>
                </a>
              </div>
              {/* End .purchase-block-inner */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
