<template>

    <div class="has-text-centered">
        <input type="text" placeholder="email" v-model="email" autocomplete="username">
        <input type="password" placeholder="password" v-model="password" autocomplete="new-password">
        <button class="button" @click="login">LOGIN</button>
    </div>

</template>

<script setup>
    import { ref } from 'vue'
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

    const email = ref('')
    const password = ref('')
    const auth = getAuth();

    const login = () => {        
        signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ' : ' + errorMessage);
        })
    }
</script>

<style scoped>

</style>