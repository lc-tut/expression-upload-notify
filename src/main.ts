import { onEdit, testNotification } from './App';

interface Global {
    onEdit: typeof onEdit;
    testNotification: typeof testNotification;
}
declare const global: Global;

// entryPoints
global.onEdit = onEdit;
global.testNotification = testNotification;
