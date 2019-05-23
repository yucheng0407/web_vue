Vue.component('pagecomp', {
    props:['menu'],
    template: '#template-page'
})
Vue.component('menucomp', {
    props:['menu'],
    template: '#template-menu'
})
// boot up the demo
var data=[{name: "主页1",comp:"pagecomp",subMenus:[{name: "主页1-2",comp:"menucomp"}, {name: "主页1-3",comp:"pagecomp"}]}, {name: "主页2",comp:"menucomp"}, {name: "主页3",comp:"pagecomp"}];
var menu = new Vue({
    el: '#index',
    data: {
        curMenu:data[0],
        menus: data
    }
})