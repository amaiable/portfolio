import { DividerWithLeftTitle } from './common';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center">
      <DividerWithLeftTitle title="Contact" />
      <div className="py-8">
        Let's stay in touch!
        <div className="flex justify-center gap-4">
          <a>
            <FaLinkedin size={40} />
          </a>
          <a>
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
