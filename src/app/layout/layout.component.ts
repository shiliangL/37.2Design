import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  menuList = [
    { text: '快速上手', isSubMenu: false, isOpen: false, subMenu: [] },
    { text: '教程', isSubMenu: true, isOpen: false, subMenu: [] },
    { text: '核心知识', isSubMenu: true, isOpen: false, subMenu: [] },
    { text: '拓展', isSubMenu: true, isOpen: false, subMenu: [] },
    { text: 'API参考手册', isSubMenu: true, isOpen: false, subMenu: [] },
  ]

  openChange(value) {
    console.log(value);
    
  }

  selectMenu(){
    
  }

  ngOnInit() {
    
  }

}
