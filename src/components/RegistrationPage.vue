<template>
  <div id="register">
    <form
      class="form"
      method="post"
      action="https://script.google.com/macros/s/AKfycbybm4JNQcwQJNuwnjiIfJzFBv3Uxizj1zrbGqtDuUrmZf3FPmVn/exec"
    >
      <label class="label" for="Name">Name</label>
      <input class="field" type="text" name="Name" required />
      <br />
      <label class="label" for="Email">Email</label>
      <input class="field" type="text" name="Email" required />
      <br />
      <label class="label" for="Phone">Phone</label>
      <input class="field" type="text" name="Phone" required />
      <br />
      <label class="label" for="College">College</label>
      <input class="field" type="text" name="College" required />
      <br />
      <label class="label" for="Department">Department</label>
      <select class="field" name="Department" required>
        <option disabled>Select Department</option>
        <option>B.Tech. IT</option>
        <option>B.E. CSE</option>
        <option>M.E.</option>
        <option>B.C.A/M.C.A</option>
        <option>Others</option>
      </select>
      <br />
      <label class="label" for="Person Count">Person Count</label>
      <input class="field" type="text" name="Person Count" required />
      <br />
      <label class="label" for="Food Preference">Food Preference</label>
      <select class="field" name="Food Preference" required>
        <option disabled>Veg./Non Veg.</option>
        <option>Veg</option>
        <option>Non Veg</option>
      </select>
      <br />
      <input class="register-button" type="submit" value="Register" />
    </form>
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

.form {
  display: block;
  margin: auto;
  width: 40%;
  text-align: end;
}

.label {
  display: block;
  color: #ef5350;
  font-size: 1rem;
  text-align: start;
}

option {
  background: white;
}

.field {
  display: block;
  width: 100%;
  padding: 0.8rem 1.2rem;
  margin: 0.1rem 0;
  background: #ef535054;
  border-radius: 0.3rem;
  box-sizing: border-box;
  font-size: 16pt;
  font-family: "Itim";
  outline: none;
  border: none;
}

.register-button {
  width: 30%;
  background: #ef535054;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 2rem;
  color: white;
  margin: 0.5rem 0;
  background: #ef5350;
  box-shadow: 0px 0px 0.6rem 0.1rem rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 900px) {
  .form {
    width: 60%;
  }
}
@media only screen and (max-width: 700px) {
  .form {
    width: 80%;
  }
  .register-button {
    width: 100%;
  }
}
</style>