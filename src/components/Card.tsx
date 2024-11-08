import { motion } from "framer-motion";

interface Props {
  imgUrl: string;
  alt: string;
  title: string;
  desc: string;
  link: string;
}

const Card = ({ imgUrl, alt, title, desc, link }: Props) => {
  return (
    <motion.div
      className="card bg-[#282828] image-full w-full sm:w-80 lg:w-96 shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="w-full h-60 overflow-hidden">
        <img
          src={imgUrl}
          alt={alt}
          className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
          loading="lazy"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-[#ebdbb2] text-xl font-semibold">{title}</h2>
        <p className="text-[#a89984] text-sm">{desc}</p>
        <div className="card-actions justify-end mt-4">
          <button
            className="btn bg-[#d79921] text-[#282828] hover:bg-[#fe8019] transition duration-300"
            onClick={() => window.open(link, "_blank")}
          >
            Open
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
