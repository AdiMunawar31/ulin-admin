<template>
  <div class='w-full p-5 max-w-md mx-0 md:mx-auto bg-gray-900 shadow-md rounded-md px-6 py-4 mt-10'>
    <div class='sm:flex sm:justify-between'>
      <div class='flex items-center'>
        <img
          class='h-12 w-12 rounded-full'
          :src='image'
          alt
        />
        <div class='ml-2'>
          <h3 class='text-sm md:text-lg text-gray-300 font-medium'>{{ name }}</h3>
          <span class='text-gray-500 text-xs md:text-sm ml-1'>{{ place }}</span>
        </div>
      </div>

      <div class='mt-2 sm:mt-0'>
        <button class='flex items-center text-white bg-yellow-500 rounded mt-7 md:mt-2 px-4 py-1 hover:bg-yellow-400 focus:outline-none focus:shadow-outline'>
          <span class='text-sm'>
            <i class='fas fa-eye'></i> Visit
          </span>
        </button>
      </div>
    </div>

    <div class='flex justify-between items-center mt-4'>
      <div>
        <h4 class='text-gray-600 text-sm'>Rating</h4>
        <span class='mt-2 text-xl font-medium text-gray-300'>127274</span>
      </div>
      <div>
        <h4 class='text-gray-600 text-sm'>Visited</h4>
        <span class='mt-2 text-xl font-medium text-gray-300'>12171</span>
      </div>
      <div>
        <h4 class='text-gray-600 text-sm'>Reviews</h4>
        <span class='mt-2 text-xl font-medium text-gray-300'>35</span>
      </div>
    </div>
    <div class='mt-3'>
      <h4 class='text-gray-600 text-sm'>User Score</h4>
      <span class='mt-2 text-xl font-medium text-gray-300'>85%</span>
    </div>
    <div class='mt-4'>
      <h4 class='text-sm text-gray-600'>45 Visited</h4>
      <div class='flex items-center overflow-hidden mt-2'>
        <img
          class='inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center'
          src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
          alt
        />
        <img
          class='-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center'
          src='https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          alt
        />
        <img
          class='-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center'
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          alt
        />
        <img
          class='-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center'
          src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
          alt
        />
        <img
          class='-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center'
          src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    place: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>