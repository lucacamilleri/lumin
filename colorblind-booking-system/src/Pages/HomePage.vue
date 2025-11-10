<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 transition-colors duration-300">


    <BookingForm @add-booking="addBooking" />
    <BookingList :bookings="bookings" @delete-booking="deleteBooking" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BookingForm from '../components/BookingForm.vue'
import BookingList from '../components/BookingList.vue'

const bookings = ref([])

function addBooking(newBooking) {
  bookings.value.push(newBooking)
}

function deleteBooking(index) {
  bookings.value.splice(index, 1)
}
</script>
