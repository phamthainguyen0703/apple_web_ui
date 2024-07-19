import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#link",
        toggleActions: "restart none none none",
      },
    });
  });

  return (
    <section
      id="highlights"
      className="w-sreen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Các điểm nổi bật.
          </h1>
          <div className=" flex flex-wrap items-end gap-5">
            <p className="link">
              Xem phim giới thiệu
              <img src={watchImg} alt="watch-more" className="ml-2" />
            </p>
            <p className="link">
              Xem sự kiện giới thiệu
              <img src={rightImg} alt="watch-more" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
