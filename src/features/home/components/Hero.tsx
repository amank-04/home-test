"use client";
import { BackgroundCircles, BottomLine, Gradient } from "./HeroDesign";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import { heroIcons } from "../data/heroIcons.json";
import Section from "./Section";
import Button from "@/components/Button";
import { useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section
      id="hero"
      className="-mt-[5.25rem] overflow-hidden pt-[12rem] text-white"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="z-1 relative mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 text-[2.5rem] font-semibold leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="relative inline-block">
              Gamers<span className="text-main">Tag</span>{" "}
              <img
                src="@/../public/curve.png"
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 text-n-2 mx-auto mb-6 max-w-3xl lg:mb-8">
            Unleash the power of AI within Brainmaster. Upgrade your
            productivity with Brainmaster, the open AI chat app.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="bg-conic-gradient relative z-10 overflow-hidden p-0.5">
            <div className="bg-n-8 relative overflow-hidden rounded-[1rem]">
              <div className="bg-n-6 h-[1.4rem] overflow-hidden rounded-t-[0.9rem]"></div>
              <div className="aspect-[9/16] overflow-hidden rounded-b-[0.9rem]">
                <img
                  src="@/../public/robot.jpg"
                  className="w-full translate-y-[8%] scale-[1.4] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[10%] lg:scale-[1.2]"
                  width={1024}
                  height={490}
                  alt="AI robot image"
                />
                <Generating className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="bg-n-9/40 border-n-1/10 absolute -left-[5.5rem] bottom-[7.5rem] hidden overflow-hidden rounded-2xl border px-1 py-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          {/* <div className="absolute -top-[54%] left-1/2 z-[-1] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src="@/../public/hero-background.jpg"
              className="w-full"
              width={1440}
              height={1800}
              alt="hero image"
            />
          </div> */}
          <BackgroundCircles parallaxRef={undefined} />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
}
