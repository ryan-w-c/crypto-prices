# Crypto Prices

### Note: The app may take between 30-60 seconds to load on launch. This happens when the app has not been used for some time.

### [Live Deployment](https://crypto-prices-webapp.herokuapp.com/)



This app queries CEX.io and Coinbase api and displays the current buy and sell prices for BTC and ETH.

Java Spring was used for the backend and React for the frontend.

First time using React.

## Building the app:

Clone the repo:
```
git clone https://github.com/ryan-w-c/crypto-prices.git
```

Navigate to the root directory
```
cd crypto
```
Build the project:
```
./gradlew build
```

Run the program
```
./gradlew bootRun
```
or run using the jar
```
java -jar backend/build/libs/backend-0.0.1-SNAPSHOT.jar
```
Click the link:
http://localhost:8080/

## Questionnaire:

1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
   - I'm sure there are sub-optimal choices in my code. This was my first time working with React, and it took a couple of days to understand how it works. Something that could be improved is the way I implemented the exchanges. For simplicity and speed, I made two state variables. I could have used a hashmap. The hashmap logic would also improve determining which exchange to buy or sell on by finding the min value when the action is buy and max value when the action is sell. This would also allow the app to display instantly the price after clicking on a button. Currently, the query happens after the button is clicked instead of storing all prices for all coins. This means less storage space and fewer queries, but small lag when clicking a button.


2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
   - I wanted a single page webapp that would look nice in all screen sizes. Instead of displaying the buy and sell prices for each coin at the same time, I spent time working with some buttons that updates the page.


3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
   - My implementation queries for new prices every 15 seconds or every time the user clicks a button. I think this approach would work for that many of users. 


4. What are some other enhancements you would have made, if you had more time to do this implementation
   - I would like to spend more time on displaying the prices at each exchange. For example, making each exchange and price an item in a list that rearranges depending on price. When the user wants to sell, the prices are in increasing order, and decreasing order for buy.
