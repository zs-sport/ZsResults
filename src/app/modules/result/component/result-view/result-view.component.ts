import { Component, Input, OnInit } from '@angular/core';

import { Result } from '../../model/result.model';

@Component({
  selector: 'result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {

    private separator = "-";

    @Input() result: Result;

    constructor() {
        let test = false;

        if (this.result) {
            test = true;
        }
    }

    ngOnInit() {
        let test = false;
        
        if (this.result) {
            test = true;
        }
    }
}
