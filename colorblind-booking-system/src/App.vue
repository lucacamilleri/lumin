<template>
  <nav class="bg-gray-800 text-white p-4 flex space-x-4">
    <RouterLink to="/" class="hover:underline">Home</RouterLink>
    <RouterLink to="/about" class="hover:underline">About</RouterLink>
  </nav>
  <router-view />
</template>
