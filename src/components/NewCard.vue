<template>
  <div v-if="users && users.length">
    <UserCard
        v-for="user in users"
        :key="user.id"
        :data="user"
        :id="user.id"
        :descripton="user.description"
        @delete="deleteCard"
    ></UserCard>
  </div>
</template>

<script setup>

import UserCard from './UserCard.vue'
import {defineProps, defineEmits} from "vue"

defineProps({
  users: {
    type: Array,
    required: true
  }
})



const emit = defineEmits(['delete'])
const deleteCard = (id) => {
  emit('delete', id)
}

</script>


<!--// token github-->
<!--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-->
git remote set-url origin https://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@github.com/AminMohammadBakhshi/karboom-task