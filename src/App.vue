<template>
  <div class="common-layout">
    <el-container>
      <el-header class="main-header">
        <h3>Tutu DaYin 口算题生成器</h3>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <div v-for="m in menu">
            <el-row v-if="!m.link" class="main-menu-group">
              <el-text>{{ m.name }}</el-text>
            </el-row>
            <el-row v-else class="main-menu-item" :class="{active: m.isActive}" @click="handleMenuClick(m.link)">
              <span>{{ m.name }}</span>
            </el-row>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div class="main-container"> 
              <RouterView />
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menu from './menu.json'

export default{
  data() {
    return{
      active: 0,
      menu: menu
    }
  },
  methods: {
    handleMenuClick(link) {
      console.log(link);
      this.$router.push(link)
    }
  },
}
</script>

<style lang="less">
  .main-header {
    background-color: #626aef;
    color: #FFFFFF;
  }

  .main-menu-group {
    padding: 10px 20px;
  }

  .main-menu-item {
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: #858BEF;
      color: #FFF;
    }

    &.active {
      background-color: #858BEF;
      color: #FFF;
      cursor: pointer;
    }
  }

  .main-container {
    height: 100%;
  }
</style>