<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      message: "Hello from Vue"
    }
  }
}
</script>