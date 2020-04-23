<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Celebrity">
        <el-input v-model="form.CelebrityName"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="Celebrities">
      <el-table-column prop="Name" label="Name" width="140">
      </el-table-column>
      <el-table-column prop="Gender" label="Gender" width="140">
      </el-table-column>
      <el-table-column prop="DateOfBirth" label="Date Of Birth"  width="140">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "CelebrityList",
    data() {
      return {
        Celebrities: [],
        form: {
          CelebrityName: ''
        }
      }
    },
    methods: {
      onSubmit() {
        var that = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:8090/MovieList',
          data: {CelebrityName: that.input}
        })
      }
    },
    methods: {
      onSubmit() {
        var that = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:8090/CelebrityList',
          data: {form: that.form}
        })
      }
    },
    created(){
      var that = this
      this.$axios({
        method: 'get',
        url: "https://easy-mock.com/mock/5ea0640faf68063566222c40/vue-test/CelebrityList",
      })
      .then(function (response) {
        console.log(response)
        that.Celebrities = response.data.list
      })
    }
  };
</script>

<style scoped>

</style>
