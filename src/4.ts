class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }
    getKey(): Key {
        return this.key
    }
}

abstract class House {
    door: false;
    key: Key;
    tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
        }   
    }
    public abstract openDoor(key: Key): void
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            console.log('The door is now open.');
        } else {
            console.log('Invalid key. Cannot open the door.');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};