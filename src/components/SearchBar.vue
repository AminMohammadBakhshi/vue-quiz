<template>
  <div class="search-bar-items">
    <section class="items">
      <div class="header-size">
        <div @click="addCard">
          <img src="../assets/icons/plus.png" class="plus-icon">
        </div>
        <div class="search-details">
          <input class="search-input" id="search" v-model="inputSearch" type="search" placeholder="Search Something...">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import {defineEmits} from "vue"

const inputSearch = ref("")

const emit = defineEmits(["input", "add"])

const addCard = () => {
  emit("add", inputSearch.value)
}

watch(inputSearch,(value) => {
  emit("input", value)
})
</script>

<style scoped lang="sass">
@media (max-width: 1440px)
  .search-bar-items
    width: 100%
    background: #d4eae1
    border-radius: 1rem
    height: 100%
    margin: 3rem 0 0 0
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    .header-size
      display: flex
    .items
      padding: 1rem 0 1rem 0
      width: 100%
      .plus-icon
        width: 3rem
        height: 3rem
        cursor: pointer
        margin: 0 0 0 1rem
        display: flex
        background-color: #f4f8f9
        flex-direction: row
        border-radius: 50%
      .search-details
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        padding-left: 1rem
      .search-input
        margin: 0 1rem 0 0
        width: 100%
        height: 3rem
        border-radius: 1.5rem
        border: none
        font-family: semiBoldFont
        background: url("../assets/icons/search.png") no-repeat 10px
        padding-left: 3rem
        background-color: #f4f8f9
        outline: none
        font-size: 1rem
        color: #181717

@media (max-width: 538px)
  .search-bar-items
    width: 100%
    background: #d4eae1
    border-radius: .5rem
    height: 100%
    margin: 2rem 0 0 0
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    .header-size
      display: flex
    .items
      padding: .6rem 0 .6rem 0
      width: 100%
      .plus-icon
        width: 2rem
        height: 2rem
        cursor: pointer
        margin: 0 0 0 .7rem
        display: flex
        background-color: #f4f8f9
        flex-direction: row
        border-radius: 50%
      .search-details
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        padding-left: .7rem
      .search-input
        margin: 0 .7rem 0 0
        width: 100%
        height: 2rem
        border-radius: 1.1rem
        border: none
        font-family: semiBoldFont
        background: url("../assets/icons/search.png") no-repeat 5px
        background-size: 20px
        padding-left: 2rem
        background-color: #f4f8f9
        outline: none
        font-size: .7rem
        color: #181717
</style>



