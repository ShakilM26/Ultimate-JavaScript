// জাভাস্ক্রিপ্টে Fetch API শেখা মানেই হলো ওয়েবসাইটকে বাইরের দুনিয়ার সাথে যুক্ত করা।
// এটি ব্যবহার করে আমরা বিভিন্ন সার্ভার বা এপিআই (API) থেকে ডেটা (যেমন: ইউজারের নাম, ছবি বা খবর) আমাদের পেজে নিয়ে আসতে পারি।

// ✔️ ১. Fetch API এর মূল গঠন (Basic Syntax)
// fetch() ফাংশনটি মূলত একটি Promise রিটার্ন করে। অর্থাৎ, সে কথা দেয় যে সে সার্ভার থেকে ডেটা আনার চেষ্টা করবে।

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


// ✔️ ২. আধুনিক পদ্ধতি: Async/Await (Best Practice)
// বর্তমানে .then() এর চেয়ে async/await বেশি ব্যবহার হয় কারণ এটি পড়তে সহজ এবং কোড দেখতে ক্লিন হয়।

async function getUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await response.json();

        console.log('All user list:', users);

        console.log('First user name:', users[0].name);
    } catch (error) {
        console.log('There is a problem fetching the data:', error);
    }
}

getUsers();

// ✔️ ৩. কেন response.json() করতে হয় ❓
// যখন আমরা সার্ভার থেকে ডেটা আনি, তখন সেটি সরাসরি জাভাস্ক্রিপ্ট পড়তে পারে না (এটি 'HTTP Response' হিসেবে আসে)। 
// response.json() মেথডটি সেই raw ডেটাকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করে, যেন আপনি . (dot) দিয়ে ডেটাগুলো এক্সেস করতে পারেন (যেমন: user.name)।