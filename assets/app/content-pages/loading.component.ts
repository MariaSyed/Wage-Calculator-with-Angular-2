import {Component} from '@angular/core';

@Component({
    selector: 'loading-indicator',
    template: `<div class="loader loader-small"></div>`
})
export class LoadingIndicator { }

export class LoadingComponent {
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}
