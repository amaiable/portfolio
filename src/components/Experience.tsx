import { DividerWithLeftTitle } from './common';
import { Card, CardTitle, CardContent } from './ui/card';

const experienceItems = [
  {
    company: 'Example Company',
    role: 'Software Engineer',
    duration: '2020 - Present',
    bulletedItems: ['Bulleted item 1', 'Bulleted item 2', 'Bulleted item 3'],
    logoLink: '#',
  },
  {
    company: 'Another Company',
    role: 'Software Engineer',
    duration: '2018 - 2020',
    bulletedItems: ['Bulleted item A', 'Bulleted item B', 'Bulleted item C'],
    logoLink: '#',
  },
];

function Experience() {
  return (
    <section id="experience" className="pt-16 text-black">
      <DividerWithLeftTitle title="Experience" />

      {experienceItems.map((item, index) => (
        <Card key={index} className="my-4">
          <CardTitle>
            <img src={item.logoLink} alt={`${item.company} logo`} />
            {item.company}
            {item.role}
            {item.duration}
          </CardTitle>
          <CardContent>
            {item.bulletedItems.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

export default Experience;
