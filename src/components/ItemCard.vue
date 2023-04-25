<template>
  <el-card shadow="hover">
    <div>
      <span>{{ title }}</span>
      <div class="card-description">
        <span>{{ description }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  options: Object
})
</script>

<style lang="less">
.card-description {
  font-size: 12px;
  color: #999;
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
