# What is it?
#### Search Application:
 * Films and series
 * Actors and directors
 * Detailed information about them

![6fvdih](https://user-images.githubusercontent.com/92201021/168070904-6b539b12-ec87-44b1-bc29-6465eb77447c.gif)

# Many thanks!
To the author [Kinopoisk An unofficial API](https://kinopoiskapiunofficial.tech/documentation/api/#/) that provides access to site data https://www.kinopoisk.ru

# How to start?
1. You need to get a token, which will be available after registration at https://kinopoiskapiunofficial.tech
2. Copy your token located at https://kinopoiskapiunofficial.tech/profile
3. In the `src/instances` directory, create a `token.js` file
    >src
    >>instances
    >>>token.js
5. Insert your token
```javascript
//token.js

export const TOKEN = <YOUR_TOKEN>;
```
