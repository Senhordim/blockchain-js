import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core'
import * as Model from './model'
import * as Paint from './paint'
import { State } from './state'

@Component({
    selector: 'art-work-icon',
    templateUrl: './art-work-icon.component.html'
})
export class ArtWorkIconComponent implements AfterViewInit {
    @ViewChild("canvas")
    canvas

    private context: CanvasRenderingContext2D
    private _artWorkId: string = null

    constructor(
        public state: State
    ) { }

    @Input()
    set artWorkId(artWorkId) {
        this._artWorkId = artWorkId

        this.paint()
    }

    get artWorkId() {
        return this._artWorkId
    }

    @Output()
    selected = new EventEmitter<null>()

    select() {
        this.selected.emit()
    }

    ngAfterViewInit() {
        let canvas = this.canvas.nativeElement
        this.context = canvas.getContext("2d")

        this.paint()
    }

    private paint() {
        this._artWorkId && this.context && Paint.drawWorkItem(this.state.programState, this._artWorkId, 400, 400, this.context)
    }
}