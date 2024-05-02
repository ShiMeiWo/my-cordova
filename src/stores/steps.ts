import {defineStore} from 'pinia';
import {ref} from 'vue'

export const useStepsStore = defineStore('steps', () => {
  const stepsToday = ref(0)

  return { stepsToday }
})