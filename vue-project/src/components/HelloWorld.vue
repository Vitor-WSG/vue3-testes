<template>
  <div style="display: flex">
    <div style="margin: 15px">
      <button
        @click="requestGet()"
        style="
          background-color: blue;
          color: white;
          font-size: 15px;
          border-radius: 10px;
          padding: 15px;
        "
      >
        GET
      </button>
    </div>
    <div style="margin: 15px">
      <button
        style="
          background-color: green;
          color: white;
          font-size: 15px;
          border-radius: 10px;
          padding: 15px;
        "
      >
        POST
      </button>
    </div>
    <div style="margin: 15px">
      <button
        style="
          background-color: yellow;
          color: black;
          font-size: 15px;
          border-radius: 10px;
          padding: 15px;
        "
      >
        PUT
      </button>
    </div>
    <div style="margin: 15px">
      <button
        @click="requestDelete"
        style="
          background-color: red;
          color: white;
          font-size: 15px;
          border-radius: 10px;
          padding: 15px;
        "
      >
        DELETE
      </button>
    </div>
  </div>
  <div style="margin-top: 30px">
    <li
      v-for="(user, index) in users"
      :key="index"
      style="color: white; font-size: 20px"
    >
      {{ user.title }}
    </li>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { InterceptorAxios } from "../controllers/service";

const interceptorAxios = new InterceptorAxios();

interceptorAxios.getInterceptorRequestsAxios();
// interceptorAxios.getInterceptorResponsesAxios();

const users = ref();

const requestGet = () => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    console.log("ENTROU NA REQUISIÇÃO");
    users.value = response.data;
  });
  // .catch((error) => {
  //   console.log("Entrou no erro da requisição", error);
  // });
};

const requestDelete = () => {
  axios.delete("https://jsonplaceholder.typicode.com/posts/1").then(() => {
    console.clear();
    console.log("Deletado com Sucesso");
  });
};
</script>
