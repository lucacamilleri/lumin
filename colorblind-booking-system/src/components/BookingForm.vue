<template>
  <div
    class=" bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center transition-colors duration-300 px-4"
  >
    <!-- Header + Dark mode toggle -->
    <div class="w-full max-w-md flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold tracking-tight">Booking Form</h1>

    </div>

    <!-- Card -->
    <form
      @submit.prevent="submitBooking"
      class="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-6 space-y-4"
    >
      <!-- Name -->
      <div>
        <label class="block text-sm font-semibold mb-1">Name</label>
        <input
          v-model="booking.name"
          type="text"
          placeholder="Enter your name"
          class="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-semibold mb-1">Email</label>
        <input
          v-model="booking.email"
          type="email"
          placeholder="your@email.com"
          class="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <!-- Date -->
      <div>
        <label class="block text-sm font-semibold mb-1">Date</label>
        <input
          v-model="booking.date"
          type="date"
          min="{{ today }}"
          class="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <!-- Service -->
      <div>
        <label class="block text-sm font-semibold mb-1">Service</label>
        <select
          v-model="booking.service"
          class="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        >
          <option value="" disabled>Select a service</option>
          <option value="Consultation">Consultation</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Therapy">Therapy</option>
        </select>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
      >
        Book Now
      </button>
    </form>

    <!-- Confirmation -->
    <div
      v-if="submitted"
      class="mt-4 p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-center"
    >
      Booking submitted successfully!
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isDark = ref(false)
const submitted = ref(false)

const booking = reactive({
  name: '',
  email: '',
  date: '',
  service: '',
})

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

function submitBooking() {
  console.log('Booking submitted:', booking)
  submitted.value = true
  setTimeout(() => (submitted.value = false), 3000)

  booking.name = ''
  booking.email = ''
  booking.date = ''
  booking.service = ''
}
</script>
