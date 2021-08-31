# FATAPP
Accountability App for weight loss goals

## Motivation:
My goal was to weigh the same that I did in high school. Unfortunately I was not as motivated as I needed to be. So I decided to do what has become fairly fashionable of late and put up money for a charity and anti-charity of my choice. If I were to succeed the money would go to the charity (St. Jude's Children's hospital) and if I failed it would go to some, err.., bad people. 

So I venmo'd my friend with the money and the conditions.

The question to be answered was how to facilitate reporting, which was how this project was born.


## The Reporting System
The first thing I did was buy a [bluetooth scale](https://www.amazon.com/RENPHO-Bluetooth-Bathroom-Composition-Smartphone/dp/B01N1UX8RW). This connected to an app in my phone. The app integrated with google fit. 

I wanted to have the data stored in a google sheet that I could share with people, and I wanted to automatically email people when either when I achieved my goal, or when I started slipping behind, as I have a penchant for consuming too much mac and cheese :smile:

So I created a custom app in google developers, used the code.gs for importing from my google fit data, and had my spreadsheet call it everyday to take that day's measurement. I then had a seperate sheet with the email's of my accountability partners who would get distinct messages if 

1. I missed a day's measurement
2. I had spent some defined number of days raising my weight
3. I had hit my goal!

## Results
I hit my Goal in the knick of time, and the money went to the charity!

I still weigh myself regularly, because as they say: [what gets measured gets managed!](https://en.wikipedia.org/wiki/Peter_Drucker)

Here is a look at the results in the renpho app: 
<br />
<img src="https://github.com/bobbydmartino/FATAPP/blob/main/renpho.png?raw=true" width="25%">
