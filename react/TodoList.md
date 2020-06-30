# TODOLIST

## state的定义
* 正在进行中todo
* 已经完成todo
* 已删除的todo

```javaScript
const initialState = {
  pendding:[],
  fininshed:[],
  deleteItems:[]
}
```

## 新增todo
* 定义action
```javaScript
export function addItem(item){
  return {
    type:ADD_TODO_ITEM,
    item:{

    }
  }
}
```
* 处理reducer
```javaScript
export default function todoListReducer(state=initialState, action){
  switch (action.type) {
    case ADD_TODO_ITEM:
    return{
      pendding:[...state.pendding,action.item], // state.pendding.push(action.item)
      finished:state.finished,
      deleteItems:state.deleteItems  
    }

      break;
    default:

  }
}
```

## 从进行到完成
* 判断当前点击的item的选中状态
* 提交action

```javaScript
export function penddingToFinished(item){
  return{
    type:PENDDING_TO_FINISHED,
    item:item
  }
}
```


* 处理reducer
```javaScript
export default function todoListReducer(state=initialState, action){
  switch (action.type) {
    case ADD_TODO_ITEM:
    return{
      pendding:[...state.pendding,action.item], // state.pendding.push(action.item)
      finished:state.finished,
      deleteItems:state.deleteItems  
    }
    case PENDDING_TO_FINISHED:
    state.pendding.foreach((element,index)=>{
      if(elment.itemName == action.item.itemName){
        state.pendding.splice(index,1);
      }
    })
    return{
      pendding:state.pendding,
      finished:[...state.finished,action.item],
      deleteItems:state.deleteItems
    }

      break;
    default:

  }
}
```

## 删除
* 拿到你要删除的对象

* 提交action
```javaScript
export function deleteItem(item)P{
  return {
    type:DELETE_ITEM,
    item:item
  }
}
```

* 处理reducer
```javaScript
export default function todoListReducer(state=initialState, action){
  switch (action.type) {
    case ADD_TODO_ITEM:
    return{
      pendding:[...state.pendding,action.item], // state.pendding.push(action.item)
      finished:state.finished,
      deleteItems:state.deleteItems  
    }
    case PENDDING_TO_FINISHED:
    state.pendding.foreach((element,index)=>{
      if(elment.itemName == action.item.itemName){
        state.pendding.splice(index,1);
      }
    })
    return{
      pendding:state.pendding,
      finished:[...state.finished,action.item],
      deleteItems:state.deleteItems
    }
    case DELETE_ITEM:
      if(action.item.selected){
        state.finished.foreach((element,index)=>{
          if(elment.itemName == action.item.itemName){
            state.finished.splice(index,1);
            state.deleteItems = [...state.deleteItems action.item];
          }
        })
      }else {
        state.pendding.foreach((element,index)=>{
          if(elment.itemName == action.item.itemName){
            state.pendding.splice(index,1);
            state.deleteItems = [...state.deleteItems action.item];
          }
        })
      }

      return{
        pendding:state.pendding,
        finished:state.finished,
        deleteItems:state.deleteItems
      }

      break;
    default:

  }
}
```

## 筛选
```javaScript
class ToDoList extends React.Component {
  constructor() {
    this.data = new Array();
  }

  this.data.foreach(element=>{
    <div>

    </div>
  })




}
```
