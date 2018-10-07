import { ProgramState } from './model'
import { Injectable } from '@angular/core';

@Injectable()
export class State {
    programState: ProgramState = {
        accounts: {},

        artWorks: {
            'oiuyhkjh': {
                id: 'oiuyhkjh',
                author: 'me',
                title: 'My forst artwirk',
                description: 'Un test',
                size: { width: 3, height: 3 },
                grid: [
                    null, 'pixel-red', 'emoji-😁',
                    'pixel-red', 'pixel-white', 'pixel-red',
                    'emoji-😁', 'pixel-red', 'emoji-😂'
                ]
            }
        },

        groupWorks: {
            'klkjhf': {
                id: 'klkjhf',
                author: 'me',
                title: 'Ile paradisiaque',
                description: 'On souhaite créer une ile où il fait bon vivre. Proposez des zones interressantes et variées !',
                zoneSize: { width: 15, height: 15 },
                size: { width: 10, height: 10 },
                grid: [
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, { ownerId: 'lolite', workItemId: 'groupwork-swujb', accepted: false }, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, { ownerId: 'lolite', workItemId: 'groupwork-swujb', accepted: false }, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null
                ]
            },

            'swujb': {
                id: 'swujb',
                author: 'lolite',
                title: 'Hopitâl',
                description: 'Un grand H en noir sur blanc, contribuez par des lots noirs.',
                zoneSize: { width: 3, height: 3 },
                size: { width: 5, height: 5 },
                grid: [
                    { ownerId: 'lolite', workItemId: 'artwork-oiuyhkjh', accepted: false }, null, null, null, null,
                    null, { ownerId: 'lolite', workItemId: 'artwork-oiuyhkjh', accepted: false }, null, null, null,
                    null, null, { ownerId: 'lolite', workItemId: 'artwork-oiuyhkjh', accepted: false }, null, null,
                    null, null, null, null, { ownerId: 'lolite', workItemId: 'artwork-oiuyhkjh', accepted: false },
                    null, null, null, null, { ownerId: 'lolite', workItemId: 'artwork-oiuyhkjh', accepted: false }
                ]
            }
        }
    }
}