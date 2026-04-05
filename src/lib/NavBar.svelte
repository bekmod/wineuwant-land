<script>
  import menuIcon from '../assets/menu.svg';
  import Logo from '../lib/Logo.svelte';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/spektra' },
    { name: 'Contact us', href: '/mvp' },
  ];
</script>

<div class="container relative z-10 flex justify-between align-center mx-auto py-4 px-8">
  <div class="flex align-center justify-start my-auto gap-2 flex-1">
    <img src={menuIcon} alt="menu" />
    <p class="h-full text-base font-medium text-menu-grey-400">MENU</p>
  </div>

  <Logo />

  <div class="flex align-center justify-end flex-1 my-auto">
    <button
      aria-label="Contact us"
      class="group bg-white shadow-lg hover:shadow-xl cursor-pointer transition duration-300 ease-in-out h-16 w-16 rounded-full flex items-center justify-center text-menu-grey-400 hover:text-burgundy-500"
    >
      <svg
        class="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</div>
