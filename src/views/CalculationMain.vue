<template>
  <div>
    <el-row v-for="r in cardList" :gutter="15">
      <el-col v-for="i in r" :span="6">
        <ItemCard :title="i.title" :description="i.description" :options="i.options"></ItemCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import _ from 'lodash'
import ItemCard from '../components/ItemCard.vue'
const cardList = _.chunk(
  [
    {
      title: '5以内的加法',
      description: '例题: 1+1、2+3',
      options: {
        maxResult: 5,
        factor: 2,
        operator: '+',
        quantity: 100,
        column: 4
      }
    },
    {
      title: '5以内的减法',
      description: '例题: 3-1、5-2',
      options: {
        maxResult: 5,
        factor: 2,
        operator: '-',
        quantity: 100,
        column: 4
      }
    },
    {
      title: '5以内的加减法',
      description: '例题: 3+1、5-2',
      options: {
        maxResult: 5,
        factor: 2,
        operator: '-',
        quantity: 100,
        column: 4
      }
    },
    {
      title: '10以内的加法',
      description: '例题: 3+5、5+2',
      options: {
        maxResult: 5,
        factor: 2,
        operator: '-',
        quantity: 100,
        column: 4
      }
    },
    {
      title: '10以内的减法',
      description: '例题: 3+5、5+2',
      options: {
        maxResult: 5,
        factor: 2,
        operator: '-',
        quantity: 100,
        column: 4
      }
    }
  ],
  4
)
</script>

<style lang="less">
.el-row {
  margin-bottom: 15px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
