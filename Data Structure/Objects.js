// 📖 জাভাস্ক্রিপ্টে Object হলো সবকিছুর প্রাণ। যদি ভেরিয়েবল হয় একটি মাত্র তথ্য রাখার বক্স, তবে অবজেক্ট হলো একটি আলমারি 
// যেখানে অনেকগুলো ড্রয়ারে আলাদা আলাদা তথ্য সাজিয়ে রাখা যায়।

// অবজেক্টের মূল বিষয়গুলো:
// 📌 ১. অবজেক্ট প্রোপার্টি (Properties) - একটি অবজেক্ট তৈরি করা হয় কী-ভ্যালু পেয়ার (Key-Value Pair) দিয়ে।
const user = {
    firstName: 'Victor Von',
    lastName: 'Doom',
    age: 88,
    isDeveloper: false
};

// accessing data
console.log(user.firstName);
console.log(user['lastName']);


// 📌 ২. অবজেক্ট মেথড (Methods) - যখন কোনো অবজেক্টের ভেতরে প্রোপার্টি হিসেবে একটি ফাংশন লিখা হয়, তখন তাকে মেথড বলে। 
// এটি অবজেক্টের কোনো কাজ বা বিহেভিয়ার প্রকাশ করে।

const car = {
    brand: 'Lamborghini',
    model: 'Revuelto',
    start: function() {
        console.log('The car has started!')
    },
    showDetails() {
        console.log(`This is ${this.brand} ${this.model}`);
    }
};

car.start();
car.showDetails();


// 📌 ৩. অবজেক্ট ডিসট্রাকচারিং (Destructuring) - Modern Magic of ES6. 
// অবজেক্ট থেকে প্রোপার্টিগুলোকে আলাদা আলাদা ভেরিয়েবলে খুব সহজে বের করে আনার পদ্ধতিকেই ডিসট্রাকচারিং বলে।
const developer = {name: 'Samia', skill: 'Graphics Design'};
const {name, skill} = developer;
console.log(name, skill);

// Destructuring important because React বা বড় কোনো প্রজেক্টে কাজ করার সময় তখন ফাংশনের প্যারামিটারে এটি প্রচুর ব্যবহার করা হয়
function displayUser({name, age}) {
    console.log(`User: ${name}, Age: ${age}`);
}

const person = {name: 'Rahim', age: 30, city: 'Dhaka'};
displayUser(person);


// 📌 ৪. মেমোরি এবং রেফারেন্স (একটি বিশেষ নোট) - অবজেক্ট রেফারেন্স টাইপ হিসেবে কাজ করে।
let person1 = {name: 'Alice'};
let person2 = person1; // এটি কোনো কপি না, বরং একই মেমোরি এড্রেস শেয়ার করছে 

person2.name = 'Bob';
console.log(person1.name); // Output: Bob (কারণ দুজন একই আলমারি শেয়ার করছে)



// 🏅 Practice
//

const myProfile = {
    fullName: 'Tony Stark', 
    skills: ['Python', 'JavaScript', 'C++'],
    describe: function() {
        console.log(`I am ${fullName}, skilled in ${skills[0]}`);
    }
};


// 🏅 Create an object about yourself (myProfile) that contains your name, skills (skills - this can be an Array), and a method that prints 
// a short description about you to the console. Then use destructuring to display your name and a skill in a separate variable.

// Destructuring
const {fullName, skills} = myProfile;
console.log(fullName)

const[firstSkill] = skills;
console.log(firstSkill);

// method call
myProfile.describe();