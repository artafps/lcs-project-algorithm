# Persian 

## پروژه LCS
مشکل طولانی ترین متداول بعدی (LCS) یک مشکل کلاسیک در علوم کامپیوتر است. این شامل یافتن طولانی‌ترین دنباله‌ای است که دو دنباله مشترک دارند. دنباله فرعی دنباله ای است که با حذف برخی یا هیچ عنصری بدون تغییر ترتیب عناصر باقیمانده از دنباله دیگری به دست می آید.

### تعریف:
LCS دو دنباله طولانی ترین دنباله ای است که می توان با حذف برخی یا هیچ یک از کاراکترهای هر دو دنباله بدون مرتب کردن مجدد کاراکترهای باقی مانده به دست آورد.

### مثال:
دو دنباله زیر را در نظر بگیرید:

X = "AGGTAB"
Y = "GXTXAYB"
طولانی ترین زیر دنباله رایج این دو دنباله "GTAB" است، بنابراین طول LCS 4 است.

روش های حل مشکل LCS:
### برنامه نویسی پویا:
این کارآمدترین روش برای حل مشکل LCS است. از یک جدول دو بعدی (یا ماتریس) برای ذخیره طول طولانی‌ترین دنباله‌های مشترک زیر رشته‌ها استفاده می‌کند. پیچیدگی زمانی این رویکرد O(m*n) است، که در آن m و n طول دو دنباله هستند.

در اینجا پیاده سازی جاوا اسکریپت با استفاده از برنامه نویسی پویا و کورکورانه آورده شده است:
آدرس ###: explor/src/app/utils/LCS.js

### خلاصه:
مشکل LCS در بسیاری از کاربردها مانند بیوانفورماتیک، مقایسه متن و سیستم های کنترل نسخه بسیار مهم است. رویکرد برنامه نویسی پویا به دلیل کارایی آن از نظر پیچیدگی زمانی در مقایسه با رویکرد ساده لوح به طور کلی ترجیح داده می شود.


# En
## LCS PROJECT
The Longest Common Subsequence (LCS) problem is a classic problem in computer science. It involves finding the longest subsequence that two sequences have in common. A subsequence is a sequence derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

### Definition:
The LCS of two sequences is the longest sequence that can be obtained by deleting some or none of the characters from both sequences without reordering the remaining characters.

### Example:
Consider the following two sequences:

X = "AGGTAB"
Y = "GXTXAYB"
The longest common subsequence of these two sequences is "GTAB", so the length of the LCS is 4.

Methods to Solve the LCS Problem:
### Dynamic Programming:
This is the most efficient method to solve the LCS problem. It uses a 2D table (or matrix) to store the lengths of the longest common subsequences of substrings. The time complexity of this approach is O(m*n), where m and n are the lengths of the two sequences.

Here's a JavaScript implementation using dynamic programming:
### adress : explor/src/app/utils/LCS.js

### Summary:
The LCS problem is crucial in many applications like bioinformatics, text comparison, and version control systems. The dynamic programming approach is generally preferred due to its efficiency in terms of time complexity compared to the naive approach.

## init [project] power bu next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
