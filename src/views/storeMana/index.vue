<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="中文门店">
        <template slot-scope="scope">
          {{ scope.row.STORE_NAME }}
        </template>
      </el-table-column>
      <el-table-column label="英文门店" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.STORE_NAME_EN }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" align="center">
        <template slot-scope="scope">
          {{ scope.row.TEL }}
        </template>
      </el-table-column>
      <el-table-column label="地址" align="center">
        <template slot-scope="scope">
          {{ scope.row.ADDR }}
        </template>
      </el-table-column>
      <el-table-column label="微信图片" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.QR_CODE_IMG">
        </template>
      </el-table-column>
      <el-table-column label="经度" align="center">
        <template slot-scope="scope">
          {{ scope.row.LOC_X }}
        </template>
      </el-table-column>
      <el-table-column label="纬度" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.LOC_Y }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import storeApi from '@/api/table'

  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        list: null,
        listLoading: true,
        listparam: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        this.listLoading = true
        this.listparam = {
          "cmd": "store.list.get",
          "param": {
            "KEY_WORD": "abc",
            "PAGE_INDEX": 1,
            "PAGE_SIZE": 20
          }
        }
        let res= await storeApi.getList(this.listparam)
        this.listLoading = false
      }
    }
  }

</script>
