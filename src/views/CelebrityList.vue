<template>
  <div>
    <el-input v-model="input" placeholder="Enter Celebrity Name"></el-input>
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
        input: ''
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
