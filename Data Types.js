// 📌 জাভাস্ক্রিপ্টে ডেটা টাইপকে প্রধানত দুটি ভাগে ভাগ করা যায়:
// Primitive Data Types (সহজ বা মৌলিক ডেটা)
// Non-Primitive / Reference Data Types (জটিল বা অবজেক্ট ভিত্তিক ডেটা)

// ✔️ Primitive: এগুলো হলো সবচেয়ে বেসিক ডেটা টাইপ। এগুলো মেমরিতে সরাসরি মান (Value) জমা রাখে।
// Number, String, Boolean, Undefined, Null, Symbol & BigInt (Big Digit or Unique ID)
// Undefined - যখন একটি ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু কোনো মান দেওয়া হয় না। যেমন: let x; (এখানে x এর মান undefined)।

// ✔️ Non-Primitive: এগুলো একাধিক তথ্য বা জটিল স্ট্রাকচার জমা রাখতে পারে। এগুলো মেমরিতে সরাসরি মান জমা না রেখে একটি রেফারেন্স (ঠিকানা) জমা রাখে।
// Object: Key-Value pair হিসেবে ডেটা রাখে। যেমন কোনো ইউজারের সব তথ্য একসাথে রাখা।

// 🌻 Example:
const user = {
    name: 'Samia',
    age: 24,
    isIntern: true
};

// Array: একই সাথে অনেকগুলো মান একটি লিস্ট হিসেবে রাখা।
const skills = ['JavaScript', 'Python', 'React'];

// ✔️ typeof Operator: কোনো ভেরিয়েবল কোন টাইপের ডেটা হোল্ড করছে, তা জানার জন্য।
let name = "Learning JS";
let score = 85;
let isPassed = true;
let person = {name: "Samia"};
let items = [1, 2, 3];

console.log(typeof name); // string
console.log(typeof person); // object
console.log(typeof items); // object (অ্যারেও এক ধরণের অবজেক্ট)

console.log(typeof null) // 👇
// জাভাস্ক্রিপ্টে typeof null চেক করলে এটি "object" দেখায়। এটি জাভাস্ক্রিপ্টের শুরু থেকে থাকা একটি ছোট ভুল (Bug), যা এখন আর ঠিক করা সম্ভব নয় 
// কারণ অনেক ওয়েবসাইট ভেঙে যাবে। তাই মনে রাখবেন, Null একটি Primitive type, যদিও এটি object দেখায়।

// 💡 Interesting Fact
// জাভাস্ক্রিপ্ট একটি Dynamically Typed ল্যাঙ্গুয়েজ। এর মানে হলো, আপনি একটি ভেরিয়েবলে প্রথমে সংখ্যা রাখলেন, পরে আবার স্ট্রিং রাখলেন—জাভাস্ক্রিপ্ট এতে রাগ করবে না।
let data = 10; // number
data = 'Hello' // string