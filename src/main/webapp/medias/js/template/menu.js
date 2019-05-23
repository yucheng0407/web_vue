Vue.component(
        'pagecomp', {
            props: ['curMenu', 'compMenu', 'show'],
            template: '#template-page',
            methods: {
                updateP(a, compMenu) {
                    console.log(this.show)
                    this.$emit('update:show', Math.floor(Math.random()*100)); //触发 input 事件，并传入新值
                    this.$emit('update:curMenu', a); //触发 input 事件，并传入新值
                    this.$emit('update:compMenu', compMenu); //触发 input 事件，并传入新值
                    console.log(this.show)
                //    this.$emit('update:compMenu', compMenu); //触发 input 事件，并传入新值
                }
            }
        }
)
// boot up the demo
var data = [{
    name: "主页1",
    comp: "pagecomp",
    subMenus: [{name: "主页1-2", comp: "menucomp"}, {name: "主页1-3", comp: "pagecomp"}]
}, {name: "主页2", comp: "menucomp"}, {name: "主页3", comp: "pagecomp"}];
var menu = new Vue({
    el: '#index',
    data: {
        compMenu: data[0].subMenus,
        curMenu: data[0],
        menus: data,
        com: 1
    }
})