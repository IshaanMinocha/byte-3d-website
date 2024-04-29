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
    <div className="p-4 bg-gray-800">
      <p className="text-5xl font-bold text-center tracking-widest font-heading text-green-500 my-10">Our Team</p>
      <div className='mb-16'>
        <h4 className="text-3xl sm:text-4xl tracking-wide mx-auto w-fit bg-slate-950 text-white p-2 border-[2px] border-black font-semibold my-10 rounded-xl">Admins</h4>
        <div className="flex flex-wrap justify-center xl:gap-20 gap-12">
          <Card role="Competitive Admin" name="Ishaan Minocha" Image={"ishu.png"} quote={"codes metaverse in vanilla css"} ig="https://www.instagram.com/ishaantrovert" gh="https://github.com/IshaanMinocha" lin="https://www.linkedin.com/ishaanminocha" />
          <Card role="Research Admin" name="Shivam Kumar Jha" Image={""} quote={"smthn"} ig="" gh="" lin=""/>
          <Card role="Community Admin" name="Abir Thakur" Image={"src/Assets/teambyte/abirpic.png"} quote={"Brewing passion through code and pixels"} ig="https://www.instagram.com/abir_inferno2211/" gh="https://github.com/Inferno2211" lin="https://www.linkedin.com/in/abir-thakur-a83067268/"/>
          <Card role="" name="Aman Sharma" Image={"src/Assets/teambyte/amanphoto.png"} quote=    "Exploring Solver" ig="https://www.instagram.com/exploring_solver/" gh="https://github.com/exploring-solver" lin="https://www.linkedin.com/in/aman-sharma-a37072263/" />
          <Card role="" name="Chanmeet Singh" Image={"src/Assets/teambyte/chanmeetphoto.png"} quote={"smthn"}ig="https://www.instagram.com/singh__chanmeet?igsh=MTJ5MGd0cmlmZGNrNw==" gh="https://github.com/singhchanmeet/" lin="https://www.linkedin.com/in/chanmeet-singh-sahni-504985257/" />
          <Card role="" name="Ansh Kapila" Image={"src/Assets/teambyte/anshpic.png"} quote={"smthn"} ig="" gh="" lin=""/>
          <Card role="" name="Subhasish Panda" Image={""} quote={"smthn"} ig="" gh="" lin=""/>
          <Card role="" name="Haaris Huda" Image={""} quote={"smthn"} ig="" gh="" lin=""/>
          <Card role="" name="Chayan Khetan" Image={""} quote={"smthn"} ig="" gh="" lin=""/>
        </div>
      </div>
      <div className='mb-14'>
        <h4 className="text-3xl sm:text-4xl tracking-wide mx-auto text-center w-fit bg-slate-950 text-white p-2 border-[2px] border-black font-semibold my-10 rounded-xl">Web Department</h4>
        <div className="flex flex-wrap justify-center gap-8">
          <Card role="" name="Adisht Jaglan" Image={"src/Assets/teambyte/adisht.png"} quote={"undefined"} ig="" gh="https://github.com/AdishtJaglan" lin="https://linkedin.com/in/adisht-jaglan-92441b1b8/" />
          <Card role="" name="Garvit" Image={"src/Assets/teambyte/garvitpi.png"} quote={"Devs are from Venus, Ops are from Mars"} ig="https://www.instagram.com/garvit.3835/" gh="https://github.com/garvit3835" lin="https://www.linkedin.com/in/garvit3835"/>
          <Card role="" name="Shivank" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Harshill Aggarwal" Image={"src/Assets/teambyte/harshilpic.png"} quote={"Code with passion, debug with patience."} ig="https://www.instagram.com/harshill_aggarwal/" gh="https://github.com/Harshillagg" lin="https://www.linkedin.com/in/harshill-aggarwal-b90bbb258/"/>
          <Card role="" name="Khushi Minda" Image={"src/Assets/teambyte/khushiphoto.png"} quote={"My hobbies include pushin bugs"} ig="https://www.instagram.com/khushiiiiiieee_?igsh=MWdkdWdkZHc4eGNjZA==" gh="https://github.com/khushiminda" lin="https://www.linkedin.com/in/khushi-minda2004/"/>
          <Card role="" name="Pratham Gupta" Image={"src/Assets/teambyte/prathampic.png"} quote={"print() is the best debugger"} ig="https://www.instagram.com/pratham.gupta.1" gh="https://github.com/PrathamGupta06" lin="https://www.linkedin.com/in/prathamgupta006/"/>
          <Card role="" name="Sagar Jain" Image={"src/Assets/teambyte/sagarpic.png"} quote={"Weaving code into captivating user journeys."} ig="https://www.instagram.com/s_jain17/" gh="https://github.com/sagarjain03" lin="http://www.linkedin.com/in/sagar-jain-a68aa927b"/>
          <Card role="" name="Shrey Garg" Image={"src/Assets/teambyte/shreypic.png"} quote={"Talk is Cheap, show me the CODE"} ig="https://www.instagram.com/_shreygarg_18?igsh=MTM5MThzZ2huZ3R0ag==" gh="https://github.com/Shrey1803" lin="https://www.linkedin.com/in/shrey-garg-016833276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
        </div>
      </div>
      <div className='mb-14'>
        <h4 className="text-3xl sm:text-4xl tracking-wide mx-auto w-fit bg-slate-950 text-white p-2 border-[2px] border-black font-semibold my-10 rounded-xl">App Department</h4>
        <div className="flex flex-wrap justify-center gap-8">
          <Card role="" name="Ravi Banchhiwal" Image={"src/Assets/teambyte/ravi photo.png"} quote={"smthn"} ig="https://www.instagram.com/i.ravizz?igsh=MWl6azNhYnd5dmN5OQ==" gh="https://github.com/ivar03" lin="https://www.linkedin.com/in/ravi-banchhiwal-505b3a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
          <Card role="" name="Chinmay Nandawat" Image={"src/Assets/teambyte/chinmaypic.png"} quote={"If at first, you don't succeed, call it version 1.0."}  ig="https://www.instagram.com/smittykitty04?igsh=MWZ0N3BvZ21vMWQ3MA==" gh="https://github.com/Smitty-Kitty" lin="https://www.linkedin.com/in/chinmay-n-0a4aa4300/" />
        </div>
      </div>
      <div className='mb-14'>
        <h4 className="text-3xl sm:text-4xl tracking-wide mx-auto w-fit bg-slate-950 text-white p-2 border-[2px] border-black font-semibold my-10 rounded-xl">ML Department</h4>
        <div className="flex flex-wrap justify-center gap-8">
          <Card role="" name="Piyush Mittal" Image={"src/Assets/teambyte/piyushpic.png"} quote={"A Nomad, exploring everything"} ig="https://github.com/Piyush-io" gh="https://github.com/Piyush-io" lin="https://www.linkedin.com/in/piyush-mittal-hi/" />
          <Card role="" name="Ujwal Gupta" Image={""} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Chayan Mann" Image={"src/Assets/teambyte/chayanmannpic.png"} quote={"Wait till I get my money right"} ig="https://www.instagram.com/chayan_mann/" gh="https://github.com/chayan-mann" lin="https://www.linkedin.com/in/chayan-mann" />
          <Card role="" name="Anushka Singh" Image={"src/Assets/teambyte/anushkapic.jpeg"} quote={"Passion fuels code, solving ignites purpose"} ig="" gh="https://github.com/Anushka1515" lin="https://www.linkedin.com/in/anushka-singh-aa2695293/" />
          <Card role="" name="Shivam Gupta" Image={"src/Assets/teambyte/shivamguptapic.png"} quote={"smthn"} ig="" gh="" lin="" />
          <Card role="" name="Nalin Khanna" Image={"src/Assets/teambyte/nalinpic.png"} quote={"the world is one big data problem"} ig="https://www.instagram.com/nalin__khanna?igsh=cjdmY3A1bzBobndj" gh="" lin="https://www.linkedin.com/in/nalin-khanna-877a99246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
          <Card role="" name="Shorya" Image={"src/Assets/teambyte/shoryaphoto.png"} quote={"smthn"} ig="https://www.instagram.com/shourya_roy03/" gh="https://github.com/shourya03roy/" lin="https://www.linkedin.com/in/shourya-roy-b7446b230/" />
        </div>
      </div>
      <div className='mb-14'>
        <h4 className="text-3xl sm:text-4xl tracking-wide mx-auto w-fit bg-slate-950 text-white p-2 border-[2px] border-black font-semibold my-10 rounded-xl">Iot Department </h4>
        <div className="flex flex-wrap justify-center gap-8">
          <Card role="" name="Arnav Chopra" Image={"src/Assets/teambyte/arnavpic.png"} quote={"Exploiting Boundaries."} ig="https://www.instagram.com/silentarnav_1290" gh="https://www.github.com/silentarnav1290" lin="https://www.linkedin.com/in/arnav-chopra-72353a2a2" />
          <Card role="" name="Kamaruchi Rachit Kumar" Image={"src/Assets/teambyte/krkpic.png"} quote={"Lost in lines of code, finding order in chaos."} ig="https://www.instagram.com/rachittt._04/" gh="https://github.com/Krachitkumar" lin="https://www.linkedin.com/in/kamarushi-rachit-kumar-748991188" />
          <Card role="" name="Tanush Panwar" Image={"src/Assets/teambyte/tanushpic.png"} quote={"In the digital forest, where syntax prowls and algorithms howl, the Sanskari whispers elegance, while the Wolf roars with wild wisdom. Together, they code a symphony of integrity."} ig="https://www.instagram.com/sanskari_wolf/" gh="https://github.com/SanskariWolf/" lin="https://www.linkedin.com/in/tanushpurwar/" />
          <Card role="" name="Ashish Negi" Image={""} quote={"smthn"} ig="" gh="" lin="" />
        </div>
      </div>
      <div className='mb-14'>
        <h4 className="text-3xl sm:text-4xl tracking-wide mx-auto w-fit bg-slate-950 text-white p-2 border-[2px] border-black font-semibold my-10 rounded-xl">CP Department</h4>
        <div className="flex flex-wrap justify-center gap-8">
          <Card role="" name="Ansh Jain" Image={"src/Assets/teambyte/anshjainpic.png"} quote={"Jainwin"} ig="https://www.instagram.com/who.anshjain/" gh="https://github.com/AnshJain9159" lin="https://www.linkedin.com/in/ansh-jain-78986b242" />
          <Card role="" name="Abhinav Gupta" Image={"src/Assets/teambyte/abhinavpic.png"} quote={"Error not found"} ig="https://www.instagram.com/er_abhinav_guptaa?igsh=MTRvb3M3dDg1NHg3eA==" gh="https://github.com/abhinav2805-ux" lin="https://www.linkedin.com/in/abhinav-gupta-b3317128a/" />
          <Card role="" name="Ashwin Bansal" Image={"src/Assets/teambyte/ashwinpic.png"} quote={"Passion drives perfection Github"} ig="https://www.instagram.com/ashwin_ab_19?igsh=NGs2Z3E0b2QyaDE=" gh="https://github.com/Ashwin1902" lin="https://www.linkedin.com/in/ashwin-bansal-5b5a70257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
          <Card role="" name="Rishi Agarwal" Image={""} quote={"smthn"} ig="" gh="" lin="" />
        </div>
      </div>
      <div className='mb-14'>
        <h4 className="text-3xl sm:text-4xl tracking-wide mx-auto w-fit bg-slate-950 text-white p-2 border-[2px] border-black font-semibold my-10 rounded-xl">UI/UX Department</h4>
        <div className="flex flex-wrap justify-center gap-8">
          <Card role="" name="Mayank Bhatia" Image={"src/Assets/teambyte/mayankpic.png"} quote={"Crafting digital journeys with purpose"} ig="https://www.instagram.com/mayank_bh01/" gh="https://github.com/mayankk-prog" lin="https://www.linkedin.com/in/mayank-bhatia-714289250/" />
          <Card role="" name="Anisha Dua" Image={"src/Assets/teambyte/anishapic.png"} quote={"coding bridges imagination to reality "} ig="https://www.instagram.com/an_isha4551?igsh=a3V1NWc5OHdwZGZ3" gh="" lin="https://www.linkedin.com/in/anisha-dua-894555272" />
          <Card role="" name="Pranjal Chopra" Image={"src/Assets/teambyte/pranjalpic.png"} quote={"Believe you can and you're halfway there"} ig="https://www.instagram.com/_pranjalchopra_?igsh=N3Y1MTFoNDNmbTA4&utm_source=qr" gh=" https://github.com/pranjal-chopra" lin="https://www.linkedin.com/in/pranjal-chopra-126805294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Br6vIZKb6QiK9RJtL2rZEtQ%3D%3D" />
          <Card role="" name="Vipul Kohli" Image={"src/Assets/teambyte/vipulpic.png"} quote={"Code is like humor. When you have to explain it, it's bad"} ig="https://www.linkedin.com/in/vipul-kohli-31bb3921b" gh="https://github.com/Aisekaisee/Vipul24.git" lin="" />
          <Card role="" name="Swasti" Image={"src/Assets/teambyte/swastiimage.png"} quote={"Turning 'It works' into 'It's magical!"} ig="https://www.instagram.com/_callme.shru?igsh=MTZzeXlkeHVvOHJ5dw==" gh="https://github.com/swasti-jain19" lin="http://www.linkedin.com/in/swasti-jain-381907285" />
          <Card role="" name="Vidhi Gupta" Image={"src/Assets/teambyte/vidhipic.png"} quote={"Talk is boring, show me the code"} ig=" https://www.instagram.com/vidhi.gupta.30?igsh=MWQ3ZmNuc2dsbjl6eg%3D%3D&utm_source=qr" gh="https://github.com/vidhi-gupta45" lin=" www.linkedin.com/in/vidhi-gupta-661b42292" />
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
    <a className="xl:w-80 xl:p-4 p-3 xl:h-80 w-60 h-60 rounded-3xl hover:scale-105 relative overflow-hidden group bg-white"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <div className="absolute inset-0 bg-green-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <img className="non-draggable absolute z-10 xl:-top-20 xl:-right-20 -top-10 -right-12 text-7xl text-slate-100 group-hover:rotate-12 transition-transform duration-300" src={Image} alt="1" />
      <p className="mb-2 text-2xl text-dark font-subhead group-hover:text-white transition-colors relative z-10 duration-300">{name}</p>
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">{role}</h3>
      <p className={"text-dark font-semibold xl:text-xl text-lg z-10 duration-300 absolute bottom-12"}>
        {quote}
      </p>
      {showIcons && (
        <div className="absolute bottom-4 left-4 flex gap-4 z-10">
          <a href={gh} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-dark text-3xl hover:text-white transition-colors duration-50" />
          </a>
          <a href={ig} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-dark text-3xl hover:text-white transition-colors duration-50" />
          </a>
          <a href={lin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-dark text-3xl hover:text-white transition-colors duration-50" />
          </a>
        </div>
      )}
    </a>
  );
};


