// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icons } from "../utils/Icons";

// function HeroSection() {
//   return (
//     <section id="home" className="py-20 px-6 bg-white dark:bg-deepMint-800 text-center text-deepMint-800 dark:text-deepMint-50">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

//         {/* Social Media*/}
//         <div className="flex flex-col gap-4 items-center">
//           <span className="font-semibold">Follow Me</span>
//           <div className="flex gap-4 text-xl text-deepMint-500">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer">
//               <FontAwesomeIcon icon={icons.facebook} className="hover:text-blue-500 transition" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer">
//               <FontAwesomeIcon icon={icons.instagram} className="hover:text-pink-500 transition" />
//             </a>
//             <a href="https://x.com" target="_blank" rel="noreferrer">
//               <FontAwesomeIcon icon={icons.twitterX} className="hover:text-x-black transition" />
//             </a>
//           </div>
//         </div>

//         {/* Personal data*/}
//         <div>
//           <img src="https://i.postimg.cc/3NgvPcZD/home-img.png" alt="Hero" className="w-40 mx-auto mb-4" />
//           <h1 className="text-3xl font-bold">Hi, I'm Mohamed</h1>
//           <h3 className="text-xl">Frontend Developer</h3>
//           <p className="mt-3 text-deepMint-600 dark:text-deepMint-100">
//             I have high level experience in web design, development knowledge and producing quality work.
//           </p>
//           <a href="#about" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-deepMint-500 text-white rounded hover:bg-deepMint-600">
//             <i className="uil uil-user"></i> More About me!
//           </a>
//         </div>
//       </div>

//       {/* Communication information*/}
//       <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
//         {[
//           { icon: "uil-facebook-messenger", title: "Messenger", subtitle: "user.fb123" },
//           { icon: "uil-whatsapp", title: "Whatsapp", subtitle: "999-888-777" },
//           { icon: "uil-envelope-edit", title: "Email", subtitle: "user@gmail.com" },
//         ].map((item, i) => (
//           <div key={i} className="flex items-start gap-4">
//             <i className={`uil ${item.icon} text-2xl text-deepMint-500`} />
//             <div>
//               <h4 className="font-semibold">{item.title}</h4>
//               <span className="text-sm text-deepMint-600 dark:text-deepMint-100">{item.subtitle}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HeroSection

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function HeroSection() {
  return (
    <section
      id="home"
      className="py-20 px-6 bg-white dark:bg-deepMint-900 text-deepMint-800 dark:text-deepMint-50"
    >
      {/* Social Media */}
      <div className="max-w-6xl mx-auto mb-12 flex flex-col items-center">
        <span className="font-semibold mb-2">Follow Me</span>
        <div className="flex gap-4 text-xl text-deepMint-500">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icons.facebook} className="hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icons.instagram} className="hover:text-pink-500 transition" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icons.twitterX} className="hover:text-black transition" />
          </a>
        </div>
      </div>

      {/* Content + Image */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Textual Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Mohamed</h1>
          <h3 className="text-xl mb-3">Frontend Developer</h3>
          <p className="text-deepMint-600 dark:text-deepMint-100 mb-6">
            I have high level experience in web design, development knowledge and producing quality work.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-4 py-2 bg-deepMint-500 text-white rounded hover:bg-deepMint-600"
          >
            <i className="uil uil-user"></i> More About me!
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/3NgvPcZD/home-img.png"
            alt="Hero"
            className="w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>

      {/* Communication Cards */}
      <div className="mt-20 grid md:grid-cols-3 gap-6 text-left">
        {[
          { icon: "uil-facebook-messenger", title: "Messenger", subtitle: "user.fb123" },
          { icon: "uil-whatsapp", title: "Whatsapp", subtitle: "999-888-777" },
          { icon: "uil-envelope-edit", title: "Email", subtitle: "user@gmail.com" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-deepMint-100 dark:bg-deepMint-900 p-4 rounded-md shadow-md"
          >
            <i className={`uil ${item.icon} text-2xl text-deepMint-500`} />
            <div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <span className="text-sm text-deepMint-600 dark:text-deepMint-100">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
