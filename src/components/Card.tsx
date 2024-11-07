import { useNavigate } from "react-router-dom";

interface Props {
  imgUrl: string;
  alt: string;
  title: string;
  desc: string;
  link: string;
}

const Card = ({ imgUrl, alt, title, desc, link }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img
          src={imgUrl}
          alt={alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate(link)}>Open</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
