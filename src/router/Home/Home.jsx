import React, { useEffect } from 'react';
import './Home.css';
import owner from '../../assets/so.png';  // Rasm manzilini tekshirib chiqing
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS stilini import qilish

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });  // AOSni inicializatsiya qilish
    }, []);



    const afzalliklar = [
        {
          id: 1,
          title: "Bizning afzalliklarimiz",
          description:
            "Mentorlarimiz Shveytsariyada ishlab, amaliyot o‘tkazib kelishgan.",
        },
        {
          id: 2,
          title: "Safsataga vaqt yo'q",
          description:
            "Kursimiz amaliy bo‘lib, siz 3-darsdan bitimlar ochib savdo qilishni boshlaysiz. Biz uchun muhimi - amaliy treyder bo‘lib chiqishingiz.",
        },
        {
          id: 3,
          title: "Talabalarni qo'llab-quvvatlash",
          description:
            "Kursda qo‘shimcha mentorlar mavjud bo‘lib, siz qayta aloqa tezkor ravishda olasiz. Qo‘shimcha darslar va ustozlar bilan cheklanmagan tarzda qo‘ng‘iroqlar va Zoom konferensiyalar amalga oshiriladi.",
        },
      ];
    return (
        <div>
            <section className="section_1">
                <div className="div_right">
                    <h1>
                        3 yillik xalqaro trader <br /> daromad qilish sirlarini o'rgatadi...
                    </h1>
                    <h4>Shveytsariya metodi asosida yaratilgan trading <br /> kursimizda siz</h4>
                    <p>
                        fond, kriptovalyuta, xomashyo, valyuta bozorlarida <br /> savdo qilishni
                        o’rganasiz.
                    </p>
                    <button>
                        Kursga Yozilish
                    </button>
                </div>
                <div className="div_left">
                    <div className="img_in" data-aos="fade-left">
                        <img className="img_owner" src={owner} alt="Trader Image" />
                    </div>
                </div>
            </section>
            <div className="afzalliklar-container">
                {afzalliklar.map((item) => (
                    <div key={item.id} className="afzalliklar-item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home;
