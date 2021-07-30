<template>
  <div class='flex justify-center pb-10 pt-10 md:pt-0'>
    <div class='overflow-auto lg:overflow-visible'>
      <table class='table text-gray-400 border-separate space-y-6 text-sm'>
        <thead class='bg-yellow-500 text-gray-200'>
          <tr>
            <th class='p-3 px-12'>Name</th>
            <th class='p-3 px-12'>Manager</th>
            <th class='p-3 px-12'>Open Day</th>
            <th class='p-3 px-12'>Open Time</th>
            <th class='p-3 px-12'>Ticket</th>
            <th class='p-3 px-12'>Vehicle</th>
          </tr>
        </thead>
        <tbody>
          <tr class='bg-gray-900 text-white'>
            <td class='p-5 text-center font-bold'>{{ name }}</td>
            <td class='p-5 text-center'>{{ manager }}</td>
            <td class='p-5 text-center'>{{ openDay }}</td>
            <td class='p-5 text-center'>{{ openTime }}</td>
            <td class='p-5 text-center'>Rp.{{ Intl.NumberFormat(["ban", "id"]).format(ticket) }}</td>
            <td class='p-5 text-center'>{{ vehicle }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    manager: {
      type: String,
      default: "",
    },
    openDay: {
      type: String,
      default: "",
    },
    openTime: {
      type: String,
      default: "",
    },
    ticket: {
      type: Number,
      default: 0,
    },
    vehicle: {
      type: String,
      default: "",
    },
  },
};
</script>
