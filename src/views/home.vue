<template>
    <div class="mainpage">
      <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>Search</template>
              <el-menu-item index="1-1"><router-link to="/MovieList">Search Movie</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/CelebrityList">Search Celebrity</router-link></el-menu-item>
                <el-menu-item index="1-3">Search Award</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>Personal Center</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item><router-link to="/logout">Logout</router-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>User</span>
          </el-header>

          <el-main>
            <router-view/>

          </el-main>
        </el-container>
      </el-container>
    </div>
</template>



<style>
  a {
    color: #333333;
    text-decoration:none
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

