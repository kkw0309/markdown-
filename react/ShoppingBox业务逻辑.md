# ShoppingBox业务逻辑

## 商品列表

#### 获取数据 axios

* JSON文件
使用 create-react-app 构建项目，必须将我们的静态文件json和图片放在public路径下；

* axios

确保静态json文件在public路径下后，在浏览器访问http://localhost:3000/data.json访问查看

npm install axios

axios请求代码：
```javaScript
import axios from "axios"

componentDidMount(){
    axios.get("http://localhost:3000/data.json").then((response)=>{
      // console.log(response);
      var data = response.data;

      this.props.addItem(data);
    }).catch((error)=>{
      console.log(error);
    })
  }
```

数据请求写在 componentDidMount中

#### 添加获取到的数据到redux
* redux文件结构
actions：存储所有的action创建函数
reducers：定义state对应的reducer函数
actionType.js 保存所有的actionType
index.js redux的入口文件，创建store和合并reducers

* 创建添加请求数据到state的action
```javaScript
import {ADD_STORES} from "../actionType";

export function addItemsToState(items){
  return {
    type:ADD_STORES,
    items:items
  }
}
```

* 修改reducer
定义state
items：商品列表
storeBox: 购物车

```javaScript
import {ADD_STORES} from "../actionType";

const initialState = {
  items:[

  ],
  storeBox:{
      items:[

      ],
      totalCount:0,
      totalPrice:0
    }

}

export default function storeListReducer(state=initialState,action){
  switch(action.type){
    case ADD_STORES:
      return {
        items:[...state.items, ...action.items],
        storeBox:state.storeBox
      }
    default:
      return state;
  }
}
```
将action中的一组数据添加到商品列表数据中

* 修改redux的入口文件index.js
```javaScript
import {createStore,combineReducers} from "redux"
import storeListReducer from "./reducers/storeListReducer"

const rootReducer = combineReducers({
  storeList:storeListReducer
});

const initialState = {};
const store = createStore(rootReducer,initialState);

export default store;
```


* 组件提交action
引入 connect
引入 action 创建函数
```javaScript
import {connect} from "react-redux";

import {addItemsToState} from "./redux/actions/storeListAction"

//在事件中调用提交函数addItem（）


function mapStatetoProps(rootReducer){
  return{
    data:rootReducer.storeList
  }
}

function mapActionToProps(dispatch){
  return{
    addItem:(items)=>dispatch(addItemToState(items))
  }
}

export default connect(mapStatetoProps,mapActionToProps)(StoreList)
```

## 购物车业务
#### 加入购物车
* 首次加入
判断 state中items的长度length，如果购物车items中有元素,则需要判断新加入的商品id是否与已经存在的商品id相符合，

```javaScript
case ADD_SHOPCAR:
      if(state.shoppingcar.length !== 0){
        var index = state.shoppingcar.findIndex((item)=>item.id === action.car.id)
        if(index !== -1){
          state.shoppingcar[index].count+=1;
        }else{
          state.shoppingcar.push(action.car)
        }
      }else{
        state.shoppingcar.push(action.car)
      }

```
