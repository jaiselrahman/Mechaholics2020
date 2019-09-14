<template>
  <div id="register">
    <form class="form">
      <div class="status" style="width: 100%; text-align: center;">Registration Fee Rs 250/-</div>
      <br>
      <label class="label" for="Name">
        {{ $v.$error && !$v.name.required ? 'Name is required' : 'Name' }}
      </label>
      <input class="field" type="text" v-model="name" name="Name">
      <br>
      <label class="label" for="Email">
        {{ $v.email.$error ? (!$v.email.required && 'Email is required' || !$v.email.email && 'Enter valid email') : 'Email' }}
      </label>
      <input class="field" type="text" v-model="email" name="Email">
      <br>
      <label class="label" for="Phone">
        {{ $v.phone.$error ? (!$v.phone.required && 'Phone is required' || !$v.phone.isValid && 'Enter valid phone number') : 'Phone' }}
      </label>
      <input class="field" type="text" v-model="phone" name="Phone">
      <br>
      <label class="label" for="College">
        {{ $v.$error && !$v.college.required ? 'College is required' : 'College'}}
        </label>
      <input class="field" type="text" v-model="college" name="College">
      <br>
      <label class="label" for="Department">
        {{ $v.$error && !$v.department.required ? 'Department is required' : 'Department' }}
      </label>
      <select class="field" name="Department" v-model="department">
        <option disabled>Select Department</option>
        <option>B.Tech. IT</option>
        <option>B.E. CSE</option>
        <option>M.E.</option>
        <option>B.C.A/M.C.A</option>
        <option>Others</option>
      </select>
      <br>
      <label class="label" for="Food Preference">
       {{ $v.$error && !$v.foodPreference.required ? 'Food preference is required' : 'Food Preference' }}
      </label>
      <select class="field" name="Food Preference" v-model="foodPreference">
        <option disabled>Veg./Non Veg.</option>
        <option>Veg</option>
        <option>Non Veg</option>  
      </select>
      <br>
      <div>
        <div class="status" >{{ status }}</div>
        <VueLoadingButton aria-label="Regsiter" class="register-button" :loading="loading" @click.native="submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, numeric} from "vuelidate/lib/validators";
import axios from "axios";

import VueLoadingButton from 'vue-loading-button';

const URL = "https://script.google.com/macros/s/AKfycbybm4JNQcwQJNuwnjiIfJzFBv3Uxizj1zrbGqtDuUrmZf3FPmVn/exec";

export default {
  name: "RegistrationPage",
  components: {
    VueLoadingButton
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      foodPreference: "",
      loading: false,
      status:"Registration closed!"
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
      isValid(phone) {
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
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   this.status = "Please fix the above errors";
      // } else {
      //   this.loading = true;
      //   this.status = "";
      //   axios.get(URL, { params: {
      //     "Name": this.name,
      //     "Email": this.email,
      //     "Phone": this.phone,
      //     "College": this.college,
      //     "Department": this.department,
      //     "Food Preference": this.foodPreference,
      //     "Web": true
      //   }}).then((res) => {
      //     this.loading = false;
      //     if(res.data.result == "success") {
      //       this.status = "Registration Successful";
      //     } else if(res.data.error === "email_already_exists") {
      //       this.status = "Email id already exists";
      //     } else if(res.data.error === "phone_already_exists") {
      //       this.status = "Phone number already exists";
      //     } else {
      //       this.status = "Registration Failed!";
      //     }
      //   }).catch(() => {
      //     this.loading = false;
      //     this.status = "Registration Failed!";
      //   })
      // }
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
  display:inline-block;
}

.status {
  color: #ef5350;
  float: left;
  padding: 0.8rem 0;
  font-size: 1.2rem;
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
  float: right;
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
  .status {
    width: 100%;
    text-align: center;
  }
  .register-button {
    width: 100%;
  }
}
</style>
