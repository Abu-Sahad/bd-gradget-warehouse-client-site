import React from 'react';

const Blogs = () => {
    return (

        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <h2>Difference between javascript and nodejs</h2>
                    <p>জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটে স্ক্রিপ্ট লেখার জন্য ব্যবহৃত হয়। জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যেতে পারে। এটি মূলত ক্লায়েন্ট-সাইডে ব্যবহার করা হয়। জাভাস্ক্রিপ্ট এইচটিএমএল যোগ করতে এবং DOM-এর সাথে খেলতে যথেষ্ট সক্ষম।</p>
                    <p>নোডজেএস হল একটি জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট৷ আমরা নোডজেএস-এর সাহায্যে ব্রাউজারের বাইরে জাভাস্ক্রিপ্ট চালাতে পারি৷ এটি বেশিরভাগ সার্ভার-সাইডে ব্যবহৃত হয়৷ এইচটিএমএল ট্যাগ যুক্ত করার ক্ষমতা Nodejs-এর নেই৷</p>
                </div>
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <h2>
                        When should you use nodejs and when should you use mongodb
                    </h2>
                    <p>MongoDB এবং NodeJS দুটি ভিন্ন প্রযুক্তি। MonogDB হল একটি ডাটাবেস সিস্টেম যা আপনাকে দক্ষতার সাথে একটি ডাটাবেসে নথি সংরক্ষণ করতে এবং ডেটা আপডেটের মতো ক্রিয়াকলাপ সম্পাদন করতে বা নির্দিষ্ট মানদণ্ডের ভিত্তিতে নথি অনুসন্ধান করতে দেয়।
                        Nodejs হল একটি জাভাস্ক্রিপ্ট ইঞ্জিন যা দিয়ে আপনি যেকোন অ্যাপ্লিকেশন লিখতে পারেন। এটি আপনার জাভাস্ক্রিপ্ট কোড চালায়। সাধারণত, এটি এমন সার্ভার তৈরি করতে ব্যবহৃত হয় যা ওয়েব অনুরোধে সাড়া দিতে পারে, যদিও এটি অনেক অন্যান্য ধরনের কোডের জন্যও ব্যবহার করা যেতে পারে।</p>
                </div>
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <h2> Differences between sql and nosql databases.</h2>
                    <p>SQL রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (আরডিবিএমএস)। এই ডাটাবেসের স্থির বা স্থির বা পূর্বনির্ধারিত স্কিমা আছে। এই ডাটাবেসগুলি শ্রেণীবদ্ধ ডেটা সঞ্চয়ের জন্য উপযুক্ত নয়৷ এই ডেটাবেসগুলি জটিল প্রশ্নের জন্য সবচেয়ে উপযুক্ত৷
                    </p>
                    <p>NoSql নন-রিলেশনাল বা ডিস্ট্রিবিউটেড ডাটাবেস সিস্টেম। তাদের ডায়নামিক স্কিমা আছে। এই ডাটাবেসগুলো হাইয়ারর্কিক্যাল ডাটা স্টোরেজের জন্য সবচেয়ে উপযুক্ত। এই ডাটাবেসগুলো জটিল প্রশ্নের জন্য তেমন ভালো নয়।</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;