import img1 from "../../../assets/brand-1.png";
import img2 from "../../../assets/brand-2.png";
import img3 from "../../../assets/brand-3.png";
import img4 from "../../../assets/brand-4.png";
import img5 from "../../../assets/brand-5.png";
import img6 from "../../../assets/brand-6.png";
import img7 from "../../../assets/brand-7.png";

const Brands = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 p-5 justify-evenly rounded-lg my-4">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      <img src={img7} alt="" />
    </div>
  );
};

export default Brands;
