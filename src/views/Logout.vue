<template>
    <div>Logout</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'logout',
    methods: {
        ...mapActions(['logout'])
    },
    created(){
        this.logout()
    }
};
</script>