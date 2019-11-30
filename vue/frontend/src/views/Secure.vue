<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>
    </div>
</template>

<script>
import checkAuth from "../components/checkAuth"
    export default {
        name: 'Secure',
        data() {
            return {};
        },         
        mounted() {
           checkAuth(this.$cookie, this.$router);
        },
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>