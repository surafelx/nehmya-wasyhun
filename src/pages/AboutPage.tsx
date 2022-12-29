import PageTransition from './PageTransition';
import Winter from '../assets/winter.webp';
import ArrowBottom from '../assets/arrow-bottom.svg';

const AboutPage = () => {
  const references = [
    { label: 'LABOUTIN', value: 'RIMOWA' },
    { label: 'STINK PARIS', value: 'Ocurens' },
    { label: 'Gang life', value: 'fledge tv' },
    { label: 'PELICAN', value: 'TRACKX' },
    { label: 'HERMES', value: 'NEW LIGHT FILMS' },
  ];

  return (
    <PageTransition className=" px-4 py-4 ">
      <section className="h-[96vh] relative">
        <img src={Winter} className="w-full h-full object-cover rounded-xl" />
        <div className="absolute w-full h-full top-0 lg:p-12 md:p-8 p-4 flex flex-row mix-blend-difference items-end justify-between">
          <h1 className="md:text-7xl text-5xl">RAPHAËL BOURDIN</h1>
          <a href="#me">
            <img src={ArrowBottom} className="scale-[2] hover-link" />
          </a>
        </div>
      </section>
      <section
        id="me"
        className="px-4 md:py-28 py-14 text-black md:text-3xl text-xl about-section flex flex-col gap-14 uppercase"
      >
        <div className="flex">
          <p className="md:w-1/2">
            RAPHAEL BOURDIN IS A FRENCH - IRISH DIRECTOR OF PHOTOGRAPHY BASED IN
            PARIS.
          </p>
        </div>
        <div className="flex justify-end">
          <p className="md:w-1/2">
            INTERESTED MAINLY IN NARRATIVE WORK, HIS PROJECTS INCLUDE
            COMMERCIALS FOR DIVERSE LUXURY BRANDS, MUSIC VIDEOS FOR REKNOWN AND
            EMERGING ARTISTS.
          </p>
        </div>
      </section>
      <section className="uppercase about-section text-black">
        <h2 className="md:text-5xl text-3xl mb-8">References</h2>
        <ul className="uppercase">
          {references.map((item) => (
            <li
              key={item.label}
              className="flex md:text-xl  py-4 border-b border-gray-500 md:font-[500]"
            >
              <span className="flex-1 text-left">{item.label}</span>
              <span className="flex-1 text-left">{item.value}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="md:px-14 px-3 pt-20 pb-5 text-black">
        <a
          href="mailto:"
          className="relative flex uppercase md:text-8xl text-5xl"
        >
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(8)].map((value, i) => (
              <span key={i} className="mr-4 hover-link">
                Contact
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            {[...Array(8)].map((value, i) => (
              <span key={i} className="mr-4 hover-link">
                Contact
              </span>
            ))}
          </div>
        </a>
      </section>
    </PageTransition>
  );
};

export default AboutPage;
