import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Header from "./Header";


const Fields = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-dark">
      <Header heading = "Technical Fields" subheading= "we work in..."/>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      <div className="absolute right-10 bottom-40 text-4xl font-semibold text-light font-paratext">and many more...</div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <>
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-dark"
      >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-dark backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>

        </>
  );
};

export default Fields;

const cards = [
  {
    url: "webdev.jpg",
    title: "Web Dev",
    id: 1,
  },
  {
    url: "appdev.jpg",
    title: "App Dev",
    id: 2,
  },
  {
    url: "ML.jpg",
    title: "ML",
    id: 3,
  },
  {
    url: "iot.avif",
    title: "IOT",
    id: 4,
  },
  {
    url: "arvr.webp",
    title: "AR/VR",
    id: 5,
  },
  // {
  //   url: "robotics.jpg",
  //   title: "Robotics",
  //   id: 5,
  // },
  {
    url: "os.webp",
    title: "Open Src",
    id: 6,
  },
  {
    url: "cs.jpg",
    title: "CyberSec",
    id: 7,
  },
  {
    url: "3d.avif",
    title: "3D",
    id: 8,
  },
];