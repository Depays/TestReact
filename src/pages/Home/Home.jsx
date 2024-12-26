import { useEffect, useState, useCallback } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import styles from "./Home.module.css";
import images from "../../images.js";
import Button from "../../componets/Button/Button.jsx";
import SectionTitle from "../../componets/SectionsTitle/SectionTitle.jsx";
import SectionText from "../../componets/SectionText/SectionText.jsx";
import v from "../../assets/createx.mp4";
import icons from "../../icons.js";

const Home = () => {
  const [photo, setPhoto] = useState(1);
  const [arrow, setArrows] = useState({
    isLeftArrowAvailable: true,
    isRightArrowAvailable: false,
  });
  const [discuss, setAgree] = useState(false);
  console.log(arrow.isLeftArrowAvailable);

  const handleChangePhoto = (direction) => {
    console.log(direction);
    console.log(photo);
    if (photo == 1 && direction == -1) {
      setArrows((arrow) => ({ ...arrow, isLeftArrowAvailable: true }));
      return;
    }
    if (photo == 2) {
      setArrows((arrow) => ({ ...arrow, isLeftArrowAvailable: false }));
    }
    if (photo == 4 && direction == 1) {
      setArrows((arrow) => ({ ...arrow, isRightArrowAvailable: true }));
      return;
    }
    if (photo == 3) {
      setArrows((arrow) => ({ ...arrow, isRightArrowAvailable: false }));
    }
    if (direction === 1) {
      setPhoto((prev) => prev + 1);
    } else {
      setPhoto((prev) => prev - 1);
    }
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return images.bghomefirst;
      case 2:
        return images.bgsecond;
      case 3:
        return images.bgthird;
      case 4:
        return images.bgseforth;
      default:
        null;
    }
  };

  //   useEffect(() => {}, [photo]);
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
      { title: "Construction", icon: icons.servicesConstruction },
      { title: "Project Development", icon: icons.servicesPlan },
      { title: "Construction", icon: icons.servicesPantone },
      { title: "Repairs", icon: icons.servicesPainting },
    ],
    partners: [
      icons.servicesPainting,
      icons.servicesPainting,
      icons.servicesPainting,
      icons.servicesPainting,
      icons.servicesPainting,
      icons.servicesPainting,
    ],
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${returnPhotoURL()})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "2000px",
          maxHeight: "900px",
          width: "1920px",
          height: "508px",
          //   alignContent: "center",
          margin: "0 auto",
          padding: 0,
        }}
        // className={`${styles.container}`}
      >
        <div className={`${styles.container} ${styles.heroAll}`}>
          <button
            style={{ marginLeft: "32px" }}
            className={styles.heroArrows}
            disabled={arrow.isLeftArrowAvailable}
            onClick={() => handleChangePhoto(-1)}
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
              <Button className={styles.buttons}>Learn more about us</Button>
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
            disabled={arrow.isRightArrowAvailable}
            onClick={() => handleChangePhoto(1)}
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
                <li className={styles.valuesItem} key={index}>
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
            <ul className={styles.valuesList}>
              {coreValues.services.map((item, index) => (
                <li key={index}>
                  <img
                    className={styles.test}
                    src={item.icon}
                    alt="ServicesLogo"
                  />
                  <h3>{item.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.viewServices}>
            <p>Learn more about our services</p>
            <Button>View services</Button>
          </div>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <SectionTitle className={styles.projectsTitle}>
              Browse our selected projects and learn more about our work
            </SectionTitle>
            <div>
              <button className={styles.projectArrows}>
                <FaArrowLeftLong />
              </button>
              <button className={styles.projectArrows}>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionOffset}>
        <div className={styles.container}>
          <SectionTitle>Supported by 12+ partners</SectionTitle>
          <ul className={`${styles.valuesList} ${styles.listWrapper}`}>
            {coreValues.partners.map((partner, index) => (
              <li key={index}>
                <img src={partner} alt="PatnerLogo" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className={styles.container}>
          <SectionTitle>Recent news</SectionTitle>
        </div>
      </section>

      <section className={`${styles.sectionOffset}`}>
        <div className={styles.container}>
          <h2>Recent news</h2>
        </div>
      </section>

      <section className={`${styles.sectionOffset} ${styles.discussBg}`}>
        <div className={styles.container}>
          <div className={`${styles.formDiscuss} ${styles.formItem}`}>
            <SectionTitle>A quick way to discuss details</SectionTitle>
            <form action="" method="put">
              <p className={styles.formItem}>
                <label htmlFor="name">Name*</label>
                <input type="text" name="name" id="name" />
              </p>
              <p className={styles.formItem}>
                <label htmlFor="phone">Phone*</label>
                <input type="tel" name="phone" id="phone" />
              </p>
              <p className={styles.formItem}>
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" />
              </p>
              <p className={styles.formItem}>
                <label htmlFor="message">Message*</label>
                <input type="text" name="message" id="message" />
              </p>
            </form>
            <div className={`${styles.flex}`}>
              <div>
                <button>!</button>
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
