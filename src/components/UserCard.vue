<template>
  <section class="card-details">
    <div class="user-data">
      <div class="style-sheet">
        <div class="delete" @click="deleteCard(data.id)">
          <img class="trash-icon" src="../../src/assets/icons/trash.png">
        </div>
        <section class="data-details">
          <div>
            <ul class="list-size">
              <li class="user-title">{{ data.title}}</li>
              <li class="user-description">{{ data.description }}</li>
            </ul>
          </div>
          <div>
            <div class="users-image">
              <img class="data-img" src="https://source.unsplash.com/random">
            </div>
          </div>
        </section>
      </div>
      <div class="border-bm" :style="{backgroundColor: `${data.color}`}"></div>
    </div>
  </section>
</template>

<script setup>
import {defineEmits} from  'vue'

import {defineProps} from "vue"

defineProps({
  data: {
    default: {
      id: "",
      title: "",
      description: "",
      color: "",
      img: "",
      value: ""
    },
    required: false
  }
})

const emit = defineEmits(['delete'])

const deleteCard = (id) => {
  emit('delete', id)
}

</script>

<style lang="sass">
@media (max-width: 1440px)
  .card-details
    background: #d4eae1
    width: 100%
    height: 100%
    margin: 2rem 0 2rem 0
    border-radius: 1rem
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    .user-data
      padding: 1rem
      .style-sheet
        display: flex
        justify-content: space-between
      .delete
        display: flex
        align-items: flex-end
        .trash-icon
          width: 2rem
          height: 2rem
          cursor: pointer
      .data-details
        display: flex
        align-items: flex-end
        .list-size
          margin: 0 1rem 0 0
        .user-title
          color: #3a2e2e
          list-style: none
          display: flex
          justify-content: end
          font-family: boldFont
          font-size: 1.2rem
        .user-description
          color: #717171
          list-style: none
          font-family: mediumFont
          font-size: .9rem
        .users-image
          width: 5rem
          height: 5rem
          border-radius: 10px
          .data-img
            width: 5rem
            height: 5rem
            border-radius: 10px
    .border-bm
      margin-top: 1rem
      width: 100%
      height: 7px
      border-radius: 10px

@media (max-width: 538px)
  .card-details
    background: #d4eae1
    width: 100%
    height: 100%
    margin: 1rem 0 1rem 0
    border-radius: 1rem
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    .user-data
      padding: 1rem
      .style-sheet
        display: flex
        justify-content: space-between
      .delete
        display: flex
        align-items: flex-end
        .trash-icon
          width: 1rem
          height: 1rem
          cursor: pointer
      .data-details
        display: flex
        align-items: flex-end
        .list-size
          margin: 0 1rem 0 0
        .user-title
          color: #3a2e2e
          list-style: none
          display: flex
          justify-content: end
          font-family: boldFont
          font-size: .9rem
        .user-description
          color: #717171
          list-style: none
          font-family: mediumFont
          font-size: .5rem
        .users-image
          width: 3rem
          height: 3rem
          border-radius: 5px
          .data-img
            width: 3rem
            height: 3rem
            border-radius: 5px
    .border-bm
      margin-top: 1rem
      width: 100%
      height: 7px
      border-radius: 10px

@media (max-width: 390px)
  .card-details
    background: #d4eae1
    width: 100%
    height: 100%
    margin: 1rem 0 1rem 0
    border-radius: 1rem
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    .user-data
      padding: 1rem
      .style-sheet
        display: flex
        justify-content: space-between
      .delete
        display: flex
        align-items: flex-end
        .trash-icon
          width: 1rem
          height: 1rem
          cursor: pointer
      .data-details
        display: flex
        align-items: flex-end
        .list-size
          margin: 0 1rem 0 0
        .user-title
          color: #3a2e2e
          list-style: none
          display: flex
          justify-content: end
          font-family: boldFont
          font-size: .8rem
        .user-description
          color: #717171
          list-style: none
          font-family: mediumFont
          font-size: .4rem
        .users-image
          width: 2rem
          height: 2rem
          border-radius: 5px
          .data-img
            width: 2rem
            height: 2rem
            border-radius: 5px
    .border-bm
      margin-top: 1rem
      width: 100%
      height: 7px
      border-radius: 10px

</style>