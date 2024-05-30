import { FaHandHoldingHeart } from "react-icons/fa";
import { GiGears, GiUpgrade } from "react-icons/gi";
import { IoLaptop } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const data = [
  {
    title: "About Us",
    content: "Beyond Development, Your Digital Ally",
  },
  {
    title: "",
    content:
      "Racloop is a global leader in digital product development, empowering businesses of all sizes to thrive in today's digital landscape by building, enhancing, and scaling innovative products across industries. Our secret lies in a powerful blend of design thinking, cutting-edge engineering, and a culture of innovation. We are more than just developers; we are your trusted partner on your digital journey.",
    data: [
      {
        title: "14+",
        content: "Years of Experience",
      },
      {
        title: "200+",
        content: "Projects Completed",
      },
      {
        title: "50+",
        content: "Team Members",
      },
      {
        title: "4.9/5",
        content: "Client Rating",
      },
      {
        title: "100%",
        content: "Client Satisfaction",
      },
      {
        title: "10+",
        content: "Awards Won",
      },
    ],
  },
  {
    title: "What We Do",
    content: [
      {
        title: "Product Development",
        content:
          "We build digital products that drive business growth, enhance customer engagement, and increase operational efficiency. Our product development services include web, mobile, and custom software development.",
        icon: (
          <GiGears style={{ color: "rgb(225,150,83)", fontSize: "80px" }} />
        ),
      },
      {
        title: "UI/UX Design",
        content:
          "We create intuitive, user-centric designs that captivate audiences and drive engagement. Our UI/UX design services include user research, wireframing, prototyping, and usability testing.",
        icon: (
          <MdDesignServices
            style={{ color: "rgb(225,150,83)", fontSize: "80px" }}
          />
        ),
      },
      {
        title: "Quality Assurance",
        content:
          "We ensure your product meets the highest quality standards through rigorous testing and QA processes. Our QA services include functional testing, performance testing, and security testing.",
        icon: (
          <FaHandHoldingHeart
            style={{ color: "rgb(225,150,83)", fontSize: "80px" }}
          />
        ),
      },
      {
        title: "Digital Transformation",
        content:
          "We help businesses adapt to the digital age by transforming their processes, systems, and culture. Our digital transformation services include digital strategy, technology consulting, and change management.",
        icon: (
          <IoLaptop style={{ color: "rgb(225,150,83)", fontSize: "80px" }} />
        ),
      },
      {
        title: "Startup Acceleration",
        content:
          "We help startups bring their ideas to life, scale their products, and achieve rapid growth. Our startup acceleration services include MVP development, product-market fit, and growth hacking.",
        icon: (
          <GiUpgrade style={{ color: "rgb(225,150,83)", fontSize: "80px" }} />
        ),
      },
      {
        title: "Dedicated Teams",
        content:
          "We provide dedicated teams of developers, designers, and QA engineers to help you build, enhance, and scale your digital products. Our dedicated team services include full-time, part-time, and hourly engagement models.",
        icon: (
          <RiTeamFill style={{ color: "rgb(225,150,83)", fontSize: "80px" }} />
        ),
      },
    ],
  },
  {
    title: "Our Mission",
    content:
      "Our mission is to empower businesses to thrive in the digital age by building, enhancing, and scaling innovative products that drive growth, engage customers, and increase efficiency.",
    image: "/img/about/mission.jpg",
  },
  {
    title: "Our Vision",
    content:
      "Our vision is to be the global leader in digital product development, known for our innovative solutions, exceptional quality, and unwavering commitment to our clients' success.",
    image: "/img/about/vission.jpg",
  },
];

export default data;
