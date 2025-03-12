import { Button } from 'antd'
import computer from '../../assets/images/comp.png'
import icon1 from '../../assets/icons/statiska.png'
import icon2 from '../../assets/icons/statiska2.png'
import icon3 from '../../assets/icons/statiska3.png'
import icon4 from '../../assets/icons/statiska4.png'
import a1 from '../../assets/images/A1.png'
import a2 from '../../assets/images/A2.png'
import a3 from '../../assets/images/A3.png'
import w1 from '../../assets/images/W1.png'
import w2 from '../../assets/images/W2.png'
import w3 from '../../assets/images/W3.png'
import x1 from '../../assets/images/X1.png'
import x2 from '../../assets/images/X2.png'
import x3 from '../../assets/images/X3.png'
import x4 from '../../assets/images/X4.png'
import x5 from '../../assets/images/X5.png'
import x6 from '../../assets/images/X6.png'
import x7 from '../../assets/images/X7.png'
import x8 from '../../assets/images/X8.png'
import x9 from '../../assets/images/X9.png'


import React from 'react'

const About = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className="relative  text-white pt-20">
                    <div>
                        <div className="absolute inset-0 flex justify-center items-center -z-10">
                            <div className="w-[400px] h-[400px] bg-[#723dc011] blur-3xl rounded-full absolute top-[10%] left-[10%]"></div>
                            <div className="w-[300px] h-[300px] bg-[#7137c9ec] blur-[120px] rounded-full absolute top-[40%] right-[15%]"></div>
                        </div>

                        <div className="container mx-auto px-6 lg:px-2 flex flex-col lg:flex-row items-center">
                            {/* Yangiliklar */}
                            <div className="lg:w-3/7 text-center lg:text-left lg:pb-30">
                                <h2 className="text-4xl lg:text-[42px] font-bold leading-tight">
                                    Yuqori sifatdagi <br />
                                    <span className="font-light">aniqlikka asoslanib</span> <br />
                                    <span className="text-[#5A00DB]">istalgan turdagi</span> <br />
                                    dasturlarni tayyorlaymiz
                                </h2>

                                <Button type='primary' size='large' className='mt-4'>Xizmatlar haqida</Button>
                            </div>

                            {/* Rasm qismi */}
                            <div className="lg:w-4/7 mt-10 lg:mt-0 flex lg:justify-end relative">
                                <img className="relative drop-shadow-[0_10px_40px_rgba(90,0,219,0.6)]"
                                    src={computer}
                                    alt="Laptop" />

                            </div>
                        </div>
                        {/* Statistikalar */}
                        <div className="lg:absolute bottom-4 lg:left-1/2 transform lg:-translate-x-1/2 w-full flex flex-wrap lg:flex-nowrap lg:justify-evenly justify-center py-4 gap-8">
                            <div className="bg-[#b6a7c536]  p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                                <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                    <div>
                                        <img src={icon1} alt="statistika" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">7+ yillik</p>
                                        <p className="text-gray-300">Umumiy tajriba</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#b6a7c536] p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                                <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                    <div>
                                        <img src={icon2} alt="statistika" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">5+</p>
                                        <p className="text-gray-300">Yirik loyihalar</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#b6a7c536] p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                                <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                    <div>
                                        <img src={icon3} alt="statistika" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">8+</p>
                                        <p className="text-gray-300">Xizmat turlari</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#b6a7c536] p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                                <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                    <div>
                                        <img src={icon4} alt="statistika" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">100%</p>
                                        <p className="text-gray-300">Xavfsizlik</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Biz haqqimizda */}
            </div>
            <div className='bg-[#5A00DB]'>
                <div className='container mx-auto text-white py-5'>
                    <h1 className='font-bold text-[48px]'>Biz haqimizda</h1>
                    <p className='font-normal text-[18px]'>Qisqacha ma’lumot</p>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 justify-between py-8'>
                    <div
                        className='rounded-2xl bg-[#e2daee10] hover:scale-102 duration-700 hover: shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <img className='w-full rounded-t-2xl' src={a1} alt="team" />
                        <div className='px-4 py-6  text-white text-left'>
                            <h1 className='py-2 text-3xl font-semibold'>Boshlanishi</h1>
                            <p className='text-xl'>Biz  --- dan ish boshladik va <br />
                                ---- larni oldimizga maqsad qilib <br />
                                qo’ydik</p>
                        </div>
                    </div>
                    <div
                        className='rounded-2xl bg-[#e2daee10] hover:scale-102 duration-700 hover: shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <img className='w-full rounded-t-2xl' src={a3} alt="team" />
                        <div className='px-4 py-6  text-white text-left'>
                            <h1 className='py-2 text-3xl font-semibold'>Uzoq muddatli loyihalar</h1>
                            <p className='text-xl'>Tajribamiz davomida umumiy <br />
                                hisobda - - loyiha uchun <br />
                                -- - muddatda ishlab topshirdik</p>
                        </div>
                    </div>
                    <div
                        className='rounded-2xl bg-[#e2daee10] hover:scale-102 duration-700 hover: shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <img className='w-full rounded-t-2xl' src={a2} alt="team" />
                        <div className='px-4 py-6  text-white text-left'>
                            <h1 className='py-2 text-3xl font-semibold'>Jamoamiz kengaymoqda</h1>
                            <p className='text-xl'>Jamoamiz safi esa tobora <br />
                                kengaymoqda. Boshida - kishidan <br />
                                boshlangan faoliyatimiz hozirda <br />
                                -- kishi bilan davom etmoqda</p>
                        </div>
                    </div>
                </div>
                <div className='text-[18px] text-white w-full py-6'>
                    <p>Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into <br /> electronic typesetting, remaining essentially unchanged. </p>
                </div>
                {/* Loyihalar */}
                <div className='px-2 py-10'>
                    <div className='text-md text-white text-center py-10'>
                        <h1 className='text-4xl font-bold py-2'>Loyihalarimiz</h1>
                        <p className=''>biz haqimizda gapirsin !</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-8'>
                        <div className='rounded-2xl overflow-hidden hover:scale-102 duration-700 hover: shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                            <img className='w-full' src={w1} alt="monitor" />
                        </div>
                        <div className='flex gap-2 flex-wrap lg:items-center text-white '>
                            <h1 className='text-2xl font-semibold'>Tourmad loyihasi</h1>
                            <p>Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
                            </p>
                            <Button type='primary' color='geekblue' variant='solid' size='large'>Lo'yhani ko'rish</Button>
                        </div>
                        <div className='flex flex-wrap gap-2 items-center text-white lg:justify-end lg:text-right'>
                            <h1 className='text-2xl font-semibold'>ProRun loyihasi</h1>
                            <p>Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir musobaqada qatnashishingiz mumkin.
                                Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun yangi web ilova ishlab chiqildi.

                            </p>
                            <Button type='primary' color='geekblue' variant='solid' size='large'>Lo'yhani ko'rish</Button>
                        </div>
                        <div className='rounded-2xl overflow-hidden hover:scale-102 duration-700 hover: shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                            <img className='w-full' src={w2} alt="monitor" />
                        </div>
                        <div className='rounded-2xl overflow-hidden hover:scale-102 duration-700 hover: shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                            <img className='w-full' src={w3} alt="monitor" />
                        </div>
                        <div className='flex flex-wrap gap-2 lg:items-center text-white'>
                            <h1 className='text-2xl font-semibold'>Xalq trans loyihasi</h1>
                            <p>Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Button type='primary' color='geekblue' variant='solid' size='large'>Lo'yhani ko'rish</Button>
                        </div>
                    </div>
                </div>
                {/* Xizmat turlari */}
                <div className='px-2 py-4'>
                    <div className='text-xl lg:text-4xl text-center text-white py-10'>
                        <h1 className='font-bold'>Xizmat turlari</h1>
                        <p className='text-base font-light'>Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 text-white py-4'>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x1} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>Landing sahifalar</h1>
                            <p className='font-light py-4'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x2} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>Korporativ veb-sayt</h1>
                            <p className='font-light py-4'>Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x3} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>Online do’kon</h1>
                            <p className='font-light py-4'>Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x4} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>CRM tizimi</h1>
                            <p className='font-light py-4'>Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x5} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>Portfolio saytlari</h1>
                            <p className='font-light py-4'>Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x6} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>Blog sahifalari</h1>
                            <p className='font-light py-4'>O‘z fikrlari, yangiliklari yoki ma'lumotlarini o‘rtoqlashish.
                                Ma'lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x7} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>Ta’lim platformasi</h1>
                            <p className='font-light py-4'>Ta'lim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x8} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>ERP  platformasi</h1>
                            <p className='font-light py-4'>ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta'minotdir. U tashkilotning moliyaviy, ishlab chiqarish, logistika, kadrlar boshqaruvi va boshqa bo‘limlarini avtomatlashtirish uchun.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 text-center justify-center p-10 bg-[#bdabd61e] rounded-2xl hover:scale-102 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='hover:scale-105 duration-700' src={x9} alt="servise" />
                            </div>
                            <h1 className='font-semibold text-3xl pt-2'>Alohida loyihami ?</h1>
                            <p className='font-light py-4'>Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz. Agarda sizda yangi startap g’oya mavjud bo’lsa biz siz bilan uni rivojlantirish ustida ishlashga tayyormiz. G’oyadan boshlab ishlash uchun tayyor dasturgacha shakllantiramiz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default About;
