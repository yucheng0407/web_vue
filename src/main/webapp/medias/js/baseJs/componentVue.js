/**
 * Created by yucheng on 2019/5/25.
 */
/**
 * 搜索栏组件
 * search: {回调事件 event: "input",输入值 value: ""}
 * search-call:回调函数
 */
Vue.component("baseSearch", {
    props: ['search'],
    template: '<div style="border-radius: 10px;border: 1px solid #9a9393;float:left;"><i class="iconfont">&#xe77c</i><input  @[search.event]="searchCall"  :value="search.value" style="border: 0;background: none;"/></div>',
    methods: {
        searchCall: function (e) {
            this.search.value = e.target.value;
            this.$emit('search-call', this.search.value);
        }
    }
});
/**
 * 翻页组件
 * page:{当前页 index:Number,页数 pageNum:Number}
 */
Vue.component("basePage", {
    props: ['page'],
    template: '#basePage',
    data: function () {
        return {isStartOther: false, isEndOther: false, otherIndex: 1, otherNum: this.page.pageNum>5?5:this.page.pageNum}
    },
    computed: {
        otherUpdate: function () {
            debugger
            if (!((this.otherIndex < this.page.index))) {
                if (this.page.index != 1) {
                    this.otherIndex--;//不是第一页
                }
            } else if (!(this.page.index < (this.otherIndex + this.otherNum) - 1)) {
                if (this.page.index != this.page.pageNum) {
                    this.otherIndex++;//最后一页
                }
            }
            this.isStartOther = this.otherIndex > 1;
            this.isEndOther = (this.otherIndex + this.otherNum) - 1 < this.page.pageNum;
        }
    }
});
