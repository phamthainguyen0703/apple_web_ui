import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Chip A17 Pro.
            <br /> Chiến thắng khủng
            <br /> cho game.
          </h2>

          <p className="hiw-subtitle">
            Đã có mặt. Lần tái thiết kế lớn nhất trong lịch sử của Apple GPU.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail - 3T Online
          </p>
        </div>

        <div className="hiw-text-container xl:ml-20 sm:ml-0">
          <div className="flex flex-1 justify-center flex-col ">
            <p className="hiw-text g_fadeIn w-3/4 mx-auto ">
              A17 Pro là một đẳng cấp hoàn toàn mới của chip iPhone, mang lại{" "}
              <span className="text-white ">
                hiệu năng đồ họa tốt nhất của Apple, tính đến thời điểm này
              </span>
              .
            </p>
            <p className="hiw-text g_fadeIn w-3/4 mx-auto ">
              Các{" "}
              <span className="text-white">
                game di động sẽ vô cùng sống động và chân thực
              </span>
              , với môi trường chi tiết đến khó tin và các nhân vật sống động
              hơn. Với tốc độ và khả năng tiết kiệm điện dẫn đầu thị trường, A17
              Pro mạnh mẽ kế thừa thế hệ trước.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text ">Mới</p>
            <p className="hiw-bigtext ">GPU</p>
            <p className="hiw-bigtext">đẳng cấp Pro</p>
            <p className="hiw-text">với 6 lõi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
