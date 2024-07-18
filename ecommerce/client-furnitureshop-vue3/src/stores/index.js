import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {

  const baseUrl = ref("http://localhost:5000")
  const rupiahCurrency  = (input) => {
    return input.toLocaleString("id-ID", {
        style: "currency", 
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}
  

  return { baseUrl,rupiahCurrency }
})
