// 📖 JavaScript এ code run হওয়ার আগে declaration গুলো memory-তে উঠে যায় — এটাকেই hoisting বলে।

// 🔸 1. Regular Function (Function Declaration)
// এটা পুরোপুরি hoisted হয় (name + body)

sayHello;

function sayHello() {
    console.log('Hello');
}

// JS আগে থেকেই function টাকে memory-তে তুলে রাখে, তাই declare করার আগেই call করা যায়

// 🔸 2. Arrow Function (Function Expression)
// এটা আসলে variable এর মধ্যে রাখা function, তাই variable hoisting rules follow করে

sayHi;

function sayHi() {
    console.log('Hi');
}

// const sayHi hoisted হয়, কিন্তু value assign হয় না, তাই call করলে → ReferenceError


// -----------------------------------------------------------------
// 🔷 JavaScript Execution Phase (2 Step)
// 1. Creation Phase (Memory Creation)
// 2. Execution Phase (Code Run)

sayHello();
var x = 10;

function sayHello() {
    console.log("Hello");
}

// 🧠 Creation Phase (Memory Allocation)
// JS engine প্রথমে পুরো code scan করে এবং memory allocate করে:

// Memory:
sayHello // → function পুরো body সহ
x        // → undefined

// function → পুরোটা store হয়েছে, variable → শুধু undefined

// Execution Phase
// Line 1: sayHello();  → function already আছে → ✅ run
// Line 2: x = 10       → এখন value assign হয়



// Function Declaration:
//    ✔ Memory তে পুরো function যায়
//    ✔ আগে call করা যায়

// Function Expression (arrow/normal):
//    ✔ Variable হিসেবে treat হয়
//    ❌ আগে call করা যায় না