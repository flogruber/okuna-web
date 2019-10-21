import { IStorageService } from '~/services/storage/IStorage';
import { IOkStorage } from '~/services/storage/lib/okuna-storage/IOkStorage';
import okunaStorageFactory from '~/services/storage/lib/okuna-storage/factory';
import { injectable } from '~/node_modules/inversify';

@injectable()
export class StorageService implements IStorageService {
    // @ts-ignore
    private localForage: LocalForage;

    private identifier: number;

    constructor() {
        this.identifier = Math.random();
        console.log('Initializing storage service!');
    }

    // @ts-ignore
    setLocalForage(localForage: LocalForage) {
        console.log('Setting local forage to ', localForage, 'with identifier', this.identifier);
        this.localForage = localForage;
    }

    getLocalForageStorage<T>(namespace: string): IOkStorage<T> {
        console.log('Retrieving local forage', this.localForage, ' with identifier ', this.identifier);
        if (!this.localForage) throw new Error('this.localForage is undefined');

        return okunaStorageFactory.makeLocalForage<T>(
            namespace,
            this.localForage
        );
    }

    getIdentifier(): number {
        return this.identifier;
    }
}




