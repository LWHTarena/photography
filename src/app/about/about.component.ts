import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    constructor() {
        console.log('heloo********');
        this.initEmit.emit('about子组件初始化成功');
    }

    @Output() initEmit = new EventEmitter<string>();

    ngOnInit(): void {
    }
}
