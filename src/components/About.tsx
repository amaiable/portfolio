import { DividerWithLeftTitle } from './common';

function About() {
  return (
    <section id="about" className="flex flex-col items-center pt-16 text-black">
      <div className="font-bold">
        Hi! I'm Alex and I'm a software engineer. Welcome to my corner of the
        internet!
      </div>

      <DividerWithLeftTitle title="About" />

      <div>
        Hi! My name is Alex, but some of my friends call me Mai. I enjoy all
        things software engineering - full stack, game development, and anything
        else in the domain. I also love solving challenging problems in my day
        to day life.
      </div>
    </section>
  );
}

export default About;
