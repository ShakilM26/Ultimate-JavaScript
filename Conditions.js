// 📖 কন্ডিশনস (Conditions) হলো প্রোগ্রামিংয়ের সেই অংশ যা সিদ্ধান্ত নিতে সাহায্য করে। সহজ কথায়, "যদি (if) এটা হয় তবে ওটা করো, আর নাহয় (else) অন্য কিছু করো।"

// 📌 ১. if-else (The Decision Maker)
// এটি সবচেয়ে বেশি ব্যবহৃত কন্ডিশন। এটি মূলত একটি বুলিয়ান (True বা False) চেক করে।

// 🏅 Practice - if-else
// ধরা যাক, একটি অনলাইন স্টোর বানাচ্ছেন যেখানে ৫০০০ টাকার বেশি কেনাকাটা করলে ১০% ডিসকাউন্ট পাওয়া যাবে।

let totalPurchase = 6000;
if (totalPurchase >= 5000){
    console.log('Congratulations! You get 10% discount.');
} else {
    console.log('Sorry, Make a purchase of at least 5000 taka to get a discount.');
}

// 🏅 Practice - else-if (too many conditions)
let score = 75;
if (score >= 80) {
    console.log('Grade: A+');
} else if (score >= 70) {
    console.log('Grade: A');
} else {
    console.log('Grade: F');
}


// 📌 ২. switch-case (The Selection Expert)
// যখন একটি নির্দিষ্ট ভেরিয়েবলের অনেকগুলো সম্ভাব্য মান (Multiple values) থাকে, তখন বারবার if-else if না লিখে switch ব্যবহার করা বেশি গোছানো এবং দ্রুত।
// ধরা যাক, সপ্তাহের দিনের নাম অনুযায়ী আপনি কোনো মেসেজ দেখাতে চান।
// 🏅 Practice

let day = 'Monday';
switch (day) {
    case 'Friday':
        console.log('Off day, get rest');
        break;
    case 'Monday':
        console.log('First day of work, lots of work left to do');
        break;
    case 'Saturday':
        console.log('Work half a day.');
        break;
    default:
        console.log('Normal working day.')
}

// 📌 ৩. গুরুত্বপূর্ণ মেকানিজম: break এবং default কেন লাগে?
// break: এটি খুবই জরুরি। যদি break না দেয়া হয়, তবে জাভাস্ক্রিপ্ট সঠিক কেসটি পাওয়ার পরও নিচের বাকি সব কেসগুলো এক্সিকিউট (Execute) করে ফেলবে। একে বলা হয় "Fall-through"।
// default: যদি কোনো কেসই না মিলে, তবে default ব্লকটি কাজ করবে। এটি অনেকটা else এর মতো কাজ করে।

// 📌 ৪. if-else বনাম switch-case: কোনটা কখন ব্যবহার? 
// রেঞ্জ বা জটিল লজিক চেক করতে if-else (যেমন: x > 10 && y < 20)
// একটি নির্দিষ্ট মান চেক করতে switch-case (যেমন: color == 'red')

// 🎁 Ternary Operator (শর্টকাট কন্ডিশন)
// প্রফেশনাল ডেভেলপাররা ছোট লজিকের ক্ষেত্রে if-else এর বদলে এক লাইনের এই পদ্ধতি ব্যবহার করেন

let age = 20;
let status = (age >= 18) ? "Voter" : "Non-Voter";
console.log(status);

// (এখানে ? মানে হলো 'যদি সত্যি হয়' এবং : মানে হলো 'যদি নাহয়')