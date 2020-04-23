<template>
  <div>
    <el-form id="Movieform" ref="form" :model="form" label-width="80px">
      <el-form-item label="Title">
        <el-input v-model="form.Title" placeholder="Enter Movie Title"></el-input>
      </el-form-item>
      <el-form-item label="Genre">
        <el-select v-model="form.Genre" placeholder="Selece Movie Genre">
          <el-option label="Drama" value="Drama"></el-option>
          <el-option label="Crime" value="Crime"></el-option>
          <el-option label="Romance" value="Romance"></el-option>
          <el-option label="Action" value="Action"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Language">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="English" name="type"></el-checkbox>
          <el-checkbox label="Non-English" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Order">
        <el-radio-group v-model="form.Order">
          <el-radio label="Order by Rating"></el-radio>
          <el-radio label="Order by Release Date"></el-radio>
          <el-radio label="Order by Duration"></el-radio>
        </el-radio-group>
      </el-form-item>
      <div>Rating Interval</div>
      <el-slider v-model="Rating" range show-stops :max="10"></el-slider>
      <br>
      <el-form-item style="margin-left: 30%">
        <el-button type="primary" @click="onSubmit">Search</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="MovieList" @row-click="MovieDetail">
      <el-table-column prop="Title" label="Title" width="140">
      </el-table-column>
      <el-table-column prop="Language" label="Language" width="140">
      </el-table-column>
      <el-table-column prop="ReleaseDate" label="Release Date"  width="140">
      </el-table-column>
      <el-table-column prop="Introduction" label="Introduction" width="140">
      </el-table-column>
      <el-table-column prop="Duration" label="Duration" width="140">
      </el-table-column>
      <el-table-column prop="AvgRate" label="Average Rate" width="140">
      </el-table-column>
      <el-table-column prop="TotalRate" label="Total Rage" width="140">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        form: {
          Title: '',
          Genre: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          Order: '',
          desc: '',
        },
        MovieList: [],
        Rating: [4, 8]
      }
    },
    methods: {
      MovieDetail(row){
        console.log(row.Title)
        var title = row.Title
        var url = 'movie/title='+title
        this.$router.push(url)
      },
      onSubmit() {
        var that = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:8090/MovieList',
          data: {form: that.form, Rating: that.Rating}
        }).then(function (response) {
          console.log(response)
          that.Celebrities = response.data.list
        }).catch(function (error) {
          var data = {
            "list": [{
              'Title': "Movie 1",
              'Language': 'CN',
              'ReleaseDate': 1991,
              'Introduction': 'Intro 1',
              'Duration': '121 min',
              'AvgRate': 8.3,
              'TotalRate': 1320
            },
              {
                'Title': "Movie 2",
                'Language': 'CN',
                'ReleaseDate': 1992,
                'Introduction': 'Intro 2',
                'Duration': '122 min',
                'AvgRate': 8.3,
                'TotalRate': 1320
              }]
          }
          that.MovieList = data.list
        })
      }
    },
    Created(){
      var that = this
      this.$axios({
        method: 'get',
        url: 'https://easy-mock.com/mock/5ea0640faf68063566222c40/vue-test/MovieList'
      }).then(function (response) {
        that.MovieList = response.data.list
      })
    }
  };
</script>

<style scoped>

</style>
