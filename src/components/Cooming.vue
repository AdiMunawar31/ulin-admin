<template>
  <div class='flex flex-col py-7 bg-gray-800'>
    <div class='grid place-items-center w-full md:w-4/5 mx-auto p-5 sm:my-auto border-4 border-yellow-500 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        class='h-24 w-24 text-yellow-500 animate-bounce pt-5 -mb-5'
        viewBox='0 0 16 16'
      >
        <path
          d='M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z'
        />
        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z' />
      </svg>

      <h1 class='text-4xl font-bold uppercase text-yellow-500 animate-pulse transition duration-1000'>Coming Soon</h1>
      <h2 class='text-xl text-gray-300'>
        We are almost there to introduce our new
        <a
          class='hover:underline'
          href='https://www.emojimania.org'
        >emoji</a>
        website to the world, in the meantime, you can follow us on social
        networks to get the latest updates.
      </h2>

      <div class='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <a
          href='https://www.facebook.com/QuickToolz'
          title='Quicktoolz On Facebook'
          class='md:w-32 font-bold rounded border-2 border-yellow-500 hover:text-white hover:border-blue-500 hover:bg-blue-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
        >
          <span class='mx-auto text-white'>Facebook</span>
        </a>

        <a
          href='https://twitter.com/quicktoolz'
          title='Quicktoolz On Twitter'
          class='md:w-32 font-bold rounded border-2 border-yellow-500 hover:text-white hover:border-blue-500 hover:bg-blue-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
        >
          <span class='mx-auto text-white'>Twitter</span>
        </a>

        <a
          href='https://pinterest.com/quicktoolz/'
          title='Quicktoolz On Pinterest'
          class='md:w-32 font-bold rounded border-2 border-yellow-500 hover:text-white hover:border-red-500 hover:bg-red-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
        >
          <span class='mx-auto text-white'>Pintrest</span>
        </a>

        <a
          href='https://www.reddit.com/user/quicktoolz/'
          title='Quicktoolz On Facebook'
          class='md:w-32 font-bold rounded border-2 border-yellow-500 hover:text-white hover:border-yellow-500 hover:bg-yellow-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
        >
          <span class='mx-auto text-white'>Reddit</span>
        </a>
      </div>
    </div>
  </div>
</template>
