
// 🔰 Asynchronous প্রোগ্রামিং বোঝা মানে হলো জাভাস্ক্রিপ্টের "মস্তিষ্ক" কীভাবে কাজ করে তা বুঝে ফেলা। এটি এমন একটি কনসেপ্ট যা জাভাস্ক্রিপ্টকে 
// একসাথে অনেকগুলো কাজ (যেমন: সার্ভার থেকে ডেটা আনা, টাইমার চালানো) করার ক্ষমতা দেয়, মেইন থ্রেডকে ব্লক না করেই।


// 🔥 ১. setTimeout (The Timer)
// এটি জাভাস্ক্রিপ্টের সবচেয়ে বেসিক অ্যাসিংক্রোনাস ফাংশন। এটি কোনো একটি কাজকে নির্দিষ্ট সময় পর রান করতে সাহায্য করে।

console.log("I'll come first");

setTimeout(() => {
    console.log("2. I'll be back in 2 seconds");
}, 2000); // 2000 ml second = 2 second

console.log("3. I'll be there before line number 2!")

// কেন ৩ নম্বর আগে আসলো ❓ 
// কারণ জাভাস্ক্রিপ্ট setTimeout-কে দেখে তাকে সাইড করে রেখে দেয় এবং পরের কোডগুলো এক্সিকিউট করতে থাকে। একেই বলে Non-blocking আচরণ।


// 🔥 ২. Promises (The Commitment)
// প্রমিজ হলো ভবিষ্যতের কোনো একটি রেজাল্ট। এটি হয় সফল হবে (Resolve) অথবা ব্যর্থ হবে (Reject)। 
// যখন আমরা ইন্টারনেট থেকে কোনো ডেটা আনি, তখন প্রমিজ ব্যবহার করা হয়।

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if(success) {
        resolve("The job was successful!");
    } else {
        reject("Sorry, there was a problem!");
    }
});

myPromise
.then((data) => console.log(data)) // If successful will come here
.catch((error) => console.log(error)) // If it fails, it will come here


// 🔥 ৩. Async/Await (The Modern Way)
// এটি প্রমিজ হ্যান্ডেল করার সবচেয়ে সহজ এবং ক্লিন পদ্ধতি। এটি কোডকে দেখতে সিঙ্ক্রোনাস কোডের মতো মনে হয়, কিন্তু কাজ করে অ্যাসিংক্রোনাসলি।

// 🌼 Async: এটি একটি ফাংশনের আগে বসাতে হয়, যার মানে হলো এই ফাংশনটি একটি প্রমিজ রিটার্ন করবে।
// 🌼 Await: এটি শুধুমাত্র async ফাংশনের ভেতরে কাজ করে। এটি প্রমিজটি শেষ না হওয়া পর্যন্ত কোডকে অপেক্ষা করতে বলে (কিন্তু ব্রাউজার হ্যাং করে না)।

async function getUserData() {
    console.log("Searching for data...");

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let data = await response.json(); // Will wait until data arrives.

        console.log("Data found:", data.name);
    } catch (error) {
        console.log("There was a problem fetching data:", error)
    }
}

getUserData();

// কেন এটি শেখা জরুরি ❓
// 📌 ১. API Call: যখন আপনি কোনো ওয়েবসাইট বানাবেন যেখানে অন্য সার্ভার থেকে তথ্য আসবে (যেমন ওয়েদার অ্যাপ বা ফেসবুক ফিড), 
// তখন Async/Await ছাড়া আপনি কাজ করতে পারবেন না।
// 📌 ২. Performance: এটি আপনার ওয়েবসাইটকে ল্যাগ বা হ্যাং হওয়া থেকে বাঁচায়।
// 📌 ৩. Node.js: ব্যাক-এন্ডে কাজ করতে গেলে এই কনসেপ্টগুলোই আপনার ভিত্তি হবে।

// "Under the hood" টিপস 💡
// জাভাস্ক্রিপ্ট সিঙ্গল থ্রেডেড হওয়া সত্ত্বেও কীভাবে একসাথে এত কাজ করে? এর উত্তর হলো Event Loop। যখনই কোনো অ্যাসিংক্রোনাস কাজ আসে, 
// সেটিকে Web API-তে পাঠিয়ে দেওয়া হয় এবং কাজ শেষ হলে সেটি Callback Queue হয়ে আবার মেইন থ্রেডে ফিরে আসে।