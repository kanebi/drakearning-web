import { component$ } from "@builder.io/qwik";
import logo from '../../assets/images/icon.png'

export const Logo = component$(() => {
  return (
    <div>
      <a href="/">
        <img
          alt="Drak logo"
          width={100}
        
          height={107}
          src={logo}
        />
      </a>
    </div>
  );
});
