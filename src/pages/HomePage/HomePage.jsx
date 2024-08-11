import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { default as video } from '../../assets/video/camper.mp4';
import Button from '../../shared/components/Button/Button.jsx';
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
  const navigate = useNavigate();

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play;
    }
  }, []);

  const items = [
    {
      title: 'Start Your Unforgettable Journey!',
      description: 'Welcome to Rent Camper, where every road leads to adventure.',
    },
    {
      title: 'Your Journey, Your Way',
      description: 'Customize your adventure with our range of camper rentals.',
    },
    {
      title: 'Explore Nature',
      description: 'Discover breathtaking landscapes and hidden gems.',
    },
  ];

  return (
    <>
      <DocumentTitle>Rent Camper</DocumentTitle>
      <section className={s.container}>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: items.length * 0.2 }}
            className={s.animatedItem}
          >
            <Button
              className={s.btn}
              title="Explore Now"
              onClick={() => {
                navigate('/catalog');
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
