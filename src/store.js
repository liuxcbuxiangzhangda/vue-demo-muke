/*用于web储存*/
const STORAGE_KEY='todos-vuejs'
//暴露两个方法(用es6写的方法)，有export就有import
export default {
 fetch(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)|| '[]')
 },
  save(items){
   window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
