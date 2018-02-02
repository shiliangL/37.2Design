### Angular4最佳实践

### 1.工具架子，Angular CLI
安装cnpm install -g @angular/cli

安装初始化项目ng new angular-web

ng serve 启动服务（ ng serve --open,启动服务并且打开浏览器）

> 命令行创建文件
- 创建组件 ng g component component-name
- 创建类   ng g class class-name   
- 创建指令 ng g directive directive-name   
- 创建模块 ng g module module-name   
- 创建管道 ng g pipe pipe-name   
- 创建服务 ng g service service-name

### 2.组件Component
1. ng g component header
```
//生成文件
header.component.html(视图)
header.component.css（样式）
header.component.ts（主要文件）
header.component.spec.ts（测试文件）
```
```
//header.component.t文件
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  }
}

```
@Component()是一个装饰器，参数是一个元数据对象。
参数说明：
templateUrl：模板文件路径
selector：组件选择器名称，一般采取横杠方式
styleUrls：样式文件路径

### 3.样式处理
1. 给宿主元素添加样式
```
:host {   
  display: block;   
  margin: 10px 0;   
  background: #eee;  
}
```
:host就表示当前样式模板的宿主元素。 注意：默认情况下，自定义组件的display属性是空字符串;
2. 某条件下需要改变(宿主元素具有active类时)
```
:host(.active) {   
  background: blue;  
}
```
### 4.属性与事件绑定
简单改变属性
```
//html
<button [disabled]="isChanged" (click)="clickChange()">按钮</button> 
//js

clickChange(){
  this.isChanged = !this.isChanged
}
```
2 某些添条件下添加类名
```
// html
<div [ngClass]="isActive" (click)="clickChange()"></div> 
// ts
this.isActive = {active: this.isTrue}
clickChange(){
  this.isTrue = !this.isTrue
}
或者这样
// html
<div [ngClass]="{'active': isTrue}" (click)="clickChange()"></div> 
// ts
clickChange(){
  this.isTrue = !this.isTrue
}
```
3.  双向绑定 双向绑定使用ngModel：
温馨提醒：根模块需要加载 import { FormsModule } from '@angular/forms';  
 ```
 // app/app.module.ts   
import { FormsModule } from '@angular/forms';   
@NgModule({   
  declarations: [...],   
  imports: [   
    ...     
    FormsModule   
  ],   
  providers: [],   
  bootstrap: [AppComponent]  
})

//  html
<input [(ngModel)]="inputValue">  
<p>{{inputValue}}</p>

 ```
// 如果需要监听 ngModel的值可以值么干
```
<input [(ngModel)]="inputValue" (ngModelChange)="ngModelChange($event.target.value)">  
<p>{{inputValue}}</p>
```
4.事件绑定使用(),类似原生的JavaScript事件，Angular中每个事件监听函数都会有一个$event作为参数返回；

### 5.组件之间的通讯(@Input和@Output)
```
//粑粑给儿子
//html父亲组件内
<儿子组件 [msg]="'粑粑给儿子的值'"></儿子组件>

//儿子组件.ts文件内
@Input() msg: string;// 接收传下来的值


//儿子给粑粑
//html儿子组件
//儿子组件.ts文件内
@Output() eventOutput: EventEmitter<string> = new EventEmitter();(定义一个事件,把参数往外面抛)

onClickSonBnt(){
  this.emit.eventOutput('往外面抛的值')
}
// 粑粑中
<儿子组件 (eventOutput)="getFromSon($event)"></儿子组件>

//ts
getFromSon(val){
  console.log(val)//接收子组件往外丢的值
}
```

### 指令