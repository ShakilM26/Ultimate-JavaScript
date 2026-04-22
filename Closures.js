// যখন একটি ফাংশন তার বাইরের স্কোপের ভেরিয়েবলগুলোকে মনে রাখে (এমনকি বাইরের ফাংশনটি শেষ হয়ে যাওয়ার পরেও), তখন তাকে ক্লোজার বলে।

// ১. ক্লোজার কীভাবে কাজ করে? (The Mechanism)
// জাভাস্ক্রিপ্টে একটি ফাংশনের ভেতর অন্য একটি ফাংশন লেখা যায়। ভেতরের ফাংশনটি সবসময় তার উপরের (Parent) ফাংশনের ভেরিয়েবলগুলো এক্সেস করতে পারে।

function outer() {
    let count = 0; // এটি বাইরের ফাংশনের ভেরিয়েবল

    function inner() {
        count ++; // ভেতরের ফাংশন বাইরের 'count' কে ব্যবহার করছে
        console.log(count);
    }
    return inner;
}

const counter = outer();

counter();
counter();
counter();

// 🧩 এখানে কী ঘটল?
// outer() run হলো
// count = 0 create হলো
// inner function return হলো
// কিন্তু ❗ outer শেষ হলেও count মরে যায় নাই
// কারণ inner function তার সাথে count কে closure হিসেবে ধরে রেখেছে


// 📦 Closure Internals (Important for Interview)
// Closure তৈরি হয় যখন:
// 👉 একটি function
// 👉 তার lexical scope এর variables
// 👉 একসাথে bind হয়ে যায়
// 👉 এটাকে বলে: Lexical Environment


// 🎯 Real Life Analogy

// outer() = একটি factory
// inner() = worker
// count = private data
// 👉 worker বাইরে চলে গেলেও তার সাথে private data থাকে

// Multiple Closure
function createCounter() {
    let count = 0;

    return function() {
        count ++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2()); // separate memory


// Step 3: Data Privacy
function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
        },
        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount();

account.deposit(500);
console.log(account.getBalance());