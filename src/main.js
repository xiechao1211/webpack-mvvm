import Mvvm from './mvvm/mvvm'
// @import('./index.css')
import './styles/main.less'
import './styles/index.css'

let mv = new Mvvm({
    el: "#app",
    data: ()=>{
        return {
            str : '我是测试',
            number: 23,
            someStr: '别的内容',
            child: {
                childData:'我是子对象',
            },
            text: '我是text'

        }
    },
    methods: {
        setChild(){
            console.log('子对象的事件绑定')
            this.child.childData = Math.random()
        },
        clear(){
            console.log('绑定事件成功')
            this.str = ''
        }
    }
})
