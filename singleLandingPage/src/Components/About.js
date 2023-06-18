import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = (props) => {
  let [str, setStr] = useState(true);

  const changeText = () => {
    setStr(!str);
  };

  const clickWatchVideo = () => {
    window.open(props.link);
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">О еде</p>
        <h1 className="primary-heading">
          Еда — важная часть сбалансированной диеты
        </h1>
        <p className="primary-text">
          Всегда важно питаться правильно и следить за за собой, ведь здоровье начинается с пищеварительной системы.
        </p>
        <p className="primary-text">
          Вы можете легко ознакомиться с информацией о правильном питании.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={changeText}>
          {str ? "Узнать больше" : "Лучше посмотрите видео"}
          </button>
          <button className="watch-video-button" onClick={clickWatchVideo}>
             Смотреть видео
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
