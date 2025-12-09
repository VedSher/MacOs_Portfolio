import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}`, fontWeight: baseWeight }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const { min, max } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      fontWeight: Math.round(weight),
    });
  };

  const handleMouseMove = (e) => {
    const letters = container.querySelectorAll("span");
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);
      const weight = min + (max - min) * intensity;

      animateLetter(letter, weight);

      // debug
      // console.log to verify we're receiving mousemove events
      // eslint-disable-next-line no-console
      console.log("gsap: mousemove", type, Math.round(weight));

      // Fallback visible animation to test GSAP
      gsap.to(letter, {
        duration: 0.25,
        ease: "power2.out",
        opacity: 0.5 + intensity * 0.5,
      });
    });
  };

  const handleMouseLeave = () => {
    // eslint-disable-next-line no-console
    console.log("gsap: mouseleave", type);
    const letters = container.querySelectorAll("span");
    const base = FONT_WEIGHTS[type].default || 400;

    letters.forEach((letter) => {
      const props = {
        duration: 0.3,
        ease: "power2.out",
        fontVariationSettings: `'wght' ${base}`,
        fontWeight: Math.round(base),
      };

      if (type === "subtitle") props.opacity = 1;

      gsap.to(letter, props);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const cleanupTitle = setupTextHover(titleRef.current, "title");
    const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      if (typeof cleanupTitle === "function") cleanupTitle();
      if (typeof cleanupSubtitle === "function") cleanupSubtitle();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Vaidik! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
