<template>
  <div id="register">
    <div class="title">Registration Form</div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsueJ6nfxvAJhhc6wQNSHkF0Hw401-j8hHzhs21l5NsgkarQ/viewform?embedded=true"
            class="form">
      Loading...
    </iframe>
  </div>
</template>

<script>

export default {
  name: "RegistrationPage"
};
</script>

<style>
#register {
  background: white;
  min-height: 80vh;
  padding: 10vh 0;
}

.title {
  margin: auto;
  width: fit-content;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap; 
}

.form {
  display: block;
  margin: auto;
  border: none;
  width: 80%;
  height: fit-content;
  min-height: 80vh;
}

@media only screen and (max-width: 700px) {
  .form {
    width: 100%;
  }
}
</style>
