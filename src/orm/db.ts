import { Sequelize } from 'sequelize-typescript';
import { Account } from './models/Account';
import { NoteMetadata } from './models/NoteMetadata';
import { NoteContent } from './models/NoteContent';
const env = require('../utils/environment')

export const sequelize = new Sequelize({
    ...env.db,
    models: [
        Account,
        NoteMetadata,
        NoteContent
    ]
})