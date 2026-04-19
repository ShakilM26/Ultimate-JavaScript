// জাভাস্ক্রিপ্ট কীভাবে কোড রান করার আগে ভেরিয়েবলগুলোকে "চেনে", সেটাই হলো হয়েস্টিং।


// 📌 ১. হোস্টিং (Hoisting) কী?
// জাভাস্ক্রিপ্ট যখন কোনো কোড রান করে, তখন সে পুরো কোডটা একবার পড়ে দেখে। এই সময় সে সব ভেরিয়েবল এবং ফাংশন ডিক্লেয়ারেশনগুলোকে খুঁজে বের করে মেমরিতে জায়গা দেয়। 
// এটাকে মনে হয় যেন সে ভেরিয়েবলগুলোকে টেনে কোডের একদম উপরে (Top) তুলে দিচ্ছে। এটাই হোস্টিং।


// 🌼 var এর ক্ষেত্রে হোস্টিং:
// var দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে সেটি উপরে উঠে যায়, কিন্তু তার মান (Value) উপরে যায় না। ফলে ডিক্লেয়ার করার আগে সেটি ব্যবহার করলে undefined দেখায়।

console.log(myPet) // output: undefined (No Error)
var myPet = "Cat";


// 🌼 let and const এর ক্ষেত্রে হোস্টিং:
// এরাও হোস্টেড হয়, কিন্তু এদেরকে একটি Temporal Dead Zone (TDZ) এ রাখা হয়। অর্থাৎ, ডিক্লেয়ার করার আগে এদের কল করলে জাভাস্ক্রিপ্ট সরাসরি এরর দিবে।

// console.log(myLaptop); // ReferenceError!
let myLaptop = "MacBook";


// 📌 ২. গ্লোবাল বনাম লোকাল স্কোপ (The Boundaries)

// 🌎 গ্লোবাল স্কোপ (Global Scope)
// কোডের একদম বাইরে যা থাকে। এটি পুরো প্রোগ্রামের যেকোনো জায়গা থেকে এক্সেস করা যায়।
// সুবিধা: সব জায়গা থেকে তথ্য শেয়ার করা যায়।
// অসুবিধা: ভেরিয়েবলের নাম মিলে গেলে কলিশন (Collision) হতে পারে।

// 🌕 লোকাল স্কোপ (Local Scope)
// যখন কোনো ভেরিয়েবল নির্দিষ্ট সীমানার ভেতরে থাকে। একে দুই ভাগে ভাগ করা যায়:
// Function Scope: শুধুমাত্র ওই ফাংশনের ভেতরে কাজ করবে।
// Block Scope: শুধুমাত্র { } ব্র্যাকেটের ভেতরে (যেমন if, for) কাজ করবে।

let globalVar = "This is Global";

function scopeTest() {
    let localVar = "I am only for this function";

    if (true) {
        let blockVar = "I am only for if block";
        console.log(globalVar); // will work
        console.log(localVar); // will work
    }
        // console.log(blockVar) // Error! Not available outside the block.
}

scopeTest();


// 📌 ৩. লেক্সিক্যাল স্কোপ (Lexical Scope)
// সহজ কথায়—একটি নেস্টেড (ভিতরের) ফাংশন তার বাইরের ফাংশনের ভেরিয়েবলগুলো এক্সেস করতে পারে। কিন্তু উল্টোটা সম্ভব না।

function outer() {
    let outerValue = "I am outer function";

    function inner() {
        console.log(outerValue); // will work (It's a Lexical Scope)
    }
    inner() ;
}

outer();



// ৪. কেন এই পার্থক্য জানা জরুরি ❓
// Hoisting না বুঝলে আপনি কেন undefined পাচ্ছেন বা কেন এরর আসছে তা ধরতে পারবেন না।
// Scope না বুঝলে আপনি অজান্তেই গ্লোবাল ভেরিয়েবল নষ্ট করে ফেলবেন (Variable Pollution), যা বড় প্রজেক্টে মারাত্মক বাগ তৈরি করে।

// 🏅 Logic Test
var fruit = "Apple";
function eat() {
    console.log(fruit);
    var fruit = "Mango";
}
eat();

// Global fruit = "Apple" ignore হয়ে গেছে, কারণ function এর ভিতরে same name variable আছে
// Local scope global scope কে shadow করেছে → এটাকে বলে Variable Shadowing



// 🔀🔥 Side-by-Side Comparison

// var   → hoisted + initialized = undefined → output: undefined
// let   → hoisted + NOT initialized (TDZ) → ReferenceError
// const → hoisted + NOT initialized (TDZ) → ReferenceError
