
<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
export default{
    name: 'Login',
    data(){
        return{
            input:{
                username: "",
                password: ""
            }
        }
    },
    methods:{
        login(){
            // const url = 'mongodb://localhost:27017/';
            
            // // Database Name
            // const dbName = 'gddc';
            
            // // Use connect method to connect to the server
            // MongoClient.connect(url, function(err, client) {
            // console.log("Connected successfully to server");
            
            // const db = client.db(dbName);
            
            // client.close();
            // });
            if(this.input.username != "" && this.input.password != ""){
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password){
                    this.$cookie.set('auth', this.input.username, 1);
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                } else{
                    console.log("The username and / or password is incorrect");
                }
            } else{
                console.log("A username and password must be present");
            }
        }
    }
}
</script>

<style scoped>
    #login{
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>