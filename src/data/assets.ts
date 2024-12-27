import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";
import img5 from "@/assets/images/img5.png";
import img6 from "@/assets/images/img6.png";
import img7 from "@/assets/images/img7.png";

import { StaticImageData } from "next/image";

type typeAsset = {
  id: string;
  name: string;
  image: StaticImageData;
};

const imageAsset: typeAsset[] = [
  {
    id: "1",
    name: "Happy Birthday",
    image: img1
  },
  { id: "2", name: "To You", image: img2 },
  { id: "3", name: "Mijuqi Oakmi", image: img3 },
  { id: "4", name: "Semoga apa yang di semogakan", image: img4 },
  { id: "5", name: "Dapat tersemogakan hehe", image: img5 },
  { id: "6", name: "Owh iya, sehat selalu dan", image: img6 },
  { id: "7", name: "Dilancarkan rezekinya, amin.", image: img7 }
];

export { imageAsset, type typeAsset };
