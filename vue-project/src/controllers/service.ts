import axios from 'axios'
import { ref } from 'vue'
import { Cookies } from 'quasar';

export class InterceptorAxios {
  getInterceptorRequestsAxios() {
    axios.interceptors.request.use((config): any => {
      console.clear()
      config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      console.log(config.headers);
      Cookies.remove('nome')
      Cookies.set('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
      return config
    },
      (error) => {
        return Promise.reject(error)
      })
  }

  getInterceptorResponsesAxios() {
    axios.interceptors.response.use((response): any => {
      console.clear()
      return response.data.forEach((element: any) => {
        console.log(element.title)
      });
    }
      // (error) => {
      //   return Promise.reject(error)
      // }
    );
  }
}