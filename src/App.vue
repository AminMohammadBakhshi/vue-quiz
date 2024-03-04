<template>
  <div class="layout" id="app">
    <SearchBar
        :key="refreshSearchBarKey"
        @input="changeSearchQuery"
        @add="addCard"
    ></SearchBar>
    <NewCard
        :users="searchedUsers"
        :delete-item="deleteCardUsers"
        @delete="deleteCardUsers"
    ></NewCard>
  </div>
</template>

<script setup>

import SearchBar from "./components/SearchBar.vue";
import NewCard from "./components/NewCard.vue";
import {ref} from "vue";
import {onMounted} from "vue";
import axios from "axios";

const users = ref([])
const searchedUsers = ref([])
const refreshSearchBarKey = ref(false)


const changeSearchQuery = (value) => {
  console.log(users.value);
  searchedUsers.value = users.value.filter(el => {
    if (el && el.title) {
      return el.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    }
    return false
  })
  console.log(searchedUsers.value)
  console.log(value)
}

const fetchUser = async () => {
  const {data} = await axios.get('http://localhost:3000/data')
  users.value = data
  searchedUsers.value = data
  console.log(users.value)
}

onMounted(() => {
  fetchUser()
})

const addCard = async (title) => {
  const newUserCard = {
    ...users.value[users.value.length -1],
    id: Number(users.value[users.value.length -1].id) + 1,
    title,
  }

  console.log(newUserCard)

  if (!title) {
    alert("SORRY !!! Please Add Title")
  } else {
    await axios.post('http://localhost:3000/data', newUserCard)
        .then(response => {
          fetchUser()
          refreshSearchBarKey.value = !refreshSearchBarKey.value
          console.log(response)
        })
  }

  console.log(title)
}

const deleteCardUsers = (id) => {
  axios.delete(`http://localhost:3000/data/${id}`)
      .then(() => {
        fetchUser()
      })
}

</script>

<style lang="sass">

*
  box-sizing: border-box

body
  margin: 0

@font-face
  font-family: mediumFont
  src: url("../src/assets/fonts/Manrope-Medium.ttf")
  font-display: fallback

@font-face
  font-family: semiBoldFont
  src: url("../src/assets/fonts/Manrope-SemiBold.ttf")
  font-display: fallback

@font-face
  font-family: boldFont
  src: url("../src/assets/fonts/Manrope-Bold.ttf")
  font-display: fallback

.layout
  padding: 0 25rem 0

@media only screen and (max-width: 1182px)
  .layout
    padding: 0 20rem 0

@media only screen and (max-width: 1020px)
  .layout
    padding: 0 15rem 0

@media only screen and (max-width: 860px)
  .layout
    padding: 0 10rem 0

@media only screen and (max-width: 700px)
  .layout
    padding: 0 5rem 0
</style>
