import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { default as video } from '../../assets/video/camper.mp4';
import s from './HomePage.module.css';

const AnimatedItem = ({ title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={s.animatedItem}
  >
    <motion.h1 className={s.animatedTitle}>{title}</motion.h1>
    <motion.p className={s.animatedText}>{description}</motion.p>
  </motion.div>
);

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play;
    }
  }, []);

  const items = [
    {
      title: 'Your Journey, Your Way',
      description: 'Customize your adventure with our range of camper rentals.',
    },
    {
      title: 'Explore Nature',
      description: 'Discover breathtaking landscapes and hidden gems.',
    },
    {
      title: 'Create Memories',
      description: 'Build lasting experiences with friends and family.',
    },
  ];

  return (
    <div>
      <DocumentTitle>Rent Camper</DocumentTitle>
      <div className={s.container}>
        <video ref={videoRef} className={s.video} autoPlay muted loop playsInline>
          <source type="video/mp4" src={video} />
        </video>
        <div className={s.content}>
          {items.map((item, index) => (
            <AnimatedItem
              key={index}
              title={item.title}
              description={item.description}
              delay={index * 0.2}
            />
          ))}
        </div>
        {/* <h1 className={s.title}>Your Journey, Your Way</h1>
        <p className={s.text}>
          Welcome to Rent Camper, where every road leads to adventure. We offer a range of camper
          rentals to suit every traveler, from solo adventurers to families. Customize your journey,
          explore at your own pace, and discover the beauty of the world around you. Your adventure
          begins here!
        </p> */}
      </div>
    </div>
  );
};

export default HomePage;
