import { Component, Input, Output, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core'
import * as Model from './model'
import { State } from './state'

@Component({
    selector: 'art-work-detail',
    templateUrl: './art-work-detail.component.html',
    styles: [`
    .selected {
        border: 1px solid black;
    }
    `]
})
export class ArtWorkDetailComponent implements OnDestroy {
    private smartContractChangeListener = () => {
        this.updateFromContract()
        if (!this.changeDetectorRef['destroyed'])
            this.changeDetectorRef.detectChanges()
    }

    filterAuthor = null

    artWork: Model.ArtWork = null
    participations: {
        id: string
        pseudo: string
        count: number
    }[] = []

    @Input()
    artWorkId: string = null

    @Output()
    cancel = new EventEmitter<void>()

    constructor(public state: State, private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.state.smartContract.addChangeListener(this.smartContractChangeListener)
        this.updateFromContract()
    }

    ngOnDestroy() {
        this.state.smartContract.removeChangeListener(this.smartContractChangeListener)
    }

    private updateFromContract() {
        this.artWork = this.state.programState.artWorks[this.artWorkId]
        if (this.artWork.participations) {
            this.participations = Object.keys(this.artWork.participations).map(id => ({
                id,
                pseudo: this.pseudoOrId(id),
                count: this.artWork.participations[id]
            }))
        }
        else {
            this.participations = []
        }
    }

    pseudoOrId(id: string) {
        return (this.state.identities[id] && this.state.identities[id].pseudo) || id
    }

    sendMessage(artWorkId: string, textInput: HTMLInputElement) {
        this.state.suppyChain.sendMessageOnArtWork(this.state.user.id, artWorkId, textInput.value)
        textInput.value = ''
    }
}
