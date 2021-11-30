import logo from './logo.svg';
import './App.css';
import {useRef, useState, useEffect} from "react"
import styled, { keyframes,  css }  from "styled-components";
import { gsap  } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {headShake, shake, fadeInRightBig} from 'react-animations';
import pink from './img/pink.png'
import violet from './img/violet.png'
import lime from './img/lime.png'
import blue from './img/blue.png'
import SplitText from './utils/SplitText3';
import useLocoScroll from './utils/useLocoScroll';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function App() {
    useLocoScroll();

    const Bg = styled.div`
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
  color:white;
      position: relative;
`;

    const Section = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;
    const circle = useRef();

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
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

     gsap.to(circle.current, {
         scrollTrigger: circle.current,
         delay: 2,
         x: 0,
         ease: 'power2'
     });

      let tl = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
              trigger: "#main-container",
              pin: true,   // pin the trigger element while active
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "bottom", // end after scrolling 500px beyond the start
              scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              snap: {
                  snapTo: "h6", // snap to the closest label in the timeline
                  duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                  delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                  ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
              }
          }
      });

  },[]);

    function Box(props) {
        // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef()
        // Hold state for hovered and clicked events
        const [hovered, hover] = useState(false)
        const [clicked, click] = useState(false)
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (ref.current.rotation.x += 0.01))
        // Return the view, these are regular Threejs elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={ref}
                scale={clicked ? 1.5 : 1}
                onClick={(event) => click(!clicked)}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
        )
    }

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
             <Section className={'featured-section-grow'} data-scroll-section>
                 <div className={'featured-row-layout-grow'} >
                     <h6>GO beyond</h6>
                     <img src={pink} width={300} height={300} style={{transform: 'translateX(calc(50vw + 150px))'}} ref={circle}data-scroll/>
                 </div>
             </Section>

             <Section data-scroll-section>
                 <Canvas height={"100vh"} data-scroll>
                     <ambientLight />
                     <pointLight position={[10, 10, 10]} />
                     <Box position={[1.2, 0, 0]} />
                 </Canvas>
             </Section>



         </Bg>
     </div>
   </main>
  );
}

export default App;
