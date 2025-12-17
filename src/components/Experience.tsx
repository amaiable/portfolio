import { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa6';
import { DividerWithLeftTitle } from './common';
import { Card } from './ui/card';

const workExperienceItems = [
  {
    title: 'Example Company',
    description: 'Software Engineer',
    timePeriod: '2020 - Present',
    bulletedItems: ['Bulleted item 1', 'Bulleted item 2', 'Bulleted item 3'],
    logoLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
  {
    title: 'Another Company',
    description: 'Software Engineer',
    timePeriod: '2018 - 2020',
    bulletedItems: ['Bulleted item A', 'Bulleted item B', 'Bulleted item C'],
    logoLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
];

const educationExperienceItems = [
  {
    title: 'Example University',
    description: 'Bachelor of Example',
    timePeriod: '2014 - 2018',
    bulletedItems: ['WAM - 90', 'GPA - 3.7'],
    logoLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
];

const otherExperienceItems = [
  {
    title: 'Example Program',
    description: 'Example certificate program',
    timePeriod: '2014 - 2015',
    bulletedItems: ['Example other description'],
    logoLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
];

function Experience() {
  const [selectedSection, setSelectedSection] = useState(workExperienceItems);

  return (
    <section
      id="experience"
      className="flex flex-col items-center pt-16 text-black"
    >
      <DividerWithLeftTitle title="Experience" />

      <div className="flex justify-center gap-4">
        <Card
          className="w-20"
          onClick={() => setSelectedSection(workExperienceItems)}
        >
          Work
        </Card>
        <Card
          className="w-20"
          onClick={() => setSelectedSection(educationExperienceItems)}
        >
          Education
        </Card>
        <Card
          className="w-20"
          onClick={() => setSelectedSection(otherExperienceItems)}
        >
          Other
        </Card>
      </div>

      {selectedSection.map((item, index) => (
        <Card key={index} className="m-4 w-3/5">
          <div className="px-4">
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-4">
                <img src={item.logoLink} className="h-12 w-12" />
                <div className="flex flex-col gap-1">
                  <div className="text-left">{item.title}</div>
                  <div className="text-left">{item.description}</div>
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
                  <FaArrowRight />
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
