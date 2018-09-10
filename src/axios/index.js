import JSONP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';
export default class Axios {
  static jsonp(options) {
    return new Promise((res, rej) => {
      JSONP(options.url, {
        param: 'callback'
      }, function (err, response) {
        // to do
        console.log(response)
        if (response.cod === 200) {
          res(response)
        } else {
          rej(response.message)
        }
      })
    })
  }

  static ajax(options) {
    let loading
    if(options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: 'https://easy-mock.com/mock/5b96a552458965131f4aeee5/example',
        timeout: 5000,
        params: (options.data && options.data.params) || '' 
      }).then(response => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none'
        }
        if(response.status === 200) {
          let res = response.data
          if(res.code === 0) {
            resolve(res)
          }else{
            Modal.info({
              title: 'Note',
              content: res.msg
            })
          }
        }
        else {
          reject(response.data)
        }
      })
    })
  }
}