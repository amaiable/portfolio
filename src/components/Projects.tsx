import { DividerWithLeftTitle } from './common';

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
    <section id="projects" className="flex flex-col items-center">
      <DividerWithLeftTitle title="Projects" />

      <div className="flex flex-col items-center w-full gap-16 mt-10 pb-16">
        {projectItems.map((item, index) => (
          <div key={index} className="w-full md:w-4/5 lg:w-3/5 group">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Image Lock Container */}
              <div className="w-full md:w-4/12 shrink-0 aspect-square rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <img src={item.projectImageLink} className="w-full h-full object-cover" alt={item.projectTitle} />
              </div>

              {/* Content Formatting Matrix */}
              <div className="w-full md:w-7/12 flex flex-col gap-3 text-left pt-1 sm:pt-2">
                <div className="text-left font-bold text-zinc-900 text-xl">{item.projectTitle}</div>
                <div className="text-left text-zinc-600 font-medium leading-[1.6]">{item.projectDescription}</div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {item.projectLinks.map((linkItem, linkIndex) => (
                    <a key={linkIndex} href={linkItem.link} target="_blank" rel="noreferrer">
                      <span className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-semibold border border-zinc-200 rounded-full hover:bg-zinc-100 transition-colors text-zinc-700 bg-white">
                        {linkItem.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
