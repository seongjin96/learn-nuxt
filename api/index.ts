import axios, { AxiosInstance, AxiosResponse } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProductById(id: string): Promise<AxiosResponse<any>> {
  return instance.get(`/products/${id}`)
}

export { fetchProductById }
