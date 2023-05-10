<template>
    <div>
        <RouterView />
    </div>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { onMounted } from 'vue'
import { store } from './store'

const auth = getAuth()
const router = useRouter()

onMounted(() => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('have user')
            store.user = user
            router.push('/dashboard')
        } else {
            console.log('no user')
            store.user = {}
            router.push('/')            
        }
    });
})
</script>

<style scoped>
@import 'bulma/css/bulma.min.css';
</style>