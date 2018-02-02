import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { 
  }
  NavList = [
    { url: '', title: '特性' },
    { url: '', title: '文档' },
    { url: '', title: '资源' },
    { url: '', title: '会议' },
    { url: '', title: '博客' },
    { url: '', title: '关于中文版' },
  ]
  searchValue = ""

  ngOnInit() {
  }

}
