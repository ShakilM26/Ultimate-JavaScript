// 📌 জাভাস্ক্রিপ্টে প্রধানত ৫ ধরণের অপারেটর সবচেয়ে বেশি ব্যবহৃত হয়:

// ✔️ 1. Arithmetic Operators
// Addition, Subtraction, Multiply, Division
// % (Modulus): ভাগশেষ বের করার জন্য
// ** (Exponentiation): পাওয়ার বা ঘাত বের করার জন্য (যেমন: 2^3 = 8) 
// ++ (Increment): মান ১ বাড়ানো
// -- (Decrement): মান ১ কমানোর জন্য

let a = 10;
let b = 3;
console.log(a % b);
console.log(a ** 2);

// ✔️ 2. Assignment Operators
// = : মান অ্যাসাইন করা (যেমন: x = 5)
// += : আগের মানের সাথে যোগ করে রাখা (যেমন: x += 5 মানে x = x + 5)
// -=, *=, /= একইভাবে কাজ করে।
// --------------------------------------------------------------


// ✔️ 3. Comparison Operators
// দুটি ভ্যালুর মধ্যে তুলনা করার জন্য এগুলো ব্যবহৃত হয়। এর রেজাল্ট সবসময় true বা false হয়।

// == : শুধু মান সমান কি না দেখে।
// === : মান এবং ডেটা টাইপ দুইটাই সমান কি না দেখে (এটাই ব্যবহার করা সবচেয়ে নিরাপদ)।
// != : সমান নয় কি না।
// > (বড়), < (ছোট), >= (বড় বা সমান), <= (ছোট বা সমান)।

console.log(5 == '5'); // true (কারণ মান ৫)
console.log(5 === '5'); // false (কারণ একটি সংখ্যা, অন্যটি স্ট্রিং)
// === (Strict Equality)
// --------------------------------------------------------------


// ✔️ 4. Logical Operators
// একাধিক শর্ত (Condition) চেক করার জন্য এগুলো ব্যবহার করা হয়।
// && (Logical AND): যদি সবগুলো শর্ত সত্য হয়, তবেই রেজাল্ট true হবে।
// || (Logical OR): যদি যেকোনো একটি শর্ত সত্য হয়, তবেই রেজাল্ট true হবে।
// ! (Logical NOT): সত্যকে মিথ্যা এবং মিথ্যাকে সত্য বানিয়ে দেয়।

let hasLicense = true;
let isAdult = false;

console.log(hasLicense && isAdult) // false (যেহেতু দুইটাই সত্য নয়)
console.log(hasLicense || isAdult) // true (যেহেতু একটি সত্য)
// --------------------------------------------------------------


// ✔️ 5. Ternary Operator
// এটি if-else এর একটি ছোট ভার্সন। এটি ৩টি অংশ নিয়ে কাজ করে।
// সিনট্যাক্স: শর্ত ? সত্য হলে এই কাজ : মিথ্যা হলে এই কাজ

let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';
console.log(status);

// 🏅 Practice
// Suppose you want to create a discount system. Where:
// 1. The price of the product must be more than 100 taka.
// 2. The user must have a coupon code.
let price = 120;
let hasCoupon = true;

let canGetDiscount = (price > 100 && hasCoupon === true);
console.log('Can get discount?', canGetDiscount);

// অপারেটরগুলোর মধ্যে === (Strict Equality) এবং লজিক্যাল অপারেটর গুলো সবচেয়ে বেশি কাজে লাগে যখন কোনো অ্যাপের লজিক লিখা হয়।