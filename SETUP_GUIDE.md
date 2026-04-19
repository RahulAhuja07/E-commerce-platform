# E-Commerce Platform - Complete Setup Guide

## Project Overview

Forever is a full-stack e-commerce platform built with React, Node.js, and MongoDB. It features a customer-facing storefront, an admin dashboard, and a robust backend API for managing products, orders, and users.

### Features
- 🛍️ Complete product catalog with categories and filtering
- 🛒 Shopping cart with persistent storage
- 👤 User authentication and profile management
- 📦 Order management and tracking
- 💳 Payment integration (Stripe & Razorpay)
- 🎨 Admin dashboard for product and order management
- 📱 Fully responsive design (Mobile, Tablet, Desktop)
- 🔍 Product search functionality
- 📧 Newsletter subscription

---

## Project Structure

```
E-commerce-platform-main/
├── frontend/               # React customer frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API for state management
│   │   ├── assets/        # Images and static assets
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/               # Node.js/Express backend
│   ├── config/           # Database and service configs
│   ├── controllers/      # Route handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Auth and file upload middleware
│   ├── server.js
│   └── package.json
├── admin/                # React admin dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
└── package.json          # Root package.json for easy script management
```

---

## Prerequisites

Before starting, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - comes with Node.js
- **MongoDB** - [Setup MongoDB](https://www.mongodb.com/docs/manual/installation/)
- **Git** - [Download](https://git-scm.com/)
- Code editor (VS Code recommended)

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd E-commerce-platform-main
```

### 2. Install Dependencies

The project has npm scripts set up in the root `package.json` to make setup easier.

**Install all dependencies:**

```bash
# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies (in another terminal)
cd backend && npm install

# Install admin dependencies (in another terminal)
cd admin && npm install
```

Or use the convenience scripts from the root directory:

```bash
# From root directory
npm run install-all  # (if script is added)
```

---

## Configuration

### Backend Setup

1. **Create environment file:**

```bash
cd backend
touch .env
```

2. **Add the following to `.env`:**

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/forever

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary (for image uploads)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Payment Gateways
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Admin Email
ADMIN_EMAIL=admin@forever.com

# Frontend URL
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

### Frontend Setup

1. **Create environment file:**

```bash
cd frontend
touch .env.local
```

2. **Add the following to `.env.local`:**

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin Setup

1. **Create environment file:**

```bash
cd admin
touch .env.local
```

2. **Add the following to `.env.local`:**

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Running the Application

### Option 1: From Root Directory

We've set up convenience npm scripts in the root `package.json`:

```bash
# Start frontend (port 5173)
npm run dev

# Start backend (port 4000) - in another terminal
npm run backend

# Start admin dashboard (port 5174) - in another terminal
npm run admin
```

### Option 2: From Individual Directories

**Frontend:**
```bash
cd frontend
npm run dev
# Opens at http://localhost:5173
```

**Backend:**
```bash
cd backend
npm run server
# Runs at http://localhost:4000
```

**Admin:**
```bash
cd admin
npm run dev
# Opens at http://localhost:5174
```

---

## Database Setup

### MongoDB Local Setup

1. **Start MongoDB:**

```bash
# macOS with Homebrew
brew services start mongodb-community

# Windows
mongod

# Linux
sudo systemctl start mongodb
```

2. **Create Database:**

MongoDB will automatically create the `forever` database when the backend first connects.

3. **Verify Connection:**

In MongoDB Compass or mongo CLI:
```bash
use forever
show collections
```

### MongoDB Atlas (Cloud)

1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `.env` in backend:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/forever
```

---

## Available Scripts

### Root Directory
```bash
npm run dev       # Start frontend development server
npm run backend   # Start backend server with nodemon
npm run admin     # Start admin dashboard
npm run build     # Build frontend for production
npm run preview   # Preview production build
```

### Frontend
```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview build
npm run lint      # Run ESLint
```

### Backend
```bash
npm run start     # Start server
npm run server    # Start with nodemon (auto-restart)
```

### Admin
```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run preview   # Preview build
```

---

## API Endpoints

### Authentication
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout

### Products
- `GET /api/product/list` - Get all products
- `GET /api/product/:id` - Get product details
- `POST /api/product/add` - Add product (Admin)
- `POST /api/product/remove` - Remove product (Admin)

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart/add` - Add to cart
- `POST /api/cart/remove` - Remove from cart

### Orders
- `POST /api/order/place` - Place order
- `GET /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

### Payment
- `POST /api/order/stripe` - Create Stripe payment
- `POST /api/order/razorpay` - Create Razorpay payment
- `POST /api/order/verifystripe` - Verify Stripe payment
- `POST /api/order/verifyrazorpay` - Verify Razorpay payment

---

## Frontend Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero and featured products |
| `/collection` | All products with filters |
| `/product/:id` | Individual product details |
| `/cart` | Shopping cart |
| `/login` | User authentication |
| `/place-order` | Checkout page |
| `/orders` | User order history |
| `/about` | About page |
| `/contact` | Contact page |
| `/careers` | Careers/Coming soon page |

---

## Admin Dashboard Pages

| Route | Description |
|-------|-------------|
| `/admin/login` | Admin authentication |
| `/admin/` | Dashboard home |
| `/admin/add` | Add new product |
| `/admin/list` | View all products |
| `/admin/orders` | Manage orders |

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Kill process on port 4000
lsof -ti:4000 | xargs kill -9

# Kill process on port 5174
lsof -ti:5174 | xargs kill -9
```

### MongoDB Connection Error
- Ensure MongoDB is running: `brew services list` (macOS)
- Check connection string in `.env`
- Verify database name is correct

### CORS Error
- Backend URL in frontend `.env` is correct
- Backend `cors` middleware is configured
- Frontend URL is added to backend allowed origins

### npm Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

## Recent Updates

### Latest Features
✅ **Footer Navigation Buttons** - Home, About Us, Delivery, and Privacy Policy are now clickable buttons in the footer
✅ **Careers Page** - "Careers at Forever" link now navigates to a Coming Soon page
✅ **Contact Form Fix** - Fixed React component naming conventions
✅ **Root Package.json** - Added convenience npm scripts for easier project management

---

## Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy 'dist' folder to Vercel
```

### Backend (Vercel/Railway/Render)
1. Create `vercel.json` in backend directory
2. Set environment variables in hosting platform
3. Deploy using platform CLI

### Admin (Vercel)
```bash
cd admin
npm run build
# Deploy 'dist' folder to separate Vercel project
```

---

## Contributing

1. Create a feature branch: `git checkout -b feature/AmazingFeature`
2. Commit changes: `git commit -m 'Add AmazingFeature'`
3. Push to branch: `git push origin feature/AmazingFeature`
4. Open a Pull Request

---

## Useful Resources

- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe API](https://stripe.com/docs/api)
- [Razorpay API](https://razorpay.com/docs/)

---

## License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## Contact

For support or inquiries, please reach out to: **b23ch1037@iitj.ac.in**

---

**Happy Coding! 🚀**
