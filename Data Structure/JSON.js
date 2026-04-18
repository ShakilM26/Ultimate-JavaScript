// JSON - JavaScript Object Notation
// যখন কোনো ওয়েবসাইট বা অ্যাপ বানানো হয়, তখন সার্ভার থেকে ডেটা আনা বা সার্ভারে ডেটা পাঠানোর জন্য এই ফরম্যাটটিই সবচেয়ে বেশি ব্যবহৃত হয়।

// 📖 JSON হলো ডেটা জমা রাখা বা আদান-প্রদান করার একটি টেক্সট ফরম্যাট। এটি দেখতে অনেকটা জাভাস্ক্রিপ্ট অবজেক্টের মতোই, কিন্তু এর নিজস্ব কিছু strict rules আছে।

// কেন JSON ব্যবহার করা হয় ❓
// এটি অনেক হালকা (Lightweight)।
// মানুষ এবং কম্পিউটার উভয়েই সহজে read করতে পারে।
// সব প্রোগ্রামিং ল্যাঙ্গুয়েজ (Python, PHP, Java) এটি সাপোর্ট করে।

// JSON 🆚 JavaScript Object
// যদিও এরা দেখতে প্রায় এক, তবুও JSON-এ কিছু নির্দিষ্ট নিয়ম মানতে হয়:

// Keys: JSON-এ প্রোপার্টির নাম বা Key অবশ্যই Double Quotes (" ") এর ভেতরে হতে হবে।
// Strings: স্ট্রিং ভ্যালুও ডাবল কোটেশনে হতে হবে।
// Methods: JSON-এ কোনো ফাংশন বা মেথড রাখা যায় না।

// 🎯 JavaScript Object
let user = {
    name: 'Damien',
    age: 25
};

// 🎯 JSON Format
{
    "name"; "Adnan",
    "age"; 25
}

// জাভাস্ক্রিপ্টে JSON ম্যানিপুলেশন (Coding)
// জাভাস্ক্রিপ্ট দিয়ে যখন আমরা কাজ করি, তখন আমাদের প্রায়ই JSON থেকে অবজেক্টে বা অবজেক্ট থেকে JSON-এ কনভার্ট করতে হয়। এর জন্য দুটি প্রধান মেথড আছে:
// 📌 1. JSON.stringify()
// কোডের কোনো অবজেক্টকে যখন সার্ভারে পাঠাতে হবে, তখন সেটিকে স্ট্রিং বা JSON ফরম্যাটে রূপান্তর করতে এটি ব্যবহার করা হয়।
const student = {
    id: 101,
    name: 'Rahat',
    skills: ["JS", "React"]
};

const jsonString = JSON.stringify(student);
console.log(jsonString);


// 📌 2. JSON.parse()
// সার্ভার থেকে যখন ডেটা আসে (যা একটি স্ট্রিং), তখন জাভাস্ক্রিপ্টে কাজ করার জন্য সেটিকে আবার অবজেক্টে রূপান্তর করতে এটি লাগে।

const serverData = '{"name": "Sherlock Holmes", "Address": "221 b Becker Street"}';
const info = JSON.parse(serverData);
console.log(info.name);



// JSON-এ কী কী ডেটা রাখা যায় ❓
// JSON নিচের ডেটা টাইপগুলো সাপোর্ট করে:

// 1. Strings ("Hello")
// 2. Numbers (10, 25.5)
// 3. Objects (Nested JSON)
// 4. Arrays ([1, 2, 3])
// 5. Booleans (true, false)
// 6. Null