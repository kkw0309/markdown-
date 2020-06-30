# MongoDB

## 目标
* 掌握 MongoDB

## 数据库
* 数据库是数据的仓库。
* 与普通的“数据仓库”不同的是，数据库依据“数据结构”来组织数据，因为“数据结构”，所以我们看到的数据是比较“条理化”的（比如不会跟以前的普通文件存储式存储成一个文件那么不条理化，我们的数据库分成一个个库，分成一个个表，分成一条条记录，这些记录是多么分明）
也因为其“数据结构”式，所以有极高的查找速率（比如B-Tree查找法），（由于专精，可以根据自己的结构特性来快速查找，所以对于数据库的查找会比较快捷；不像普通文件系统的“查找”那么通用）
* 与EXCEL来比的话，能明显的看出数据库的好处，我们能给一个个“字段”添加“约束”（比如约束一列的值不能为空）
* 数据库与普通的文件系统的主要区别（起因）：数据库能快速查找对应的数据


#### 关系型数据库
* 关系型数据库是依据关系模型来创建的数据库。
* 所谓关系模型就是“一对一、一对多、多对多”等关系模型，关系模型就是指二维表格模型,因而一个关系型数据库就是由二维表及其之间的联系组成的一个数据组织。
* 关系型数据可以很好地存储一些关系模型的数据，比如一个老师对应多个学生的数据（“多对多”），一本书对应多个作者（“一对多”），一本书对应一个出版日期（“一对一”）
* 关系模型是我们生活中能经常遇见的模型，存储这类数据一般用关系型数据库
* 关系模型包括数据结构（数据存储的问题，二维表）、操作指令集合（SQL语句）、完整性约束(表内数据约束、表与表之间的约束)。

###### 关系型数据库的特点：
* 安全（因为存储在磁盘中，不会说突然断电数据就没有了）
* 容易理解（建立在关系模型上）
* 但不节省空间（因为建立在关系模型上，就要遵循某些规则，好比数据中某字段值即使为空仍要分配空间）

#### 非关系型数据库
* 非关系型数据库主要是基于“非关系模型”的数据库（由于关系型太大，所以一般用“非关系型”来表示其他类型的数据库）
* 非关系型模型有：
  列模型：存储的数据是一列列的。关系型数据库以一行作为一个记录，列模型数据库以一列为一个记录。（这种模型，数据即索引，IO很快，主要是一些分布式数据库）
  键值对模型：存储的数据是一个个“键值对”，比如name:liming,那么name这个键里面存的值就是limingimage
  文档类模型：以一个个文档来存储数据，有点类似“键值对”。


## MongoDB 简介
mongodb 是 NoSQL 非关系型数据库。
mongoose是 mongodb 的一个对象模型工具，是基于 node-mongodb-native 开发的 mongodb 的 nodejs 驱动，可以在异步的环境下执行。同时它也是针对 mongodb 操作的一个对象模型库，封装了 mongodb 对文档的一些增删改查等常用方法，让nodejs操作 mongodb 数据库变得更加容易。

## MongoDB 安装

* 在安装 MongoDB 盘符的根目录下，创建data文件夹

```bash
 # 进入MongoDB安装盘符
cd 盘符

//创建data文件夹
mkdir data

# cd 进入data文件夹,创建db文件夹
cd data
mkdir db

# 回到data路径 创建log文件夹
mkdir log
```

* 指定 MongoDB 的dbpath

```bash
盘符:/mongodb/bin/mongod --dbpath 盘符:/data/db
```

输出结果为执行成功：
```bash
2015-09-25T15:54:09.212+0800 I CONTROL  Hotfix KB2731284 or later update is not
installed, will zero-out data files
2015-09-25T15:54:09.229+0800 I JOURNAL  [initandlisten] journal dir=c:\data\db\j
ournal
2015-09-25T15:54:09.237+0800 I JOURNAL  [initandlisten] recover : no journal fil
es present, no recovery needed
2015-09-25T15:54:09.290+0800 I JOURNAL  [durability] Durability thread started
2015-09-25T15:54:09.294+0800 I CONTROL  [initandlisten] MongoDB starting : pid=2
488 port=27017 dbpath=c:\data\db 64-bit host=WIN-1VONBJOCE88
2015-09-25T15:54:09.296+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/W
indows Server 2008 R2
2015-09-25T15:54:09.298+0800 I CONTROL  [initandlisten] db version v3.0.6
……
```


## MongoDB命令行工具
* 启动mongodb服务
net start mongodb

* cd 盘符:/mongodb/bin  （mongo.exe）

* show dbs

* mongodb:数据库

* mongo：mongodb提供的一套数据库命令行工具

* node引入mongodb模块：node操作数据库

* mongoose：框架


## MongoDB
#### 链接数据库
```javaScript
//引入Mongodb模块
var mongodbClient = require("mongodb").MongoClient;

//设置数据库路径
var url = "mongodb://localHost:27017/runoob";

//链接数据库
mongodbClient.connect(url, {useNewUrlParser:true},(error,db)=>{
  // if error throw error ;
  if(!error){
    console.log("数据库链接成功");
  }
})
```
参数：
url:数据库路径
object:是否使用新url解析器
callback：回调是否成功链接数据库，error：错误信息 db：数据库对象

#### 创建存储集合
```javaScript
//引入Mongodb模块
var mongodbClient = require("mongodb").MongoClient;

//设置数据库路径
var url = "mongodb://localHost:27017/runoob";

//链接数据库
mongodbClient.connect(url, {useNewUrlParser:true},(error,db)=>{
  // if error throw error ;
  if(!error){
    console.log("数据库链接成功");
    var dbase = db.db("runoob");
    dbase.createCollection("user",(error，res)=>{
      console.log("user集合创建成功");
    })
  }
})
```
参数：
db.db("runoob")：数据库对象的db方法
createCollection：
* name：集合名称
* callback：回调函数
error:创建错误
res：成功响应


## 数据库操作
#### 插入一条数据
```javaScript
//引入Mongodb模块
var mongodbClient = require("mongodb").MongoClient;

//设置数据库路径
var url = "mongodb://localHost:27017/runoob";

//链接数据库
mongodbClient.connect(url, {useNewUrlParser:true},(error,db)=>{
  if(!error){
    var dbase = db.db("runoob");
    var user = {
      name:"王凯"，
      age:10,
      sex:"famale"
    };
    dbase.collection("user").insertOne(user,(error,res)=>{
      if(!error){
        console.log("数据插入成功");
      }
    })
  }
})
```
