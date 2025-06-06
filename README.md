# Wanderlust 🌍✈️

A full-featured accommodation booking platform with integrated maps, user authentication, and reviews. ✨

## Live Demo 🚀

🔗 [View Live Site](https://wanderlust-j2gp.onrender.com/)

## Features ✨

- **User Authentication**  - Secure signup/login functionality with Passport.js
- **Property Listings**  - Browse accommodations with detailed information
- **Search & Filter**  - Find properties by listing location
- **Interactive Maps**  - Visualize property locations with MapBox integration
- **Reviews System**  - Leave ratings and reviews for properties
- **Responsive Design**  - Optimized for all devices (mobile, tablet, desktop)
- **Image Management**  - Upload and store property images with Cloudinary
- **Flash Notifications**  - User-friendly success and error messages

## Technologies Used 🛠️

### Frontend 🎨
- EJS (Embedded JavaScript Templates) 
- Bootstrap 5 
- CSS3 
- JavaScript 
- MapBox GL JS 
- Font Awesome Icons 

### Backend 🔧
- Node.js 
- Express.js 
- MongoDB 
- Mongoose ODM 
- Passport.js (Authentication) 
- Express-session (Session management) 
- Connect-flash (Notifications) 

### Cloud Services ☁️
- Cloudinary (Image Storage) 
- MongoDB Atlas (Database) 
- Render (Deployment) 

## Installation 💻

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables (create a `.env` file in the root directory)
   ```
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_key
   CLOUD_API_SECRET=your_cloudinary_secret
   MAP_TOKEN=your_mapbox_token
   SECRET=your_session_secret
   ```

4. Start the development server
   ```bash
   node app.js
   ```

5. Visit `localhost:8080` in your browser

## Project Structure 📁

```
wanderlust/
├── controllers/       # Route controllers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/           # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/           # Static files
│   ├── css/
│   ├── js/
│   └── images/
├── routes/           # Route definitions
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/            # Utilities
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/            # EJS templates
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   └── show.ejs
│   └── users/
│       ├── login.ejs
│       └── signup.ejs
├── middleware.js     # Custom middleware functions
├── app.js            # Main application file
├── package.json
└── README.md
```

## API Endpoints 🔌

### Listings 🏡
- `GET /listings` - Get all listings
- `GET /listings/new` - Render new listing form
- `GET /listings/:id` - Get a specific listing
- `POST /listings` - Create a new listing (auth required)
- `GET /listings/:id/edit` - Get edit form for a listing (auth required)
- `PUT /listings/:id` - Update a listing (auth required)
- `DELETE /listings/:id` - Delete a listing (auth required)

### Users 👤
- `GET /signup` - Render signup form
- `POST /signup` - Register a new user
- `GET /login` - Render login form
- `POST /login` - Log in a user
- `GET /logout` - Log out a user

### Reviews ⭐
- `POST /listings/:id/reviews` - Create a review for a listing (auth required)
- `DELETE /listings/:id/reviews/:reviewId` - Delete a review (auth required)

## Key Features Explained 🔑

### Authentication System 🔐
The application uses Passport.js for authentication, with a local strategy. Users can sign up, login, and logout. Certain routes are protected and can only be accessed by authenticated users.

### Listings Management 🏡
Users can create, read, update, and delete property listings. Each listing includes details like title, description, price, location, and images.

### Review System ⭐
Authenticated users can leave reviews for listings. Reviews include a star rating (1-5) and a text comment. Users can delete their own reviews.

### Geocoding & Maps 🗺️
The application uses MapBox for geocoding addresses to coordinates and displaying interactive maps showing the location of each property.

### Image Upload 📸
Cloudinary is used for image upload, storage, and transformation. Users can upload images when creating or editing listings.

### Responsive Design 📱
The application is fully responsive and works well on mobile, tablet, and desktop devices, using Bootstrap 5 for the UI components.

## Future Improvements 🚀

- [ ] Booking functionality with calendar integration 
- [ ] User profiles and dashboards 
- [ ] Advanced search filters (price range, amenities, etc.) 
- [ ] Payment processing integration 
- [ ] Messaging system between hosts and guests 
- [ ] Social media authentication 
- [ ] Multi-language support 
- [ ] Dark mode toggle 

## Acknowledgments 🙏

- [Bootstrap](https://getbootstrap.com/) - Frontend framework
- [MapBox](https://www.mapbox.com/) - Maps API
- [Cloudinary](https://cloudinary.com/) - Image management
- [Font Awesome](https://fontawesome.com/) - Icons
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Passport.js](https://www.passportjs.org/) - Authentication middleware

---

Created with ❤️ by Krrish Devani  
