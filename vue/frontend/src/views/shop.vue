<template>
    <div id="shop">
        <h1>Shop</h1>
        <p>
            buy cool stuff
        </p>
    </div>
</template>

<script>
import checkAuth from "../components/checkAuth"
    export default {
        name: 'shop',
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