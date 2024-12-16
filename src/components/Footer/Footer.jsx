import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./Footer.css"; // CSS faylni import qilish

const Footer = () => {
  const [inView, setInView] = useState(false);

  // Intersection Observer bilan kuzatuv
  const { ref } = useInView({
    threshold: 0.3, // 30% ko'rinishi yetganda ishlaydi
    triggerOnce: true, // Faqat bir marta ishlaydi
    onChange: (visible) => {
      if (visible) setInView(true);
    },
  });

  // Animatsiyalar
  const percentageProps = useSpring({
    from: { value: 0 },
    to: { value: inView ? 87 : 0 },
    config: { duration: 2000 },
  });

  const amountProps = useSpring({
    from: { value: 0 },
    to: { value: inView ? 200000 : 0 },
    config: { duration: 2000 },
  });

  return (
    <div className="footer-container" ref={ref}>
      <h1 className="footer-header">GOLD EXPERT</h1>

      <div className="footer-stats">
        {/* 87% bo'limi */}
        <div>
          <div className="progress-bar">
            <animated.div
              className="progress-bar-filled"
              style={{
                width: percentageProps.value.to((val) => `${val}%`),
              }}
            />
          </div>
          <animated.div className="footer-percentage">
            {percentageProps.value.to((val) => `${val.toFixed(0)}%`)}
          </animated.div>
          <p className="footer-description">O'QUVCHILARIMIZ NATIJAGA CHIQISHGAN!</p>
        </div>

        {/* 200,000 bo'limi */}
        <div>
          <div className="progress-bar">
            <animated.div
              className="progress-bar-filled"
              style={{
                width: amountProps.value.to((val) => `${(val / 200000) * 100}%`),
              }}
            />
          </div>
          <animated.div className="footer-amount">
            {amountProps.value.to((val) => `${Math.floor(val).toLocaleString()}`)}
          </animated.div>
          <p className="footer-description">
            DOLLAR ENG KO'P DAROMAD QILGAN O'QUVCHIMIZ NATIJASI
          </p>
        </div>
      </div>

      <div className="footer-form-container">
        {/* Forma Qismi */}
        <div>
          <form className="footer-form">
            <label htmlFor="ism">Ismingiz</label>
            <input type="text" id="ism" name="ism" placeholder="Ismingizni kiriting" />

            <label htmlFor="telefon">Telefon raqamingiz</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              placeholder="Telefon raqamingizni kiriting"
            />

            <button type="submit">Yuborish</button>
          </form>
        </div>

        {/* Matn Qismi */}
        <div className="footer-text-container">
          <h2>Bepul konsultatsiya olish!</h2>
          <p>Ushbu raqamga qo‘ng‘iroq qilib, bepul konsultatsiya olishingiz mumkin!</p>
          <p className="footer-phone">+998 78 113 66 11</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
