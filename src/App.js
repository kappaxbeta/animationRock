import logo from './logo.svg';
import './App.css';
import {useRef, useState, useEffect} from "react"
import styled, { keyframes,  css }  from "styled-components";
import { gsap , } from "gsap";
import {headShake, shake, fadeInRightBig} from 'react-animations';
import pink from './img/pink.png'
import violet from './img/violet.png'
import lime from './img/lime.png'
import blue from './img/blue.png'
import SplitText from './utils/SplitText3';
import useLocoScroll from './utils/useLocoScroll'
function App() {
    useLocoScroll();

    const Bg = styled.div`
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
  color:white;
  font-family: "Comic Sans MS";
`;

    const Section = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

  useEffect(() => {
     const split = new SplitText('.headline', {
          type: "lines",
          linesClass: "lineChildren"
      });

      const splitParents = new SplitText('.headline', {
          type: "lines",
          linesClass: "lineParents"
      });

     gsap.to(split.lines,{
         duration: 1,
         y:0,
         opacity: 1,
         stagger: 0.1,
         ease: 'power2'
     });
  },[]);

  return (
   <main>
     <div >
         <Bg id={'main-container'} data-scroll-container>
             <Section data-scroll-section>
                 <h1 className={'headline'}>Power Animation</h1>

             </Section>

             <Section className={'featured-section'} data-scroll-section>
                 <div className={'featured-row-layout'} >
                     <h6>GO beyond</h6>
                     <img src={blue} data-scroll=""/>
                 </div>
             </Section>

             <Section className={'featured-section'} data-scroll-section>
                 <div className={'featured-row-layout'} >
                     <h6>GO beyond</h6>
                     <img src={pink} data-scroll/>
                 </div>
             </Section>


         </Bg>
     </div>
   </main>
  );
}

export default App;
