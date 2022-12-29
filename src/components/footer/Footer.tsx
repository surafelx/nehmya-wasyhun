const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col justify-between md:px-8 px-6 pt-14 pb-6 uppercase mix-blend-difference">
      <span>Copyright © 2022 RAPHAËL BOURDIN</span>
      <div className="flex flex-col">
        <a
          href="https://francoisxaviermanceau.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover-link"
        >
          Website by FRANÇOIS-XAVIER MANCEAU
        </a>
        <a
          href="https://filippapiernik.pl/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover-link"
        >
          Recreated by Filip Papiernik
        </a>
      </div>
    </footer>
  );
};

export default Footer;
