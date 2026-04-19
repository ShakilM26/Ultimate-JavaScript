// 🔰 DOM হলো জাভাস্ক্রিপ্টের সেই ক্ষমতা, যার মাধ্যমে আপনি একটি স্ট্যাটিক এইচটিএমএল পেজকে জীবন্ত করে তুলতে পারেন।


// 📌 ১. এলিমেন্ট সিলেক্ট করা (Selecting Elements)
// জাভাস্ক্রিপ্ট দিয়ে কোনো কাজ করার আগে ব্রাউজারকে বলতে হয় আপনি ঠিক কোন এইচটিএমএল ট্যাগটি নিয়ে কাজ করতে চান।

// 🌼 getElementById: যদি কোনো নির্দিষ্ট id থাকে সেটি দিয়ে সিলেক্ট করতে। এটি বেশ দ্রুত কাজ করে।
// 🌼 querySelector: এটি সবচেয়ে ভার্সেটাইল। সিএসএস সিলেক্টরের মতো করে (যেমন: .class, #id, বা tag) এটি ব্যবহার করা যায়।

// ID দিয়ে সিলেক্ট করা
const mainTitle = document.getElementById('title');

// CSS Selector দিয়ে সিলেক্ট করা
const description = document.querySelector('.desc-text');
const firstButton = document.querySelector('button'); // প্রথম বাটনটি নিবে


// 📌 ২. কন্টেন্ট এবং সিএসএস পরিবর্তন (Changing Content & CSS)
// সিলেক্ট করার পর আপনি চাইলে সেই এলিমেন্টের লেখা বা স্টাইল পাল্টে দিতে পারেন।

// 🌼 textContent বা innerHTML: লেখা পরিবর্তনের জন্য।
// 🌼 style প্রোপার্টি: সিএসএস পরিবর্তনের জন্য।


// কন্টেন্ট পরিবর্তন
mainTitle.textContent = "Welcome to My JS World!";

// সিএসএস পরিবর্তন (Inline Style)
mainTitle.style.color = "blue";
mainTitle.style.fontSize = "32px";
mainTitle.style.backgroundColor = "#f0f0f0";


// 📌 ৩. ইভেন্ট লিসেনার (Event Listeners)
// ইউজার যখন ওয়েবসাইটে কোনো অ্যাকশন নেয় (যেমন: ক্লিক করা বা কিছু টাইপ করা), তখন জাভাস্ক্রিপ্টকে সেই কাজটা ধরতে হয়। একেই বলা হয় Event Listening।

// সিনট্যাক্স: element.addEventListener('event_name', function)

// 📍 ক) ক্লিক ইভেন্ট (Click Event)
const btn = document.querySelector('#submit-btn')
btn.addEventListener('click', function() {
    alert('Button Clicked!!');
    mainTitle.style.color="red"; // The title will turn red after clicking.
})


// 📍 খ) টাইপ ইভেন্ট (Input Event)
// ইউজার ইনপুট বক্সে কিছু লিখলে সেটি রিয়েল-টাইমে ধরার জন্য:

const nameInput = document.querySelector('#name-field');
nameInput.addEventListener('input', function(event) {
    console.log(event.target.value); // What the user is typing will be displayed in the console.
})


// 📍 গ) সাবমিট ইভেন্ট (Submit Event)
// ফর্ম সাবমিট করার সময় পেজ রিলোড হওয়া আটকাতে এটি খুব কাজে লাগে:

const myForm = document.querySelector('#contact-form');

myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reloading
    console.log('FORM successfully submitted!');
})



// 🏅 - Practical Example
// Suppose you have a button that, when clicked, will change the background color.
const magicBtn = document.querySelector('#magic-btn');
magicBtn.addEventListener('click', () => {
    // Randomly changing body background color
    document.body.style.backgroundColor = 'lightblue';
})