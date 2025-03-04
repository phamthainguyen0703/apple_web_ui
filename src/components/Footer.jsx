import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-sm">
            Xem thêm cách để mua hàng:{" "}
            <span className="underline text-blue cursor-pointer">
              Tìm cửa hàng bán lẻ
            </span>{" "}
            gần bạn. Hoặc gọi 1800 1192.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-sm">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-semibold text-gray text-xs cursor-pointer"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-1"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
