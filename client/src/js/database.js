import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
    openDB('contact_db', 1, {
        upgrade(db){
            if(db.objectStoreNames.contains('contacts')){
                console.log('contacts store already exists');
                return;
            }
            db.createObjectStore('contacts', { keypath: 'id', autoIncrement: true });
            console.log('contacts store created.');
        }
    })
}

export const getDb = async () => {
    console.log('GET from the database');

    // create connectio to the IndexedDB database and the version we want to use
    const contactDb = await openDB('contact_db', 1);

    // create a new transaction and specify the store and data privileges.
    const tx = contactDb.transaction('contacts', 'readonly');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // Use the .getAll() method to get all data in the database
    const request = store.getAll();

    // Get confirmation of the request
    const result = await request;
    console.log('result.value', result);
    return result;
};

export const postDb = async (name, email, phone, profile) => {
    console.log('POST to the database');

    // create a connection to the database and specify the version we want to use.
    const contactDb = await openDB('contact_db', 1);

    // create a new transaction and specify the store and data privilages
    const tx = contactDb.transaction('contacts', 'readwrite');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // Use the .add() method on the store and pass in the content
    const request = store.add({ name: name, email: email, phone: phone, profile: profile });

    // Get confirmation of the request
    const result = await request;
    console.log('Data saved to the database.', result);
}