import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Выбирите блюда",
      text: "В нашем меню есть блюда на любой вкус",
    },
    {
      image: ChooseMeals,
      title: "Выбирите способ приготовления",
      text: "Наши профессиональные повара, могут с легкостью приготовить блюда из разных кухонь мира",
    },
    {
      image: DeliveryMeals,
      title: "Мы доставим ваш заказ в мгновение ока",
      text: "У нашей компании множество филиалов по всему миру",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Заказ</p>
        <h1 className="primary-heading">Как же сделать заказ?</h1>
        <p className="primary-text">
          Выбирите еду, выбирите способ приготовления,
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
