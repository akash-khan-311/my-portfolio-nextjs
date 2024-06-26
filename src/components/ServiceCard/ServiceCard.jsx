/* eslint-disable react/prop-types */
import Image from "next/image";
import "./ServiceCard.css";
const ServiceCard = ({ service }) => {
  const { title, image, description } = service;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="card">
        <div className="flex justify-start my-3">
          <Image src={image} alt={title} width={100} height={100} />
        </div>
        <p className="card-title">{title}</p>
        <p className="small-desc">{description}</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </div>
  );
};
//

export default ServiceCard;
