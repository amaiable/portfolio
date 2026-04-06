import { useState } from 'react';

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

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
        <Card
          className="w-32 py-2 flex items-center justify-center cursor-pointer hover:bg-zinc-50 transition-colors"
          onClick={() => setSelectedSection(workExperienceItems)}
        >
          Work
        </Card>
        <Card
          className="w-32 py-2 flex items-center justify-center cursor-pointer hover:bg-zinc-50 transition-colors"
          onClick={() => setSelectedSection(educationExperienceItems)}
        >
          Education
        </Card>
        <Card
          className="w-32 py-2 flex items-center justify-center cursor-pointer hover:bg-zinc-50 transition-colors"
          onClick={() => setSelectedSection(otherExperienceItems)}
        >
          Other
        </Card>
      </div>

      {selectedSection.map((item, index) => (
        <Card key={index} className="my-4 w-full md:w-4/5 lg:w-3/5 p-0 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div className="flex items-center gap-4">
                <img src={item.logoLink} className="h-12 w-12 object-contain shrink-0" />
                <div className="flex flex-col gap-0.5 mt-0.5 sm:mt-0">
                  <div className="text-left font-bold text-zinc-900 text-lg">{item.title}</div>
                  <div className="text-left font-medium text-zinc-600">{item.description}</div>
                </div>
              </div>
              <div className="align-text-top text-zinc-400 font-semibold text-sm mt-1 sm:mt-0 px-2 sm:px-0 py-1 sm:py-0 bg-zinc-50 sm:bg-transparent rounded sm:rounded-none">{item.timePeriod}</div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {item.bulletedItems.map((bulletText, bulletIndex) => (
                <div
                  key={bulletIndex}
                  className="flex items-start gap-3 text-left group"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-300 shrink-0 mt-2 group-hover:bg-zinc-500 transition-colors" />
                  <span className="text-zinc-600 leading-relaxed text-sm sm:text-base">{bulletText}</span>
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
