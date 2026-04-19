// ডম (DOM) বা Document Object Model হলো জাভাস্ক্রিপ্টের সবচেয়ে শক্তিশালী অংশ। 
// সহজ কথায়, একটি এইচটিএমএল (HTML) ওয়েবসাইটকে যখন জাভাস্ক্রিপ্ট দিয়ে নিয়ন্ত্রণ করা হয়, তখন সেই প্রসেসটিই হলো ডম ম্যানিপুলেশন।
// ব্রাউজার যখন একটি এইচটিএমএল ফাইল লোড করে, সে DOM-কে একটি ট্রি স্ট্রাকচারে সাজায় যেখানে প্রতিটি ট্যাগ (যেমন: h1, div, p) একেকটি 'নোড' (Node) বা শাখা।


// 🔰 ডম ম্যানিপুলেশনের কাজ মূলত ৩টি ধাপে সম্পন্ন হয়:

// 📌 ১. এলিমেন্ট সিলেক্ট করা (Selecting Elements) - যেকোনো কাজ করার আগে আপনাকে ব্রাউজারকে বলতে হবে আপনি কোন অংশটি নিয়ে কাজ করতে চান।
document.getElementById('id-name'); // যদি কোনো নির্দিষ্ট id থাকে সেটি দিয়ে সিলেক্ট করতে। এটি বেশ দ্রুত কাজ করে।
document.querySelector('.class-name'); // এটি সবচেয়ে ভার্সেটাইল এবং জনপ্রিয়। সিএসএস সিলেক্টরের মতো ক্লাস, আইডি বা ট্যাগ দিয়ে সিলেক্ট করা যায়।

// ID দিয়ে সিলেক্ট করা
const mainTitle = document.getElementById('title');

// CSS Selector দিয়ে সিলেক্ট করা
const description = document.querySelector('.desc-text');
const firstButton = document.querySelector('button') // // প্রথম বাটনটি নিবে


// 📌 ২. পরিবর্তন করা (Changing Content & Style) - সিলেক্ট করার পর আপনি সেই এলিমেন্টের লেখা বা স্টাইল বদলে দিতে পারেন।
// 🌼 textContent বা innerHTML: লেখা পরিবর্তনের জন্য।
// 🌼 style প্রোপার্টি: সিএসএস পরিবর্তনের জন্য।


// heading select
const mainHeading = document.querySelector('h1');

// text changing
mainHeading.innerText = "Welcome to my Website";

// style changing
mainHeading.style.color = 'blue';
mainHeading.style.background = 'yellow';



// 📌 ৩. ইভেন্ট লিসেনার (Event Listeners - Making it Interactive)
// ইউজার যখন কোনো কিছু করে (যেমন: ক্লিক করা, টাইপ করা), তখন কোড চালানোই হলো ইন্টারঅ্যাক্টিভিটির মূল রহস্য।

const myButton = document.querySelector('#submit-btn');
myButton.addEventListener('click', function() {
    alert('Button Clicked!!')
});

// 🏅 Practical Example
// মনে করুন আপনার একটি বাটন আছে যা ক্লিক করলে ব্যাকগ্রাউন্ডের রঙ বদলে যাবে।

<button id='color-btn'>Change Background</button>

const btn = document.querySelector('#color-btn');
btn.addEventListener('click', function() {
    // background of body randomly changing
    document.body.style.backgroundColor = 'lightblue';
});

// কেন DOM গুরুত্বপূর্ণ ❓
// আপনি যখন আপনার প্রজেক্টগুলো (যেমন: খরচ ট্র্যাকার বা অটোমেশন টুল) বানাবেন, তখন ইউজারের ইনপুট নেওয়া, 
// স্ক্রিনে নতুন ডেটা দেখানো বা কোনো বাটন ক্লিক করলে হিসাব সম্পন্ন করা—সবই এই ডম ম্যানিপুলেশনের মাধ্যমেই হবে।
