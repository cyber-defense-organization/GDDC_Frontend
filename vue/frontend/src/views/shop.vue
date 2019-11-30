<template>
    <div id="shop">
        <h1>Shop</h1>
        <p>
            buy cool stuff
        </p>
    </div>
</template>

<script>
    export default {
        name: 'shop',
        data() {
            return {};
        },         
        mounted() {
            if(!this.$cookie.get('auth')) {
                this.$router.replace({ name: "login" });
            }
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