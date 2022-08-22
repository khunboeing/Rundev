import React, { useState,useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./BannerComponent.css";
import leftIcon from "../../img/icons8-left-48.png";
import rightIcon from "../../img/icons8-right-48.png";
import banner1 from "../../img/womenrunbanner.png";
import banner2 from "../../img/banner-run-2.jpeg";
import banner3 from "../../img/runner-start-point.webp";
import banner4 from "../../img/Female-Runner-Start-1.jpeg";

function BannerComponent() {
  const mockupImg = [
    {
      url: banner1,
      text: ["11 Greatest Running", "Tips And Tricks"],
      href: "https://www.lifehack.org/articles/lifestyle/11-greatest-running-tips-and-tricks.html"
    },
    {
      url: banner2,
      text: ["How to Prevent", "Running Injuries"],
      href: "https://www.runnersworld.com/health-injuries/a20812228/how-to-prevent-common-running-injuries/"
    },
    {
      url: banner3,
      text: ["4 Exercises to Increase", "Your Running Speed"],
      href: "https://www.active.com/running/articles/4-exercises-to-increase-your-running-speed"
    },
    {
      url: banner4,
      text: ["What a High Resting Heart Rate ", "Could Be Telling You About Your Training"],
      href:"https://www.runnersworld.com/health-injuries/a40755927/high-resting-heart-rate/"
    },
  ];

  const [current, setCurrent] = useState(0);
  const end = mockupImg.length - 1;
  useEffect(()=>{
    const slideInterval = setInterval(()=>{
      slide('next')
      console.count('render')
    },7000)
    return ()=>{
      console.count('clear')
      clearInterval(slideInterval)
    } 
      
  })
  function slide(event) {
    if (event?.target?.id === "prev" || event === 'next')
      setCurrent(current >= end ? 0 : current + 1);
    else setCurrent(current <= 0 ? end : current - 1);
  }
  return (
        <TransitionGroup className="banner">
          <div className="banner-button">
            <button onClick={slide}>
              <img id="next" src={leftIcon} />
            </button>
            <button onClick={slide}>
              <img id="prev" src={rightIcon} />
            </button>
          </div>
      <CSSTransition key={mockupImg[current].url} in='false' timeout={3000} classNames="fade" >
          <div className="banner-img">
            <img src={mockupImg[current].url} alt="" />
          </div>
      </CSSTransition>
            <div className="banner-img-text">
              <h2>{mockupImg[current].text[0]}</h2>
              <h2>{mockupImg[current].text[1]}</h2>
              <a href={mockupImg[current].href}>Read more</a>
            </div>
        </TransitionGroup>
  );
}

export default BannerComponent;
