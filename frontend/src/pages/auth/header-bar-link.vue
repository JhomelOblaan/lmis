<template>
  <div>
    <div class="w-full px-14">
      <button
        class="w-full text-center pl-0 border-none bg-green-800 text-white my-4 p-2 rounded-full"
        v-if="!account"
        target="_blank"
        @click="SignIn()"
        rel="noopener noreferrer"
      >
        Login Microsoft
      </button>
    </div>
  </div>
</template>

<script>
import * as msal from "@azure/msal-browser";
import { PublicClientApplication } from "@azure/msal-browser";
import Icon from "../../icon.vue";
import store from "../../../store";
export default {
  name: "HeaderBar",

  data() {
    return {
      account: undefined,
      github: "https://github.com/cmatskas",
      twitter: "https://twitter.com/christosmatskas",
      signin: "https://microsoft.com",
    };
  },
  components: {
    Icon,
  },
  async created() {
    this.$msalInstance = await new PublicClientApplication(
      this.$store.state.msalConfig
    );
  },
  mounted() {
    console.log("msqlInstance :", this.$msalInstance);
    const accounts = this.$msalInstance.getAllAccounts();
    if (accounts.length == 0) {
      return;
    }
    this.account = accounts[0];
    this.$emitter.emit("loginmicrosoft", this.account);
  },
  methods: {
    async SignIn() {
      await this.$msalInstance
        .loginPopup({})
        .then(() => {
          const myAccounts = this.$msalInstance.getAllAccounts();
          this.account = myAccounts[0];
          this.$emitter.emit("loginmicrosoft", this.account);
        })
        .catch((error) => {
          console.error(`error during authentication: ${error}`);
        });
    },
    async SignOut() {
      await this.$msalInstance
        .logout({})
        .then(() => {
          this.$emitter.emit("logoutmicrosoft", "logging out");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
