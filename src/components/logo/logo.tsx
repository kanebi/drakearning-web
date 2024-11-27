import logo from '@assets/images/icon.png'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <a href="/">
        <Image  
          alt="Drak logo"
          width={100}
          height={107}
          src={logo}
        />
      </a>
    </div>
  );
};
