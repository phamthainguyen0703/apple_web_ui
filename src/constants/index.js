import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  "Cửa Hàng",
  "Mac",
  "iPad",
  "Iphone",
  "Watch",
  "AirPods",
  "TV & Nhà",
  "Giải Trí",
  "Phụ Kiện",
  "Hỗ trợ",
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Khám phá A17 Pro.",
      "Chip thay đổi cuộc chơi.",
      "Hiệu năng chấn động địa cầu.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titan.", "Thật bền chắc. Thật nhẹ.", "Thật Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max với phạm vi",
      "thu phóng quang học dài nhất",
      "từng có ở iPhone. Cực ngầu.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Nút Tác Vụ hoàn toàn mới.", "Bạn định dùng làm gì"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro Titan Tự Nhiên",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro Titan Xanh",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro Titan Trắng",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro Titan Đen",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
