// boot up the demo
var data = [{
    name: "主页1",
    comp: "pagecomp",
    subMenus: [{name: "主页1-1", comp: "menucomp"}, {name: "主页1-2", comp: "pagecomp"}, {name: "主页1-3", comp: "pagecomp"}]
}, {name: "主页2",subMenus: [{name: "主页2-1", comp: "menucomp"}], comp: "menucomp"}, {name: "主页3" ,subMenus: [{name: "主页3-1", comp: "menucomp"}],comp: "pagecomp"}];
var Vmenu = new Vue({
    el: '#index',
    data: {
        parentName:null,
        compMenu: data[0].subMenus,
        curMenu: data[0],
        menus: data
    },
    components: {
        pageComp: {
            props: ['compMenu', 'curMenu','curCompMenu'],
            template: '#template-page',
            methods: {
                updateP: function (menu, compMenu) {
                    this.$emit("update:curCompMenu", compMenu)
                    this.$emit("update:curMenu", menu)
                }
            }
        }
    }
})