import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { useStepsStore } from './stores/steps'
import { createPinia } from 'pinia';
//@ts-ignore
import type stepper from '../cordova/plugins/@felicienfrancois/cordova-plugin-stepper'



document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('resume', attachStepper, false);
//onDeviceReady()

function onDeviceReady() {
  const pinia = createPinia()
  const app = createApp(App)
  app.use(pinia)
  app.mount('#app')
  attachStepper();
}

function attachStepper() {
  const store = useStepsStore();
  stepper.startStepperUpdates({timeZone: 'Asia/Tokyo'},
    (result:any)=>store.$patch({stepsToday: result.steps_today}),
    (err:any)=>console.error(err)
  )
}