import "./App.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaChevronDown,
  FaPlay
} from "react-icons/fa";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

import hero from "./assets/hero.jpeg";
import music from "./assets/music.mp3";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const tryPlayAudio = async () => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        audio.volume = 0.35;
        audio.currentTime = 0;
        await audio.play();

        window.removeEventListener("pointerdown", tryPlayAudio);
        window.removeEventListener("keydown", tryPlayAudio);
      } catch (error) {
        console.warn("Audio playback was blocked until interaction happened:", error);
      }
    };

    window.addEventListener("pointerdown", tryPlayAudio);
    window.addEventListener("keydown", tryPlayAudio);

    return () => {
      window.removeEventListener("pointerdown", tryPlayAudio);
      window.removeEventListener("keydown", tryPlayAudio);
    };
  }, []);

  const startExperience = async () => {
    const audio = audioRef.current;

    if (audio) {
      try {
        audio.volume = 0.35;
        audio.currentTime = 0;
        await audio.play();
      } catch (error) {
        console.warn("Audio playback failed:", error);
      }
    }

    document
      .getElementById("intro")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={music} type="audio/mp3" />
      </audio>

      <main className="website">
{/* ================= HERO ================= */}

<section className="hero">

  <img
    src={hero}
    className="hero-image"
    alt="Princess"
  />

  <div className="overlay"></div>

  <motion.div
    className="hero-content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >

    <motion.span
      className="hero-label"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      TO MY PRINCESS
    </motion.span>

    <motion.h1
      className="hero-title"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        duration: 1.2,
      }}
    >
      There are moments
      <br />
      that quietly change
      <br />
      your entire life.
    </motion.h1>

    <motion.div
      className="hero-divider"
      initial={{ width: 0 }}
      animate={{ width: "90px" }}
      transition={{
        delay: 1.4,
        duration: 0.8,
      }}
    />

    <motion.p
      className="hero-description"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.8,
      }}
    >
      Mine began at
      <span> Poonam Sweets.</span>

      <br /><br />

      I still remember the very first moment I saw you.

      <br />

      I had absolutely no idea

      <br />

      that the girl standing in front of me

      <br />

      would slowly become

      <strong> my favourite person.</strong>
    </motion.p>

    <motion.button
      className="begin-btn"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={startExperience}
    >

      Begin

      <FaChevronDown />

    </motion.button>

  </motion.div>

</section>

        {/* ================= INTRO ================= */}

        <section
          id="intro"
          className="intro"
        >

          <motion.div
            className="intro-container"
            initial={{
              opacity: 0,
              y: 60
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1
            }}
          >

            <h2>

              Dear Princess <span className="intro-emoji">❤️✨</span>

            </h2>

            <p>

              Before I say anything... <span className="intro-note">this is from my heart.</span>

              <br /><br />

              I just want to thank you.

              <br /><br />

              Thank you for loving me. <span className="intro-emoji">🌹</span>

              <br />

              Thank you for choosing me. <span className="intro-emoji">💖</span>

              <br />

              Thank you for standing beside me
              for the past one and a half years.

              <br /><br />

              Somewhere along this beautiful journey... <span className="intro-highlight">✨</span>

              <br /><br />

              I became too comfortable.

              <br /><br />

              Not because
              I loved you less...

              <br /><br />

              But because
              I forgot that love
              isn't only something
              we feel.

              <br /><br />

              It's something
              we show. <span className="intro-emoji">💌</span>

              Every single day.

              <br /><br />

              And lately...

              I haven't made you
              feel as special
              as you truly are.

              <br /><br />

              That realization
              hurts me deeply.

              <br /><br />

              This website
              isn't here
              to erase my mistake. <span className="intro-highlight">💭</span>

              <br /><br />

              It's here
              to remind you...

              <br /><br />

              that there has never
              been a day

              where I stopped
              loving you.

            </p>

            <div className="scroll-indicator">

              <FaChevronDown />

            </div>

          </motion.div>

        </section>

        {/* ================= OUR STORY ================= */}

<section className="story">

    <motion.div
        className="story-heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
    >

        <span>OUR STORY</span>

        <h2>
            The day that quietly
            changed my life.
        </h2>

    </motion.div>

    <div className="timeline">

        <motion.div
            className="timeline-card left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >

            <div className="timeline-number">
                01
            </div>

            <h3>
                Poonam Sweets
            </h3>

            <p>

                I still remember that day.

                <br /><br />

                Walking in without knowing
                that my whole world
                was waiting for me.

                <br /><br />

                One glance.

                One smile.

                One conversation.

                <br /><br />

                Somehow...

                that was all it took.

            </p>

        </motion.div>

        <motion.div
            className="timeline-card right"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >

            <div className="timeline-number">
                02
            </div>

            <h3>
                Falling For You
            </h3>

            <p>

                I didn't realize it immediately.

                <br /><br />

                But every conversation
                made me want another.

                <br /><br />

                Every smile
                became my favorite sight.

                <br /><br />

                Every goodbye
                became a little harder.

            </p>

        </motion.div>

        <motion.div
            className="timeline-card left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >

            <div className="timeline-number">
                03
            </div>

            <h3>
                One And A Half Years
            </h3>

            <p>

                Here we are.

                <br /><br />

                Countless laughs.

                Countless memories.

                Countless moments
                I'll never trade
                for anything.

                <br /><br />

                Yet...

                somewhere along the way

                I forgot
                to make you feel

                as special

                as you truly are.

            </p>

        </motion.div>

    </div>

</section>

{/* ================= PHOTO GALLERY ================= */}

<section className="gallery">

    <motion.div

        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}

    >

        <span className="section-tag">

            MY FAVORITE MEMORIES

        </span>

        <h2>

            Every picture
            tells a story.

        </h2>

    </motion.div>

    <div className="gallery-grid">

        <motion.div
            className="gallery-item large"
            whileHover={{
                scale: 1.03
            }}
        >

            <img
                src={img1}
                alt=""
            />

            <div className="gallery-overlay">

                <h3>

                    The Beginning

                </h3>

                <p>

                    The day I unknowingly
                    met the girl
                    who'd become
                    my favorite person.

                </p>

            </div>

        </motion.div>

        <motion.div
            className="gallery-item"
            whileHover={{
                scale: 1.03
            }}
        >

            <img
                src={img2}
                alt=""
            />

            <div className="gallery-overlay">

                <h3>

                    Your Smile

                </h3>

                <p>

                    A smile
                    I'll never get tired
                    of looking at.

                </p>

            </div>

        </motion.div>

        <motion.div
            className="gallery-item"
            whileHover={{
                scale: 1.03
            }}
        >

            <img
                src={img3}
                alt=""
            />

            <div className="gallery-overlay">

                <h3>

                    My Safe Place

                </h3>

                <p>

                    Wherever you are...

                    feels like home.

                </p>

            </div>

        </motion.div>

    </div>

</section>

      </main>
    </>
  );
}

export default App;