// 📖 যখন আমাদের একই কাজ বারবার করার প্রয়োজন হয়, তখন ম্যানুয়ালি কোড না লিখে আমরা লুপ ব্যবহার করি।
// সহজ কথায়, যতক্ষণ পর্যন্ত একটি নির্দিষ্ট শর্ত (Condition) সত্যি থাকে, ততক্ষণ লুপ চলতেই থাকে।

// 📌 ১. standard for Loop (ট্রেডিশনাল লুপ)
// এটি সবচেয়ে বেশি ব্যবহৃত লুপ। এখানে লুপ কতবার চলবে তা আগে থেকেই নির্ধারণ করে দেয়া হয়।

// এর তিনটি অংশ থাকে:
// Initialization: শুরু কোথায়?
// Condition: কতক্ষণ চলবে?
// Increment/Decrement: এক ধাপ করে বাড়বে না কমবে?

for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

// 📌 ২. while Loop
// যখন আমরা ঠিক জানি না লুপটি কতবার চলবে, কিন্তু একটি শর্ত জানি, তখন while ব্যবহার করা হয়। শর্তটি লুপের শুরুতে চেক করা হয়।

let count = 1;
while (count <= 5) {
    console.log('Count is: ' + count);
    count ++; // এটি না দিলে লুপটি আজীবন চলতে থাকবে (Infinite Loop)
}

// Modern ES6 Loops
// আধুনিক জাভাস্ক্রিপ্টে ডেটা স্ট্রাকচার (Array বা Object) এর ওপর লুপ চালানোর জন্য আরও সহজ কিছু পদ্ধতি আছে:
// 📌 ৩. for...of Loop (অ্যারের জন্য সেরা)
// এটি মূলত অ্যারে (Array) বা ইটারেবল অবজেক্টের প্রতিটি এলিমেন্টের ওপর দিয়ে যাওয়ার জন্য ব্যবহৃত হয়। এখানে ইনডেক্স নিয়ে চিন্তা করতে হয় না।

const friends = ['Steve', 'Stark', 'Stephen'];
for (const name of friends){
    console.log('Hello ' + name);
}

// 📌 ৪. for...in Loop (অবজেক্টের জন্য সেরা)
// এটি কোনো অবজেক্টের (Object) প্রোপার্টি বা Key-গুলো বের করে আনার জন্য ব্যবহৃত হয়।

const student = {
    name: 'Zarif',
    age: 22,
    skill: 'JavaScript'
};

for (const key in student){
    console.log(key + ': ' + student[key])
}

// 📌 লুপ কন্ট্রোল: break এবং continue
// মাঝপথে লুপ থামানো বা কোনো স্টেপ স্কিপ করার জন্য এই দুটি কিওয়ার্ড লাগে:

// break: লুপটি সেখানেই পুরোপুরি বন্ধ করে দেয়।
// continue: বর্তমান ধাপটি স্কিপ করে পরের ধাপে চলে যায়।

for (let i = 1; i <= 5; i++){
    if (i === 3) continue; // ৩ নম্বর ধাপ স্কিপ করবে
    if (i === 5) break; // ৫ এ পৌঁছালে লুপ বন্ধ হয়ে যাবে
    console.log(i);
}


// 🎯 FizzBuzz Problem
// একটি লুপ ১ থেকে ১০০ পর্যন্ত চলবে এবং যদি কোনো সংখ্যা ৩ দিয়ে ভাগ যায় তবে "Fizz" আর ৫ দিয়ে ভাগ গেলে "Buzz" প্রিন্ট করবে।

for (let i=1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i + "- FizzBuzz")
    } else if (i % 3 == 0){
        console.log(i + "- Fizz");
    } else if (i % 5 == 0){
        console.log(i + "- Buzz")
    } else {
        console.log(i + "- Normal")
    }
}