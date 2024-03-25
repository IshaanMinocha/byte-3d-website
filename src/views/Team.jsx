import React, { useEffect, useState } from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Team({ setProgress }) {
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div className="p-4">
      <p className="text-5xl font-bold text-center tracking-widest font-heading text-light my-10">Our Team</p>
      <div className='mb-10'>
        <p className="text-5xl tracking-wide text-green-600 font-semibold my-10">admins</p>
        <div className="grid grid-cols-3 justify-items-center">
          <Card role="Competitive Admin" name="Ishaan Minocha" Image={"ishu.png"} quote={"codes metaverse in vanilla css"} ig="https://www.instagram.com/ishaantrovert" gh="https://github.com/IshaanMinocha" lin="https://www.linkedin.com/ishaanminocha" />
          <Card role="Research Admin" name="Shivam Kumar Jha" Image={""} quote={"smthn"} />
          <Card role="Community Admin" name="Abir Thakur" Image={""} quote={"smthn"} />
          <Card role="" name="Aman Sharma" Image={""} quote={"smthn"} />
          <Card role="" name="Chanmeet Singh" Image={""} quote={"smthn"} />
          <Card role="" name="Ansh Kapila" Image={""} quote={"smthn"} />
          <Card role="" name="Subhasish Panda" Image={""} quote={"smthn"} />
          <Card role="" name="Haaris Huda" Image={""} quote={"smthn"} />
          <Card role="" name="Chayan Khetan" Image={""} quote={"smthn"} />
        </div>
      </div>
      <div className='mb-10'>
        <p className="text-5xl tracking-wide text-green-600 font-semibold my-10">web department</p>
        <div className="grid grid-cols-4 justify-items-center">
          <Card role="" name="Adisht Jaglan" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Garvit" Image={""} quote={"smthn"} />
          <Card role="" name="Shivank" Image={""} quote={"smthn"} />
          <Card role="" name="Harshill Agarwal" Image={""} quote={"smthn"} />
          <Card role="" name="Khushi Minda" Image={""} quote={"smthn"} />
          <Card role="" name="Pratham Gupta" Image={""} quote={"smthn"} />
          <Card role="" name="Sagar Jain" Image={""} quote={"smthn"} />
          <Card role="" name="Shrey Garg" Image={""} quote={"smthn"} />
        </div>
      </div>
      <div className='mb-10'>
        <p className="text-5xl tracking-wide text-green-600 font-semibold my-10">app department</p>
        <div className="grid grid-cols-4 justify-items-center">
          <Card role="" name="Ravi Banchhiwal" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Chinmay Nandawat" Image={""} quote={"smthn"} />
        </div>
      </div>
      <div className='mb-10'>
        <p className="text-5xl tracking-wide text-green-600 font-semibold my-10">ml department</p>
        <div className="grid grid-cols-4 justify-items-center">
          <Card role="" name="Piyush Mittal" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Ujwal Gupta" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Chayan Mann" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Anushka Singh" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Shivam Gupta" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Nalin Khanna" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Shorya" Image={""} quote={"smthn"} ig="" gh="" lin="" />
        </div>
      </div>
      <div className='mb-10'>
        <p className="text-5xl tracking-wide text-green-600 font-semibold my-10">iot department</p>
        <div className="grid grid-cols-4 justify-items-center">
          <Card role="" name="Arnav Chopra" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Kamaruchi Rachit Kumar" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Tanush Panwar" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Ashish Negi" Image={""} quote={"smthn"} ig="" gh="" lin="" />
        </div>
      </div>
      <div className='mb-10'>
        <p className="text-5xl tracking-wide text-green-600 font-semibold my-10">cp department</p>
        <div className="grid grid-cols-4 justify-items-center">
          <Card role="" name="Ansh Jain" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Abhinav Gupta" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Ashwin Bansal" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Rishi Agarwal" Image={""} quote={"smthn"} ig="" gh="" lin="" />
        </div>
      </div>
      <div className='mb-10'>
        <p className="text-5xl tracking-wide text-green-600 font-semibold my-10">ui/ux department</p>
        <div className="grid grid-cols-4 justify-items-center">
          <Card role="" name="Mayank Bhatia" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Anisha Dua" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Pranjal Chopra" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Vipul Kohli" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Swasti" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Vidhi Gupta" Image={""} quote={"smthn"} ig="" gh="" lin="" />
        </div>
      </div>
      <div>
        <div className='text-4xl text-center tracking-wide text-green-600 my-10'>wanna get aboard?</div>
        <a href='/' className='grid justify-items-center'>
          <button className="px-6 py-2 mb-10 font-semibold bg-purple text-light w-fit transition-all shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] hover:text-dark active:translate-y-[3px] ">
            Join Us!
          </button>
        </a>
      </div>
    </div>
  );
};

const Card = ({ role, name, Image, quote, ig, gh, lin }) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <a className="w-80 mb-10 p-4 h-80 rounded-3xl hover:scale-105 relative overflow-hidden group bg-white"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <div className="absolute inset-0 bg-green-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <img className="absolute z-10 -top-20 -right-20 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" src={Image} alt="1" />
      <p className="mb-2 text-2xl text-violet font-subhead group-hover:text-white transition-colors relative z-10 duration-300">{name}</p>
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">{role}</h3>
      {quote && (
        <p className={"text-violet font-semibold text-xl z-10 duration-300 absolute bottom-12"}>
          {quote}
        </p>
      )}
      {showIcons && (
        <div className="absolute bottom-4 left-4 flex gap-4 z-10">
          <a href={gh} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-violet text-3xl hover:text-white transition-colors duration-50" />
          </a>
          <a href={ig} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-violet text-3xl hover:text-white transition-colors duration-50" />
          </a>
          <a href={lin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-violet text-3xl hover:text-white transition-colors duration-50" />
          </a>
        </div>
      )}
    </a>
  );
};


