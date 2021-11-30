import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


export default function useLocoScroll() {
    useEffect(() =>  {
        let locoScroll = null;

        const scrollEl = document.querySelector("#main-container");

        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
        });



    },[]);

}
