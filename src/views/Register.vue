<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="link" :to="{ name: 'LoginView' }"
          >Login</router-link
        >
      </p>
      <h2>Create Your GrandBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <user class="icon" />
          <input type="text" placeholder="First Name" v-model="firstName" />
        </div>
        <div class="input">
          <user class="icon" />
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <div class="input">
          <user class="icon" />
          <input type="text" placeholder="Username" v-model="username" />
        </div>
        <div class="input">
          <email class="icon" />
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="input">
          <password class="icon" />
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
  name: "RegisterView",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: "HomeView" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
