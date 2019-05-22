Vue.component('pagecomp', {
    props:['menu'],
    template: '#template-page'
})
Vue.component('menucomp', {
    props:['menu'],
    template: '#template-menu'
})
// boot up the demo
var menu = new Vue({
    el: '#index',
    data: {
        curMenu:"",
        component: "pagecomp",
        menus: [{name: "主页1",comp:"pageComp"}, {name: "主页2",comp:"menuComp"}, {name: "主页3",comp:"pageComp"}]
    }
})