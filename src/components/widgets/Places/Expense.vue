<template>
  <main class="flex-1 bg-transparent overflow-y-auto">
    <div class="flex justify-between pt-1 ml-1 text-white">
      <h3 class="text-lg font-bold border-b border-yellow-500">
        All Place Data
      </h3>
      <svg
        class="h-4 fill-current text-gray-300 dark:text-gray-500 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"
        />
      </svg>
    </div>

    <div
      class="
        px-5
        py-5
        text-gray-300
        dark:text-gray-500
        transition
        duration-500
        ease-in-out
      "
    >
      <div
        class="
          mt-1
          mb-4
          flex flex-col
          md:flex-row
          items-start
          md:items-center
          justify-evenly
          md:justify-between
        "
      >
        <!-- TOTAL PLACE -->

        <span class="text-sm my-3 md:my-0">
          Total Place List :
          <strong>2631</strong>
        </span>

        <!-- SEARCH PLACE -->

        <div class="flex items-center select-none">
          <span class="hover:text-yellow-500 cursor-pointer mr-3">
            <svg viewBox="0 0 512 512" class="h-5 w-5 fill-current">
              <path
                d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </span>

          <input
            class="bg-transparent focus:outline-none"
            placeholder="Search Place..."
          />
        </div>

        <!-- EXPORTS -->

        <button
          class="
            my-4
            md:my-0
            flex
            items-center
            focus:outline-none
            border
            rounded-full
            py-2
            px-4
            leading-none
            border-gray-500
            select-none
            hover:text-yellow-600 hover:bg-yellow-300
          "
        >
          <svg class="h-5 w-5 fill-current mr-1" viewBox="0 0 24 24">
            <path
              d="M12 1L8 5h3v9h2V5h3m2 18H6a2 2 0 01-2-2V9a2 2 0
							012-2h3v2H6v12h12V9h-3V7h3a2 2 0 012 2v12a2 2 0 01-2
							2z"
            ></path>
          </svg>
          <span>Export</span>
        </button>

        <!-- FILTER -->

        <div class="flex items-center select-none my-1 md:my-0">
          <span>Filter</span>
          <button
            class="
              ml-3
              bg-gray-400
              dark:bg-gray-600 dark:text-gray-400
              rounded-full
              p-1
              focus:outline-none
              hover:text-yellow-500 hover:bg-yellow-300
              transition
              duration-500
              ease-in-out
            "
          >
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0
								01-1.41 0l-2.01-2.01a.989.989 0
								01-.29-.83V12h-.03L4.21 4.62a1 1 0
								01.17-1.4c.19-.14.4-.22.62-.22h14c.22 0
								.43.08.62.22a1 1 0 01.17 1.4L14.03 12H14z"
              ></path>
            </svg>
          </button>
          <button
            class="
              ml-2
              bg-gray-400
              dark:bg-gray-600 dark:text-gray-400
              rounded-full
              p-1
              focus:outline-none
              hover:text-yellow-500 hover:bg-yellow-300
              transition
              duration-500
              ease-in-out
            "
          >
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
              ></path>
            </svg>
          </button>
          <button
            class="
              ml-2
              bg-gray-400
              dark:bg-gray-600 dark:text-gray-400
              rounded-full
              p-1
              focus:outline-none
              hover:text-yellow-500 hover:bg-yellow-300
              transition
              duration-500
              ease-in-out
            "
          >
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4
								4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21
								3.58-4 8-4z"
              ></path>
            </svg>
          </button>
        </div>

        <!-- END -->
      </div>

      <div class="border transition duration-500 ease-in-out"></div>
    </div>
  </main>
</template>
