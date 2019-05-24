// boot up the demo
var data = [{
    name: "主页1",
    comp: "pagecomp",
    url: "1",
    subMenus: [{name: "主页1-1", comp: "menucomp",url:"1-1"}, {name: "主页1-2", comp: "pagecomp"}, {name: "主页1-3", comp: "pagecomp"}]
}, {name: "主页2", subMenus: [{name: "主页2-1", comp: "menucomp",url: "12321"}], comp: "menucomp"}, {
    name: "主页3",
    comp: "pagecomp"
}];
var Vmenu = new Vue({
    el: '#index',
    data: {
        curData: {
            compMenu: data[0],
            curMenu: data[0]
        },
        menus: data
    },
    methods: {
        goTo: function (menu) {
            function getUrl(data, type) {
                if (data.url) {
                    return data
                } else if (data[type]) {
                    return getUrl((data[type])[0])
                }
                return data;
            }
            this.curData.compMenu = menu;
            this.curData.curMenu = getUrl(menu, "subMenus");
        }
    }
    ,
    components: {
        pageComp: {
            props: ['compMenu', 'pCurData'],
            template: '#template-page',
            methods: {
                updateP: function (menu, compMenu) {
                    this.$emit("update:pCurData", {
                        compMenu: compMenu,
                        curMenu: menu
                    })
                }
            }
        }
    }
})