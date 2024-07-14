"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {

    gsap.fromTo(".heroanimation", { opacity: 0}, { opacity: 1, duration: 4});
      
      gsap.fromTo(".aboutanimation", { opacity: 0}, { opacity: 1, duration: 4});

      gsap.fromTo (".skillsanimation", { opacity: 0}, { opacity: 1,
        scrollTrigger: {
          trigger: ".skillsanimation", 
          start: "top 80%",
          end: "bottom 90%", 
          scrub: true, 
        }
      });

      gsap.fromTo(".projectsanimation", { opacity: 0}, { opacity: 1,
        scrollTrigger: {
          trigger: ".projectsanimation", 
          start: "top 80%", 
          end: "bottom 90%", 
          scrub: true,  
        }
      });

      gsap.fromTo(".contactanimation", { opacity: 0}, { opacity: 1,
        scrollTrigger: {
          trigger: ".contactanimation", 
          start: "top 80%", 
          end: "bottom 100%", 
          scrub: true, 
        }
      });



    // Clean up animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};

export default ScrollAnimation;
