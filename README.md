## SkyCast
Welcome to the SkyCast repository, your reliable source for real-time weather forecasts and alerts. This site it live ( https://sky-cast-theta.vercel.app/ )

#Technologies Used
Frontend: Nextjs, React, Redux, JavaScript, SCSS modules, local storage
Backend: WeatherAPI integration
Containerization and deployment: Vercel
Other: Git

#Features
Local Storage: Search history is stored in local storage as well as last searched city, allowing users to quickly retrieve weather information for their favorite locations.
Navigation: Fixed navigation to enhance usability.
Search Functionality: Users can search for cities by name or zip code
Weather Dashboard: Users can see current weather conditions, current air conditions, hourly and weekly forecast.
City Dashboard: Users can view and delete previously searched cities stored in redux store. Large devices also display a preview of current weather conditions.
Responsive Design: The application uses flexbox to ensure optimal viewing and interaction across various devices and screen sizes.
Async Programming: Leveraged asynchronous programming and fetch api to retrieve and display data from WeatherAPI and auto-cache results to minimize server hits.

# Dev Environment
First, run 
```bash
npm install
#or
yarn install
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev``

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#License
This project is licensed under the Apache 2.0 License.

#Acknowledgements
WeatherAPI, UIzard
