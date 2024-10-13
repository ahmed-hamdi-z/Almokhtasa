import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="mb-8 px-4">
        <h3 className="text-4xl text-[#505050] font-bold text-center">
          Testimonials
        </h3>

      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 md:w-24 w-10 z-10 bg-gradient-to-r from-[#FF6600] opacity-35 to-transparent" />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={75} reverse />
          <TestimonialList list={testimonials.top} duration={75} reverse />
          <TestimonialList list={testimonials.top} duration={75} reverse />
        </div>

        <div className="absolute top-0 bottom-0 right-0 md:w-24 w-10 z-10 bg-gradient-to-l from-[#FF6600] opacity-35 to-transparent" />
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof testimonials.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 h-52 w-[500px] grid grid-cols-1 rounded-lg overflow-hidden relative">

            <div className="bg-[#FF6600] bg-opacity-25 text-[#505050] p-4 flex flex-col items-center justify-center">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>

              <span className="block text-sm text-[#505050]">{t.info}</span>
              <span className="mt-3"> <StarRating filledStars={5} /></span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

type StarRatingProps = {
  totalStars?: number;
  filledStars: number;
};

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, filledStars }) => {
  const stars = Array(totalStars).fill(0);

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < filledStars ? "#d4a43f" : "none"}
          viewBox="0 0 24 24"
          stroke="#d4a43f"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

const testimonials = {

  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Alex F.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit!Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Claude O.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit!Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Max Q.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Jeff R.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Kevin K.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
  ],

};

export default ScrollingTestimonials;