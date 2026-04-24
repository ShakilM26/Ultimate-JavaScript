// Execution Context and Call Stack

// Execution Context = যেখানে JavaScript কোড execute হয়

// JS কোড run হওয়ার সময় সবকিছু একটা environment এর মধ্যে run করে—এই environment টাকেই বলে Execution Context।

// ⚙️ Execution Context এর 3টা অংশ
// 1. Variable Environment - variables store হয় (let, const, var)
// 2. Scope Chain - parent scope access করার link
// 3. this keyword


// 🧩 Execution Context এর Types
// 1. Global Execution Context (GEC) - program start হলে automatically create হয়
// 2. Function Execution Context (FEC) - যখনই function call হয় → নতুন context create হয়

var x = 10;
function foo() {
    var y = 20;
    console.log(x+y);
}
foo();

// Step 1: Global Execution Context তৈরি
// x = undefined | foo = function
// 👉 এটাকে বলে Creation Phase

// Step 2: Execution Phase
// x = 10 | foo() call

// Step 3: Function Execution Context (foo)
// y = undefined | তারপর y = 20
// তারপর console.log(30)

// ----------------------------------------------------------------

// 👉 Call Stack = function execution track করার stack
// এটা একটা stack (LIFO → Last In First Out)



// ⚡ Execution Context + Call Stack Together
// 👉 Relationship:

// Execution Context তৈরি হয়
// Call Stack এ push হয়
// কাজ শেষ হলে pop হয়