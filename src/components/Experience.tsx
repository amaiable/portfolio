import { DividerWithLeftTitle } from './common';

// From oldest to most recent
const experienceItems = [
  {
    company: 'Example Company',
    role: 'Software Engineer',
    duration: '2020 - Present',
    bulletedItems: ['Bulleted item 1', 'Bulleted item 2', 'Bulleted item 3'],
  },
  {
    company: 'Another Company',
    role: 'Junior Developer',
    duration: '2018 - 2020',
    bulletedItems: ['Bulleted item A', 'Bulleted item B', 'Bulleted item C'],
  },
];

function Experience() {
  return (
    <section id="experience" className="pt-16 text-black">
      <DividerWithLeftTitle title="Experience" />

      {experienceItems.map((item, index) => (
        <div>{item.company}</div>
      ))}
    </section>
  );
}

export default Experience;
