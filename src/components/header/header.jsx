import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <span> Home</span>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <span> Events</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <span> About us</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  );
};
