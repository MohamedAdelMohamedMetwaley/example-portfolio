import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

export default function Project({
  name,
  image,
  imageOnRight = true,
  children,
}) {
  const [windowWidth] = useState(window.innerWidth);
  const img = <img src={image} alt={name} />;
  const sliderClass = `slider${imageOnRight ? "Reverse" : ""}`;
  const onMobile = windowWidth < 1024;

  useEffect(() => {
    ScrollReveal().reveal(`.${sliderClass}`, {
      delay: onMobile ? 100 : 200,
      distance: "100px",
      origin: `${imageOnRight ? "right" : "left"}`,
      viewFactor: onMobile ? 0.3 : 0.5,
      reset: true,
    });
  }, [imageOnRight, sliderClass, onMobile]);

  return (
    <div className={`project ${sliderClass}`}>
      {(!imageOnRight || onMobile) && img}
      <div>
        <h2>{name}</h2>
        <p>{children}</p>
      </div>
      {imageOnRight && !onMobile && img}
    </div>
  );
}
