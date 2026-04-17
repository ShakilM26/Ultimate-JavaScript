// 📖 ডাটা ম্যানিপুলেশন বা ফিল্টারিং করার সময় এই Modern মেথডগুলো কোডকে অনেক ক্লিন এবং ছোট করে দেয়। এগুলোকে Higher-Order Functions বলা হয় 
// কারণ এগুলো প্যারামিটার হিসেবে অন্য একটি ফাংশনকে গ্রহণ করে।


// 📌 ১. forEach() - only Loop
// এটি সাধারণ for লুপের একটি আধুনিক রূপ। এটি অ্যারের প্রতিটি আইটেমের জন্য একবার করে কাজ করে, কিন্তু নিজে থেকে কিছু রিটার্ন করে না।

const fruits = ['Mango', 'Pineapple', 'Banana']
fruits.forEach(function(item) {
    console.log('I like ' + item);
})


// 📌 ২. map() - নতুন কিছু তৈরি করা
// map() সবচেয়ে বেশি ব্যবহৃত হয়। এটি অ্যারের প্রতিটি আইটেমের ওপর কোনো কাজ করে একটি নতুন অ্যারে রিটার্ন করে। মূল অ্যারে অপরিবর্তিত থাকে।

const numbers = [2, 4, 6, 8]
const doubled = numbers.map(num => num * 2)
console.log(doubled);
console.log(numbers) // original array


// 📌 ৩. filter() - ছাঁটাই করা
// নির্দিষ্ট শর্তের ভিত্তিতে কিছু আইটেম খুঁজে বের করতে হলে, তখন filter() ইউজ করা যায়। এটিও একটি নতুন অ্যারে রিটার্ন করে।

const prices = [50, 100, 150, 200, 250];
const expensive = prices.filter(price => price > 100)
console.log(expensive)

// 📌 ৪. find() - নির্দিষ্ট একজনকে খোঁজা
// filter() যেমন সব ম্যাচিং আইটেম দেয়, find() দেয় শুধুমাত্র প্রথম যে আইটেমটি শর্ত পূরণ করে তাকে। এটি অ্যারে দেয় না, সরাসরি আইটেমটি দেয়।

const users = [
    {id: 1, name: 'Shakil'},
    {id: 2, name: 'Karim'},
    {id: 3, name: 'Labib'}
];

const targetUser = users.find(user => user.id == 2);
console.log(targetUser)

// 📌 ৫. reduce() - সব মিলিয়ে এক করা
// খুব কাজের। এটি পুরো অ্যারের সব ভ্যালুকে প্রসেস করে একটিমাত্র রেজাল্ট (যেমন: যোগফল) বের করে আনে।

const cartItems = [10,20,30,40];
const totalBill = cartItems.reduce((accumulator, current) => {
    return accumulator + current;
}, 0); // Here 0 is Initial Value (শুরুর মান)
console.log(totalBill);


// 🏅 Practice - Logic Test
// You have an array [10, 25, 30, 45, 50]. You want to find the numbers greater than 40 and double them.

const numberList = [10, 25, 30, 45, 50];

const result = numberList.filter(num => num > 40).map(num => num * 2)
console.log(result);
