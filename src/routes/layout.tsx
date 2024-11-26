import { component$, Slot, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Logo } from '../components/logo/logo'; // Assuming Icon component is defined elsewhere

export default component$(() => {
  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Terms & Conditions', path: '/terms' },
    { text: 'Privacy Policy', path: '/policy' },
    { text: 'About Us', path: '/about' },
    { text: 'FAQ', path: '/faq' },
  ];

  const store = useStore({
    mobileMenuOpen: false,
  });

  return (
    <div class="flex flex-col align-middle content-center  ">
      {/* Responsive App Bar */}
      <nav class=" bg-white shadow-lg " style={{width:'inherit'}}>
        <div class="flex justify-between items-center py-4 px-6">
          <div class=''><Logo /></div>
          <div class="hidden md:flex md:space-x-4">
            <ul class="flex gap-5">
              {menuItems.map((item) => (
                <li key={item.text} class="hover:bg-gray-100">
                  <Link href={item.path} class="text-gray-700 text-lg">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div class="md:hidden ">
            <button class="text-gray-700 text-lg  " onClick$={() => store.mobileMenuOpen = !store.mobileMenuOpen}>
              {store.mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
            <ul class={`mobile-menu mt-7 absolute top-15 left-0 w-full bg-white shadow-lg py-4 px-6 ${store.mobileMenuOpen ? 'block' : 'hidden'}`}>
              {menuItems.map((item) => (
                <li key={item.text} class="hover:bg-gray-100 my-4">
                  <Link href={item.path}  class="text-gray-700 text-lg p-4 text-md my-2 cursor-pointer " style={{height:'inherit', width:'inherit'}}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main class="flex-grow p-6">
        <Slot />
      </main>
    </div>
  );
});