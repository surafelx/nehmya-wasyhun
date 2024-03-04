import PageTransition from './PageTransition';
import Winter from '../assets/winter.webp';
import ArrowBottom from '../assets/arrow-bottom.svg';
import { Footer } from '../components';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const references = [
    { label: 'LABOUTIN', value: 'RIMOWA' },
    { label: 'STINK PARIS', value: 'Ocurens' },
    { label: 'Gang life', value: 'fledge tv' },
    { label: 'PELICAN', value: 'TRACKX' },
    { label: 'HERMES', value: 'NEW LIGHT FILMS' },
  ];

  return (
    <PageTransition className=" px-4 py-4 text-black">
      <Helmet>
        <title>NEHMEYA WASYHUN - About</title>
      </Helmet>
      <section className="h-[96vh] relative">
        <div className="flex gap-4">
         

          <img
            src={'images/about/about2.JPG'}
                   className="rounded-xl md:w-full md:max-h-[75vh] h-[75vh] object-cover hover-image"
          />
           <img
            src={'images/about/about1.JPG'}
                   className="rounded-xl md:w-full md:max-h-[75vh] h-[75vh] object-cover hover-image"
          />
          <img
            src={'images/about/about3.JPG'}
                   className="rounded-xl md:w-full md:max-h-[75vh] h-[75vh] object-cover hover-image"
          />
        </div>
        <div className="absolute w-full h-full top-0 lg:p-12 md:p-8 p-4 flex flex-row text-white mix-blend-difference items-end justify-between">
          <h1 className="md:text-7xl text-black text-5xl">NEHMEYA WASYHUN</h1>
          <a href="#me">
            <img src={ArrowBottom} className="scale-[2] hover-link" />
          </a>
        </div>
      </section>
      <section
        id="me"
        className="px-4 md:py-28 py-14 md:text-3xl text-xl about-section flex flex-col gap-14 uppercase"
      >
        <div className="flex">
          <p className="md:w-1/2">
            NEHEMYA WASYHUN IS AN ETHIOPIAN VISUAL ARTIST BASED IN ADDIS ABABA.
          </p>
        </div>
        <div className="flex justify-end">
          <p className="md:w-1/2">
            INTERESTED MAINLY IN NARRATIVE WORK, HIS PROJECTS INCLUDE
            COMMERCIALS FOR INFLUENCERS, MUSIC VIDEOS FOR REKNOWN AND EMERGING
            ARTISTS AND EVENT MEDIA FOR THE TOP EVENTS IN ADDIS.
          </p>
        </div>
      </section>
      {/* <section className="uppercase about-section">
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
      </section> */}
      <section className="md:px-14 px-3 pt-20 pb-5">
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
      <Footer />
    </PageTransition>
  );
};

export default AboutPage;
