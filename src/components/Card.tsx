interface Props {
  imgUrl: string;
  alt: string;
  title: string;
  desc: string;
  btnText: string;
}

const Card = ({ imgUrl, alt, title, desc, btnText }: Props) => {
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
          <button className="btn btn-primary">{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
