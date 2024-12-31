import { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ReactSVG } from "react-svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Home.module.css";
import images from "../../images.js";
import Button from "../../componets/Button/Button.jsx";
import SectionTitle from "../../componets/SectionsTitle/SectionTitle.jsx";
import SectionText from "../../componets/SectionText/SectionText.jsx";
import ProjectItem from "../../componets/ProjectItem/ProjectItem.jsx";
import SampleNextArrow from "../../componets/SliderButtom.jsx";
import v from "../../assets/createx.mp4";
import icons from "../../icons.js";

const Home = () => {
  const [index, setActiveStep] = useState(0);
  const [agree, setAgree] = useState(false);
  const slider = useRef(null);
  const BgCollection = [
    images.bghomefirst,
    images.bgsecond,
    images.bgthird,
    images.bgseforth,
  ];
  const CollectionSize = BgCollection.length;

  const coreValues = {
    values: [
      {
        title: "Quality",
        text: "Culpa nostrud commodo ea${&nbsp;}consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
        icon: icons.valuesQuality,
      },
      {
        title: "Safety",
        text: "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est&nbsp;ea.",
        icon: icons.valuesSafety,
      },
      {
        title: "Comfort",
        text: "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea&nbsp;ad.",
        icon: icons.valuesComfort,
      },
    ],
    services: [
      {
        title: "Construction",
        icon: icons.servicesConstruction,
        bg: images.servicesItem1,
      },
      {
        title: "Project Development",
        icon: icons.servicesPainting,
        bg: images.servicesItem2,
      },
      {
        title: "Construct",
        icon: icons.servicesPantone,
        bg: images.servicesItem3,
      },
      {
        title: "Repairs",
        icon: icons.servicesPlan,
        bg: images.servicesItem4,
      },
    ],
    projects: [
      {
        photo: images.projectItem1,
        title: "Red Finger Building",
        type: "Business Centers",
        link: "",
      },
      {
        photo: images.projectItem2,
        title: "Cubes Building",
        type: "Business Centers",
        link: "",
      },
      {
        photo: images.projectItem3,
        title: "The Pencil Building",
        type: "Stores & Malls",
        link: "",
      },
      {
        photo: images.projectItem3,
        title: "The Pencil Building",
        type: "Stores & Malls",
        link: "",
      },
      {
        photo: images.projectItem2,
        title: "Cubes Building",
        type: "Business Centers",
        link: "",
      },
      {
        photo: images.projectItem1,
        title: "Red Finger Building",
        type: "Business Centers",
        link: "",
      },
    ],
    partners: [
      icons.iconPartner1,
      icons.iconPartner2,
      icons.iconPartner3,
      icons.servicesPainting,
      icons.servicesPainting,
      icons.servicesPainting,
    ],
  };

  var settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    // nextArrow: document.querySelector("#_projectArrows_1stcg_527"),
    // prevArrow: document.querySelector("#_projectArrows_1stcg_527"),
  };

  const handleButtonAccept = () => {
    setAgree((prevState) => (prevState = !prevState));
    console.log("Click");
  };

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${BgCollection[index]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1920px",
          maxHeight: "988px",
          width: "1920px",
          height: "988px",
          margin: "0 auto",
        }}
        className={styles.sectionBg}
      >
        <div className={`${styles.container} ${styles.heroAll}`}>
          <button
            style={{ marginLeft: "32px" }}
            className={styles.heroArrows}
            disabled={index === 0}
            onClick={() => goToPrevPicture()}
          >
            <FaArrowLeftLong />
          </button>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              CREATE<span style={{ color: "#FF5A30" }}>X</span> CONSTRUCTION
            </h1>
            <p className={styles.heroP}>
              Cras ultrices leo vitae non viverra. Fringilla nisi quisque
              consequat, dignissim vitae proin ipsum sed. Pellentesque nec
              turpis purus eget pellentesque integer ipsum elementum felis.
            </p>
            <div className={styles.heroContentButtons}>
              <Button transparent={true} className={styles.buttons}>
                Learn more about us
              </Button>
              <Button className={styles.buttons}>SUBMIT REQUEST</Button>
            </div>
            <ul className={styles.heroChangeSlider}>
              <li className={styles.heroChanges}>01</li>
              <li className={styles.heroChanges}>02</li>
              <li className={styles.heroChanges}>03</li>
              <li className={styles.heroChanges}>04</li>
            </ul>
          </div>

          <button
            style={{ marginRight: "32px" }}
            className={styles.heroArrows}
            disabled={index === CollectionSize - 1}
            onClick={() => goToNextPicture()}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={`${styles.container} ${styles.createxContent}`}>
          <SectionTitle>We are Createx Construction Bureau </SectionTitle>
          <SectionText className={styles.createxText}>
            We are rightfully considered to be the best construction company in
            the USA.
          </SectionText>
          <video
            src={v}
            autoPlay
            muted
            loop
            style={{
              maxHeight: "500px",
              maxWidth: "1230px",
            }}
          >
            <a href="https://ru.freepik.com/free-video/workers-talking-marble-factory_2786935#fromView=search&page=1&position=33&uuid=f28ec7ca-009a-4a21-9b6c-0a27b9e263dd">
              Видео от freepik
            </a>
          </video>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={`${styles.container}`}>
          <SectionTitle>Our core values</SectionTitle>
          <SectionText>
            Our mission is&nbsp;to&nbsp;set the highest standards for
            construction sphere.
          </SectionText>
          <div>
            <ul className={styles.valuesList}>
              {coreValues.values.map((v, index) => (
                <li
                  className={`${styles.valuesItem} ${styles.flex}`}
                  key={index}
                >
                  <img src={v.icon} alt="ValuesIcon" />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={styles.container}>
          <SectionTitle>Our services</SectionTitle>
          <SectionText>
            Createx Construction Bureau is a construction giant with a full
            range of construction services.
          </SectionText>
          <div>
            <ul className={styles.servicesList}>
              {coreValues.services.map((item, index) => (
                <li
                  className={styles.servicesItem}
                  style={{ backgroundImage: `url(${item.bg})` }}
                  key={index}
                >
                  <ReactSVG className={styles.servicesIcon} src={item.icon} />
                  <h3>{item.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.viewServices}>
            <p className={styles.buttonParagraph}>
              Learn more about our services
            </p>
            <Button>View services</Button>
          </div>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={styles.container}>
          <div className={styles.projectsContent}>
            <div className={styles.projectsHeader}>
              <SectionTitle className={styles.projectsTitle}>
                Browse our selected projects
                and&nbsp;learn&nbsp;more&nbsp;about&nbsp;our&nbsp;work&nbsp;
              </SectionTitle>
              <div className={styles.projectArrowList}>
                <div className={styles.projectArrowsBlock}>
                  <button
                    onClick={() => slider?.current?.slickPrev()}
                    className={styles.projectArrows}
                  >
                    <FaArrowLeftLong />
                  </button>
                  <button
                    onClick={() => slider?.current?.slickNext()}
                    className={styles.projectArrows}
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.flex}>
              <ul className={styles.projectList}>
                <Slider
                  ref={slider}
                  style={{ maxWidth: "1200px" }}
                  {...settings}
                >
                  {coreValues.projects.map((project, index) => (
                    <ProjectItem
                      key={index}
                      image={project.photo}
                      title={project.title}
                      type={project.type}
                      link={project.link}
                    ></ProjectItem>
                  ))}
                </Slider>
              </ul>
            </div>
            <div className={styles.viewServices}>
              <p className={styles.buttonParagraph}>Explore all our works</p>{" "}
              <Button>View portfolio</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={styles.container}>
          <SectionTitle>Supported by 12+ partners</SectionTitle>
          <ul className={`${styles.listWrapper}`}>
            {coreValues.partners.map((partner, index) => (
              <li key={index}>
                <img src={partner} alt="PatnerLogo" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={styles.container}>
          <SectionTitle>Some facts and figures</SectionTitle>
        </div>
      </section>

      <section className={`${styles.sectionOffset}`}>
        <div className={styles.container}>
          <div>
            <SectionTitle>Recent news</SectionTitle>
            <div></div>
            <div>
              <p>Explore all our news posts</p>
              <Button>View all news</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionOffset} ${styles.discussBg}`}>
        <div className={styles.container}>
          <div className={`${styles.formDiscuss}`}>
            <h2>A&nbsp;quick way&nbsp;to&nbsp;discuss&nbsp;details</h2>
            <form action="" method="put">
              <p className={styles.formItem}>
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </p>
              <p className={styles.formItem}>
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                />
              </p>
              <p className={styles.formItem}>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your working email"
                />
              </p>
              <p className={styles.formItem}>
                <label htmlFor="message">Message*</label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Your message"
                />
              </p>
            </form>
            <div className={`${styles.flex}`}>
              <div>
                <button
                  onClick={handleButtonAccept}
                  className={agree ? styles.active : styles.acceptButton}
                >
                  <ReactSVG src={icons.check} />
                </button>
              </div>
              <p className={styles.formText}>
                I agree to receive communications from Createx Construction
                Bureax
              </p>
            </div>
            <Button>Send request</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
