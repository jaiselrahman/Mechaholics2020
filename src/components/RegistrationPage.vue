<template>
  <div id="register">
    <form class="form" @submit.prevent="submit">
      <label class="label" for="Name">Name</label>
      <input class="field" type="text" v-model="name" name="Name">
      <div class="error" v-if="$v.$error && !$v.name.required">Name is required</div>
      <br>
      <label class="label" for="Email">Email</label>
      <input class="field" type="text" v-model="email" name="Email">
      <div class="error" v-if="$v.$error && !$v.email.required">Email is required</div>
      <div class="error" v-else-if="$v.$error && !$v.email.email">Enter valid email</div>
      <br>
      <label class="label" for="Phone">Phone</label>
      <input class="field" type="text" v-model="phone" name="Phone">
      <div class="error" v-if="$v.$error && !$v.phone.required">Phone is required</div>
      <div class="error" v-if="$v.$error && !($v.phone.numeric && $v.phone.isValidPhone)">Enter valid phone number</div>
      <br>
      <label class="label" for="College">College</label>
      <input class="field" type="text" v-model="college" name="College">
      <div class="error" v-if="$v.$error && !$v.college.required">College is required</div>
      <br>
      <label class="label" for="Department">Department</label>
      <select class="field" name="Department" v-model="department">
        <option disabled>Select Department</option>
        <option>B.Tech. IT</option>
        <option>B.E. CSE</option>
        <option>M.E.</option>
        <option>B.C.A/M.C.A</option>
        <option>Others</option>
      </select>
      <div class="error" v-if="$v.$error && !$v.department.required">Select your department</div>
      <br>
      <label class="label" for="Food Preference">Food Preference</label>
      <select class="field" name="Food Preference" v-model="foodPreference">
        <option disabled>Veg./Non Veg.</option>
        <option>Veg</option>
        <option>Non Veg</option>
      </select>
      <div class="error" v-if="$v.$error && !$v.foodPreference.required">Select food preference</div>
      <br>
      <div v-if="submitStatus === 'OK'">Thanks for your registration!</div>
      <button class="register-button" type="submit" :disabled="submitStatus === 'PENDING'">Register</button>
    </form>
  </div>
</template>

<script>
import { required, email, numeric} from "vuelidate/lib/validators";

export default {
  name: "RegistrationPage",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      foodPreference: "",
      submitStatus: ""
    };
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric,
      isValidPhone(phone) {
        return !!phone && phone.length === 10;
      }
    },
    college: {
      required
    },
    department: {
      required
    },
    foodPreference: {
      required
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
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

.error {
  color: #ef5350;
}

.register-button {
  width: 30%;
  background: #ef535054;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  color: white;
  margin: 0.5rem 0;
  background: #ef5350;
  box-shadow: 0px 0px 0.6rem 0.1rem rgba(0, 0, 0, 0.5);
}

.register-button:active {
  transform: scale(0.98);
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