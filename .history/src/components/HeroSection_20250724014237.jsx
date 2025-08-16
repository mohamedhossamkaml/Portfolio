import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function HeroSection() {
  return (
    <section id="home" className="py-20 px-6 bg-white dark:bg-deepMint-800 text-center text-deepMint-800 dark:text-deepMint-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Social Media*/}
        <div className="flex flex-col gap-4 items-center">
          <span className="font-semibold">Follow Me</span>
          <div className="flex gap-4 text-xl text-deepMint-500">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icons.facebook} className="hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icons.instagram} className="hover:text-pink-500 transition" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icons.twitterX} className="hover:text-x-black transition" />
            </a>
          </div>
        </div>

        {/* بيانات الشخصية */}
        <div>
          <img src="https://i.postimg.cc/3NgvPcZD/home-img.png" alt="Hero" className="w-40 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Hi, I'm Mohamed</h1>
          <h3 className="text-xl">Frontend Developer</h3>
          <p className="mt-3 text-deepMint-600 dark:text-deepMint-100">
            I have high level experience in web design, development knowledge and producing quality work.
          </p>
          <a href="#about" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-deepMint-500 text-white rounded hover:bg-deepMint-600">
            <i className="uil uil-user"></i> More About me!
          </a>
        </div>
      </div>

      {/* معلومات التواصل */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
        {[
          { icon: "uil-facebook-messenger", title: "Messenger", subtitle: "user.fb123" },
          { icon: "uil-whatsapp", title: "Whatsapp", subtitle: "999-888-777" },
          { icon: "uil-envelope-edit", title: "Email", subtitle: "user@gmail.com" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <i className={`uil ${item.icon} text-2xl text-deepMint-500`} />
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <span className="text-sm text-deepMint-600 dark:text-deepMint-100">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection