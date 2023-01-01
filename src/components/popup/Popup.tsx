import { useState } from 'react';

const Popup = () => {
  const [isClosed, setIsClosed] = useState<string | null>(
    localStorage.getItem('isDisclaimerClosed'),
  );

  if (isClosed) {
    return null;
  }

  const handleDisclaimerClose = () => {
    localStorage.setItem('isDisclaimerClosed', 'closed');
    setIsClosed('closed');
  };

  return (
    <div className="fixed w-full bg-[rgba(0,0,0,0.8)] md:py-5 md:px-10 py-2 px-6  bottom-0 z-20 uppercase flex flex-col gap-2">
      <p>Disclaimer:</p>
      <p>
        This website was recreated as a web-dev exercise, the creator and
        original website are listed below:
      </p>
      <ul className="flex md:flex-row flex-col gap-4">
        <li>
          <a
            href="https://francoisxaviermanceau.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover-link"
          >
            - Creator/Designer • Francois-Xavier Manceau
          </a>
        </li>
        <li>
          <a
            href="https://raphaelbourdin.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover-link"
          >
            - Original website • RAPHAËL BOURDIN
          </a>
        </li>
      </ul>
      <button
        className="uppercase hover-link text-left font-bold"
        onClick={handleDisclaimerClose}
      >
        Close
      </button>
    </div>
  );
};

export default Popup;
