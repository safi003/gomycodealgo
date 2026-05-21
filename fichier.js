class Contact{
    constructor(name,phone){
        this.name = name,
        this.phone = phone
    }
}

class Node {
  constructor(contact) {
    this.contact = contact;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
   append(contact) {
    const newNode = new Node(contact);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
    forward() {
    let current = this.head;

    while (current) {
      console.log(current.contact.name, current.contact.phone);
      current = current.next;
    }
  }
    backward() {
    let current = this.tail;

    while (current) {
      console.log(current.contact.name, current.contact.phone);
      current = current.prev;
    }
  }

}

class HashTable {
  constructor() {
    this.table = {};
  }

  add(contact) {
    this.table[contact.name] = contact;
  }

  get(name) {
    return this.table[name] || null;
  }
}

class ContactManager {
  constructor() {
    this.list = new DoublyLinkedList();
    this.hash = new HashTable();
  }
  addContact(name, phone) {
    const contact = new Contact(name, phone);

    this.list.append(contact);
    this.hash.add(contact);
  }

  searchByName(name) {
    return this.hash.get(name);
  }

    searchByKeyword(keyword) {
    let current = this.list.head;
    const results = [];

    while (current) {
      if (current.contact.name.toLowerCase().includes(keyword.toLowerCase())) {
        results.push(current.contact);
      }

      current = current.next;
    }

    return results;
  }
}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cm = new ContactManager();

function menu() {
  console.log(`
1. Add Contact
2. Search by Keyword
3. Search by Name
4. View Forward
5. View Backward
6. Exit
  `);

  rl.question("Enter option: ", (choice) => {

    if (choice === "1") {
      rl.question("Name: ", (name) => {
        rl.question("Phone: ", (phone) => {
          cm.addContact(name, phone);
          console.log("Contact added.");
          menu();
        });
      });

    } else if (choice === "2") {
      rl.question("Keyword: ", (key) => {
        const results = cm.searchByKeyword(key);

        results.forEach(c =>
          console.log(c.name, c.phone)
        );

        menu();
      });

    } else if (choice === "3") {
      rl.question("Name: ", (name) => {
        const c = cm.searchByName(name);

        if (c) console.log(c.name, c.phone);
        else console.log("Not found");

        menu();
      });

    } else if (choice === "4") {
      cm.list.forward();
      menu();

    } else if (choice === "5") {
      cm.list.backward();
      menu();

    } else {
      rl.close();
    }
  });
}

menu();