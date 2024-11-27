import Link from 'next/link';
import logo from '../../assets/images/icon.png'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image  
          alt="Drak logo"
          width={150}
          height={150}
          src={logo}
        />
      </Link>
    </div>
  );
};
