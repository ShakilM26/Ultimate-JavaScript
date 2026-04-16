// 📖 Template Literals হলো আধুনিক জাভাস্ক্রিপ্টের (ES6) এমন একটি ফিচার যা স্ট্রিং নিয়ে কাজ করাকে অনেক বেশি সহজ এবং পরিষ্কার করে দেয়। 
// সাধারণ স্ট্রিংয়ের জন্য আমরা সিঙ্গেল কোট (') বা ডাবল কোট (") ব্যবহার করি, কিন্তু টেমপ্লেট লিটারালের জন্য ব্যবহার করা হয় ব্যাকটিক (`)।

// ১. কেন Template Literals
// আগে যখন স্ট্রিংয়ের সাথে কোনো ভেরিয়েবল যুক্ত করতাম, তখন আমাদের প্লাস (+) চিহ্ন দিয়ে জোড়া দিতে হতো

const name = 'Samia';
const age = 25;

const with_string = "My name is " + name + " and I am " + age + " years old.";
const with_literals = `My name is ${name} and I am ${age} years old.`;

console.log(with_string);
console.log(with_literals);
// -----------------------------------------------------------


// ২. মাল্টি-লাইন স্ট্রিং (Multi-line Strings)
// আগে স্ট্রিংয়ের ভেতরে নতুন লাইন নিতে হলে \n ব্যবহার করতে হতো। ব্যাকটিক ব্যবহার করলে সরাসরি Enter দিলেই সেটি নতুন লাইন হিসেবে গণ্য হবে।

const list1 = "1. JavaScript\n 2. React\n 3. Node.js"
const list2 = `1. JavaScript
2. React
3. Node.js`;

console.log(list2)
// -----------------------------------------------------------


// ৩. এক্সপ্রেশন এবং ক্যালকুলেশন (Expressions inside Backticks)
// ${} এর ভেতরে শুধুমাত্র ভেরিয়েবল নয়, যেকোনো গাণিতিক হিসাব বা লজিকও চালানো যায়।

const price = 500;
const tax = 0.15;

const total = `Total Price: ${price + (price * tax)} BDT`;
console.log(total);
// -----------------------------------------------------------


// ৪. প্র্যাকটিক্যাল ব্যবহার (HTML Generation)
const product = "Laptop";
const prices = 75000;

// ব্যাকটিক দিয়ে সরাসরি HTML ফরম্যাট করা
const myHTML = `
<div class='card'>
     <h2>Product: ${product}</h2>
     <p>Price: ${prices} BDT</p>
     <button onclick='buyNow()'>Buy Now</button>
</div>
`
console.log(myHTML);