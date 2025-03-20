import { footerLogo } from '../assets/images';
import { socialMedia, footerLinks } from '../constants';
import { copyrightSign } from '../assets/icons';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex max-lg:flex-col justify-between gap-10 ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img width={100} height={45} src={footerLogo} alt="NIKE" />
          </a>
          <p className="mt-4 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your neares Nike Store . Find
            your perfect size in store . Get rewards
          </p>
          <div className="mt-4 flex items-center gap-5">
            {socialMedia.map((icon, i) => (
              <div
                key={i}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full "
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between ">
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-montserrat text-2xl">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 font-montserrat mt-3 text-base hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex justify-center gap-4">
          <div className="flex items-center">
            <img src={copyrightSign}  width={20} height={20} alt="Copy Right" />
          </div>
          <p>Copyright . All rights reserved .</p>
        </div>
        <div>
            <p>Terms & Conditions </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
