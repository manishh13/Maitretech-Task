import SimpleImageSlider from "react-simple-image-slider";
import img1 from "./Image/1922909411home-banner3.jpg";
import img2 from "./Image/1952342548home-banner5.jpg";
const images = [{ url: img1 }, { url: img2 }];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width="99%"
        height={500}
        images={images}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
