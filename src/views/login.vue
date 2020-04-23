<template>
  <div class="login-box">
    <el-form ref="form" :model="form" label-width="80px">
      <h3 style="color: #67C23A">Welcome</h3>
      <el-form-item label="Username">
        <el-input v-model="form.name" placeholder="Enter username"/>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="form.password" placeholder="Enter password" autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(formname){
        var that = this
        this.$axios.get('http://localhost:8090/login', {
          params: {name: that.name, password: that.password}
        })
          .then(function (response) {
            console.log(response);
            that.$router.push("/home")
          })
          .catch(function (error) {
            console.log(error);
            alert("Wrong username or password!")
            that.$router.push("/home")
          });
      }
    }
  }
</script>

<style scoped>
  .login-box{
    width: 450px;
    height: 300px;
    border: 1px solid;
    color: #DCDFE6;
    margin: 150px auto;
    padding: 20px 30px 20px 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #DCDFE6
  }
</style>
