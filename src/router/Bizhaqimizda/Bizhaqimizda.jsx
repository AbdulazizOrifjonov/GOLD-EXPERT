import React from 'react'
import "./Bizhaqimizda.css"
import bit from "../../assets/image.png"
import brght from "../../assets/MT4.png"
// import Wheel from './wheel.jsx'

const Bizhaqimizda = () => {
    return (
    <div className="main_container">

        <div className='esse'>
            <div className="eese_right">

                <h1>Kompaniya haqida</h1>



                <p className='py'>

                    GOLD EXPERT - O'zbekiston bozoriga birinchilardan bo'lib kirgan moliyaviy bozorlarda savdo bo'yicha treyninglar bo'yicha eng yirik markazdir. Kompaniya 2017-yilda Shveytsariyada ixtiro qilingan va tashkil etilgan, 2019-yilda esa O‘zbekistonda rasman ro‘yxatdan o‘tgan.

                </p>

                <p className='py'>

                    4 yil ichida kompaniya allaqachon 2000 dan ortiq treyderlarni bitirib, o'z chegaralarini kengaytirmoqda. Kompaniyaning Toshkent shahrida joylashgan bosh ofisida to‘liq jihozlangan 3 ta o‘quv xonasi mavjud: ikkita monitorli 60 ta kuchli kompyuter, yuqori sifatli akustika, 4K proyektor va monitorlar, professional murabbiylar jamoasi – bu GOLD EXPERT talabalari uchun yaratilgan shart-sharoitlarning bir qismi, xolos.
                </p>
                <p className='py'>


                    Kompaniya yangi boshlanuvchilar va tajribali treyderlar uchun amaliy kurslar, yarim avtomatik va avtomatik savdo robotlari, o'nlab bepul video darslar va vebinarlarni ishlab chiqdi, shuningdek, mavjud treyderlarga ularga savdo qilishda yordam berish uchun bozor tahlilini taqdim etadi.
                </p>
                <p className='py'>


                    GOLD EXPERT kompaniyasi Oʻzbekistonda rasmiy roʻyxatdan oʻtgan, shuningdek, Oʻzbekiston va Shveytsariya Savdo-sanoat palatalarining aʼzosi hisoblanadi.
                </p>
                <p className='py'>


                    Korxona asoschisi va bosh direktori asli qo‘qonlik yosh tadbirkor Feruzbek Aliyevdir. Toshkentdagi Vestminster universitetini, Shveytsariyadagi biznes maktabining bank va moliya magistraturasini tamomlagan. Uzoq vaqt davomida u MDHdagi eng yaxshi moliyaviy konsalting firmalaridan biri bilan ishlagan va Shveytsariyaning Zug shahrida kriptovalyuta startap Codexia rahbari bo‘lgan. 2019-yilda u oʻzbek yoshlari oʻrtasida investitsiya, moliyaviy savodxonlik va savdo sohalarini rivojlantirish maqsadida Toshkentga qaytib keldi.
                </p>
                <p className='py'>


                    U litsenziyaga ega xalqaro moliyaviy tahlilchi, statistik, prognozlash va modellashtirish vositalari (SPSS, E-Views & STATA) boʻyicha mutaxassis, Bloomberg Terminal moliyaviy bozorlari professional ishtirokchilari uchun moliyaviy maʼlumotlar terminalining tajribali foydalanuvchisi, shuningdek, dasturchi. bir necha o'nlab savdo strategiyalari, savdo robotlari va maslahatchilari.
                </p>



            </div>
            <div className="esse_left">
                <img src={bit} alt="" />
            </div>
        </div>
        <br />
        <br />
        <br />
        <div className="sections">
            <p>GOLD EXPERT</p>
            <h1>GOLD EXPERT raqamlarda</h1>
            <div className="turn">
                <img src={brght} alt="" />
            </div>
          {/* <Wheel/> */}
          
        </div>
    </div>

    )
}

export default Bizhaqimizda