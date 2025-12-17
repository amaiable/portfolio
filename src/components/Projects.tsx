import { DividerWithLeftTitle } from './common';
import { Card } from './ui/card';

const projectItems = [
  {
    projectTitle: 'Sample Project',
    projectDescription: 'This is a sample project description.',
    projectAwards: ['Award 1', 'Award 2'],
    projectLinks: [
      {
        label: 'Example Label 1',
        link: 'https://example.com/',
      },
      {
        label: 'Example Label 2',
        link: 'https://example.com/',
      },
    ],
    projectImageLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
  {
    projectTitle: 'Sample Project',
    projectDescription: 'This is a sample project description.',
    projectAwards: ['Award 1', 'Award 2'],
    projectLinks: [
      {
        label: 'Example Label 1',
        link: 'https://example.com/',
      },
      {
        label: 'Example Label 2',
        link: 'https://example.com/',
      },
    ],
    projectImageLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
  },
];

function Projects() {
  return (
    <section id="projects">
      <DividerWithLeftTitle title="Projects" />

      <div className="flex flex-col items-center">
        {projectItems.map((item, index) => (
          <Card key={index} className="m-4 w-3/5">
            <div className="px-4">
              <div className="flex flex-col gap-1 text-left">
                <img src={item.projectImageLink} />
                <div className="font-bold">{item.projectTitle}</div>
                <div>{item.projectDescription}</div>
                <div className="flex gap-2">
                  {item.projectLinks.map((linkItem, linkIndex) => (
                    <a href={linkItem.link}>
                      <Card
                        key={linkIndex}
                        className="h-12 items-center justify-center px-4 py-2"
                      >
                        {linkItem.label}
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
