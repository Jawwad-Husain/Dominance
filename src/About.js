import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../src/styles/Button"; 
import Services from "./components/Services";
import WeDo from "./components/WeDo";
import { useProductContext } from "./context/ProductContext"

const About = () => {
 const { myName } = useProductContext();
  const data = {
    name: "About Us",
  };

  return( 
  <Wrapper>
  <div className="container">
    <div className="grid grid-two-column">
      <div className="hero-section-data">
        <p className="intro-data">Welcome to </p>
        {myName}
        <h1>About Us</h1>
        <p>
        We proudly present the accumulation of the latest in sportswear and adventure. We took our time to launch this fascinating collection, as it takes meticulous search to seek the best the world has to offer.
        We offer the entirety that defines sports and adventure. Making your expedition luxurious, swift and convenient, seek our paraphernalia to make your travel fun. Let us explore the globe for you to bring you an assortment of gear for all your journeys.
        </p>
        <NavLink to="/products">
          <Button>shop now</Button>
        </NavLink>
      </div>
      {/* our homepage image  */}
      <div className="hero-section-image">
        <figure>
          <img
            src=".\images\hero_about.png"
            alt="hero-section-photo"
            className="img-style"
          />
         {/*<Carousal/>*/}
        </figure>
      </div>
    </div>
    <WeDo/>
    <p>
        All this equipment has been tediously thought about, well sought after and carefully searched for around the globe. They have been gathered under one roof so your encampment under the stars is peaceful. We have meticulously tested their capacity and capability so that you may soar limitlessly. Our team has done the exhausting effort for you so that you may enjoy your excursion to the utmost.
        The label Dominance symbolizes the spirit of adventure in its truest form. It exists because the creators of this one of its kind enterprise chose exploration over stability. They opted towards journeying rather than inhabiting. Thus this company functions to offer the clientele a huge variety of travel gear right at their doorstep. We aim to make your voyage fun and comfortable while sending a touch of elegance and panache your way.
        We offer all categories of warm attire comprising jackets, windbreakers, caps, and thermals. All the latest mechanical gadgets including the state of the art travel stoves, sturdy hiking sticks, professional torches right at the tip of your fingers. To facilitate the perfect coffee on a starlit night we exhibit the most stylish collection of travel mugs and bottles. To make you campsite luxurious and comfortable, our camping collection boasts a wide variety of tents catering to your requirements.
    </p>
  </div>
</Wrapper>
);
};

const Wrapper = styled.section`
padding: 12rem 0;
img {
min-width: 10rem;
height: 10rem;
}
.hero-section-data {
p {
  margin: 2rem 0;
}
h1 {
  text-transform: capitalize;
  font-weight: bold;
}
.intro-data {
  margin-bottom: 0;
  color:#8c1b1c;
}
}
.hero-section-image {
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
}
figure {
position: relative;
&::after {
  content: "";
  border-radius:50px;
  width: 60%;
  height: 80%;
  background-color:#8c1b1c;;
  position: absolute;
  left: 50%;
  top: -5rem;
  z-index: -1;
}
}
.img-style {
  {
      width:100%;
      height:auto;
      display: flex;
     flex-direction:column;
     animation: up-down 2s ease-in-out infinite alternate-reverse both;
}
@-webkit-keyframes up-down{
  0%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(-10px);
  }
}
@keyframes up-down {
  0%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(-10px);
  }
}
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
.grid {
  gap: 10rem;
}
figure::after {
  content: "";
  width: 50%;
  height: 100%;
  left: 0;
  top: 10%;
  /* bottom: 10%; */
  background-color: #8c1b1c;
}
}
`;

export default About;