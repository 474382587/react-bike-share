import JSONP from 'jsonp'

export default class Axios {
  static jsonp(options) {
    return new Promise((res, rej)=>{
      JSONP(options.url, {
        param: 'callback'
      }, function(err, response) {
        // to do
        console.log(response)
        if(response.cod === 200) {
          res(response)
        }
        else{
          rej(response.message)
        }
      })
    })
  }
}