/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303
*/

function gemsToDiamond(x,y,z) {
    if ((typeof x !== 'number' || x <=0 )|| (typeof y !== 'number' || y <=0) || (typeof z !== 'number' || z <=0)) {  // number validation check
        return 'give me postive number'   
    }
    if (x % 1 !== 0 || y % 1 !== 0 || z % 1 !== 0) {
        return 'give me integer number'
    }
    else{
        let fiend1 = 21*x;
        let fiend2 = 32*y;
        let fiend3 = 43*z;
        let total = fiend1 + fiend2 + fiend3;
        if (total > 2000) {
            return total - 2000;
        }
        else{
            return total;
        }
       
    }
 
}

console.log(gemsToDiamond(20, 200, 50))