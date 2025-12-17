import { ArrowBigRightDash } from 'lucide-react';
import { DividerWithLeftTitle } from './common';
import { Card } from './ui/card';

const experienceItems = [
  {
    company: 'Example Company',
    role: 'Software Engineer',
    timePeriod: '2020 - Present',
    bulletedItems: ['Bulleted item 1', 'Bulleted item 2', 'Bulleted item 3'],
    logoLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
  {
    company: 'Another Company',
    role: 'Software Engineer',
    timePeriod: '2018 - 2020',
    bulletedItems: ['Bulleted item A', 'Bulleted item B', 'Bulleted item C'],
    logoLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
];

function Experience() {
  return (
    <section id="experience" className="pt-16 text-black">
      <DividerWithLeftTitle title="Experience" />

      {experienceItems.map((item, index) => (
        <Card key={index} className="m-4">
          <div className="px-4">
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-4">
                <img src={item.logoLink} className="h-12 w-12" />
                <div className="flex flex-col gap-1">
                  <div className="text-left">{item.company}</div>
                  <div className="text-left">{item.role}</div>
                </div>
              </div>
              <div className="align-text-top">{item.timePeriod}</div>
            </div>

            <div className="mt-4">
              {item.bulletedItems.map((bulletText, bulletIndex) => (
                <div
                  key={bulletIndex}
                  className="flex items-center gap-2 text-left"
                >
                  <ArrowBigRightDash />
                  {bulletText}
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}

export default Experience;
