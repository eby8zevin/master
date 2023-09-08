class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  method1() {}

  method2() {}
}

const myInstance = new MyClass("value1", "value2");
console.log(myInstance.property1);
myInstance.method1();

class Book {
  constructor(title, author, ISBN, availability = true) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availability = availability;
  }
}
