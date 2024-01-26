# FeastFleet

 - Header
   - Logo
   - Nav Items
       - Home
       - About
       - Cart
 - Body
   - Search
   - RestarauntContainer
       - RestarauntCard
           - Image
           - Name of Restaraunt, Ratings, Cuisine, Delivery Time
 - Footer
   - Copyright
   - Links
   - Address
   - Contact

[Link to My YouTube Playlist](https://www.youtube.com/playlist?list=PLv0NDwUJQ2wSAUtqnJFDrLjq4kuqh2bRg)


   
## Tech Used
- Parcel (changes to be made while using jest)
- ReactJS
- React-Router
- Tailwind
- RadixUI
- React-Redux/ReduxToolkit
- React Testing Library
- Jest (also Babel dependecies refer Parcel)
- Browserslist
- JSDOM(check React Testing Lib Setup)


## Read more abt
- parcel features
- jsdom
- immerjs used in redux and RTK
- dunder why its used, reserved characters
- why axios why cant we use fetch only, axios provides some more features for prod.



## Jest Configuration
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
- The only one Solution to handle when importing local svg, png files which is working now [StackeOverflow]("https://stackoverflow.com/a/54513338")