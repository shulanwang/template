import request from '@/utils/request'
export default {
  async getList(params) {
    let response = await request.post(``,params)
    return response
  }
}
