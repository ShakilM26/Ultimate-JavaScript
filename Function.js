// 📖 জাভাস্ক্রিপ্টে Function হলো একটি মেশিনের মতো। মেশিনে কিছু ইনপুট (Parameters) দিলে, মেশিন সেটি প্রসেস করে এবং একটি রেজাল্ট বা আউটপুট (Return Value) দেয়।

// 📌 ১. সাধারণ ফাংশন (Regular Function)
function greetUser(name) {
    return `Hello ${name}`
}
console.log(greetUser('Murfi'))


// 📌 ২. মডার্ন অ্যারো ফাংশন (Arrow Function)
// ES6 ভার্সনে এটি পরিচিতি পায়। এটি দেখতে ক্লিন এবং কোড অনেক কম লিখতে হয়। 
// এখানে function কীওয়ার্ডের বদলে একটি তীর চিহ্ন (=>) ব্যবহার করা হয়।

const add = (a, b) => {
    return `Sum is ${a + b}`
}
console.log(add(5, 20))


// 📌 ৩. প্যারামিটার বনাম আর্গুমেন্ট (Parameters vs Arguments)
// Parameter: ফাংশন তৈরি করার সময় ব্র্যাকেটের ভেতর যে ভেরিয়েবলগুলো দেওয়া হয় (যেমন: a, b)।
// Argument: ফাংশন কল করার সময় যে আসল মানগুলো পাঠানো হয় (যেমন: 5, 10)।


// 📌 ৪. রিটার্ন ভ্যালু (Return Value) - কেন এটি জরুরি?
// একটি ফাংশনের কাজ শেষ হওয়ার পর সেই ফাংশন কোনো তথ্য আমাদের যদি ফেরত দিতে হয়, তবে আমরা return কীওয়ার্ড ব্যবহার করি।
// লক্ষ্য করুন: return করার সাথে সাথে ফাংশনের কাজ শেষ হয়ে যায়। এরপর নিচে কোনো কোড থাকলে তা আর এক্সিকিউট (Run) হয় না।

function checkAge(age) {
    if (age >= 18){
        return 'You are an Adult';
    }
    return 'You are a minor';
    console.log('This line will never run');
}
console.log(checkAge(20));

// 🎯 Example
const calculatePrice = (price, discount) => {
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    return finalPrice;
};

const myTotal = calculatePrice(1000, 10);
console.log('You have to pay: ' + myTotal + ' Taka')



// Write an Arrow function that takes a number as input and returns whether that number is even or odd.
const evenOdd = (a) => {
    if (a % 2 === 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}
const even_odd = evenOdd(18);
console.log(even_odd);
