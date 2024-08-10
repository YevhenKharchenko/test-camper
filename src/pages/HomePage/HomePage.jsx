import { useEffect, useRef } from 'react';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { default as video } from '../../assets/video/camper.mp4';
import s from './HomePage.module.css';

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play;
    }
  }, []);

  return (
    <main>
      <div>
        <DocumentTitle>Rent Camper</DocumentTitle>
        <div className={s.container}>
          <video ref={videoRef} className={s.video} autoPlay muted loop playsInline>
            <source type="video/mp4" src={video} />
          </video>
          <h1 className={s.title}>Your Journey, Your Way</h1>
          <p className={s.text}>
            Welcome to Rent Camper, where every road leads to adventure. We offer a range of camper
            rentals to suit every traveler, from solo adventurers to families. Customize your
            journey, explore at your own pace, and discover the beauty of the world around you. Your
            adventure begins here!
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
