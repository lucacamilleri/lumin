<template>
  <div class="mt-10 w-3/4 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      Booking Applications
    </h2>

    <div class="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-100 dark:bg-gray-700">
          <tr class="*:font-semibold *:text-gray-900 dark:*:text-gray-100">
            <th class="px-4 py-3 text-left">Name</th>
            <th class="px-4 py-3 text-left">Email</th>
            <th class="px-4 py-3 text-left">Date</th>
            <th class="px-4 py-3 text-left">Service</th>
            <th class="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr
            v-for="(b, index) in bookings"
            :key="index"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
              {{ b.name }}
            </td>
            <td class="px-4 py-3 text-gray-800 dark:text-gray-200">
              {{ b.email }}
            </td>
            <td class="px-4 py-3 text-gray-800 dark:text-gray-200">
              {{ b.date }}
            </td>
            <td class="px-4 py-3 text-gray-800 dark:text-gray-200">
              {{ b.service }}
            </td>
            <td class="px-4 py-3 text-center">
              <button
                @click="$emit('delete-booking', index)"
                class="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-md transition"
              >
                Delete
              </button>
            </td>
          </tr>

          <tr v-if="bookings.length === 0">
            <td
              colspan="5"
              class="text-center text-gray-500 dark:text-gray-400 p-6 italic"
            >
              No booking applications yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bookings: Array
})
</script>
