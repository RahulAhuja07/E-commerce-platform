# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository** - Your code is already on GitHub ✅
3. **Environment Variables** - Prepared for each environment

---

## Deployment Strategy

You have **3 separate applications** to deploy:
- **Backend API** (Node.js/Express)
- **Frontend Store** (React)
- **Admin Dashboard** (React)

Each should be deployed as a separate Vercel project.

---

## Step 1: Prepare Backend for Deployment

### 1.1 Check vercel.json in backend

The backend already has `vercel.json`. Let's verify it's correct:

```bash
cat backend/vercel.json
```

It should contain:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 1.2 Update backend/.env for production

Create/update `backend/.env` with:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

## Step 2: Deploy Backend to Vercel

### 2.1 Using Vercel Web Dashboard (Easiest)

1. **Go to [vercel.com/dashboard](https://vercel.com/dashboard)**
2. Click **"Add New..." → "Project"**
3. **Import Git Repository**
4. Select your `E-commerce-platform` repository
5. **Select Root Directory:** Choose `backend`
6. **Environment Variables:** Add all variables from `backend/.env`
7. Click **"Deploy"**

### 2.2 Using Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to backend
cd backend

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### 2.3 Get Backend URL

After deployment, you'll get a URL like:
```
https://ecommerce-backend-xxxxx.vercel.app
```

**Save this URL** - you'll need it for frontend and admin configuration.

---

## Step 3: Deploy Frontend to Vercel

### 3.1 Update frontend/.env.production

Create `frontend/.env.production`:

```env
VITE_BACKEND_URL=https://your-backend-url.vercel.app
```

Replace `https://your-backend-url.vercel.app` with your actual backend URL from Step 2.3.

### 3.2 Deploy Frontend

1. **Go to [vercel.com/dashboard](https://vercel.com/dashboard)**
2. Click **"Add New..." → "Project"**
3. **Import Git Repository** - Select `E-commerce-platform`
4. **Root Directory:** Choose `frontend`
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. **Environment Variables:**
   - Add `VITE_BACKEND_URL` with your backend URL
8. Click **"Deploy"**

### 3.3 Get Frontend URL

After deployment:
```
https://ecommerce-frontend-xxxxx.vercel.app
```

---

## Step 4: Deploy Admin Dashboard to Vercel

### 4.1 Update admin/.env.production

Create `admin/.env.production`:

```env
VITE_BACKEND_URL=https://your-backend-url.vercel.app
```

### 4.2 Deploy Admin

1. **Go to [vercel.com/dashboard](https://vercel.com/dashboard)**
2. Click **"Add New..." → "Project"**
3. **Import Git Repository** - Select `E-commerce-platform`
4. **Root Directory:** Choose `admin`
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. **Environment Variables:**
   - Add `VITE_BACKEND_URL` with your backend URL
8. Click **"Deploy"**

### 4.3 Get Admin URL

After deployment:
```
https://ecommerce-admin-xxxxx.vercel.app
```

---

## Step 5: Configure CORS in Backend

Update your backend `server.js` to allow requests from frontend and admin:

```javascript
const cors = require('cors');

app.use(cors({
  origin: [
    'https://your-frontend-url.vercel.app',
    'https://your-admin-url.vercel.app',
    'http://localhost:5173',
    'http://localhost:5174'
  ],
  credentials: true
}));
```

Then redeploy the backend.

---

## Step 6: Update Backend Environment Variables

If you need to update environment variables later:

1. Go to your project on Vercel dashboard
2. Click **"Settings"**
3. Go to **"Environment Variables"**
4. Update/add variables
5. The project will automatically redeploy

---

## Deployment Checklist

### Backend
- [ ] Created `backend/vercel.json`
- [ ] Set up environment variables in Vercel dashboard
- [ ] Deployed to Vercel
- [ ] Copied backend URL
- [ ] Verified API is working (check `/` or `/api/product/list`)

### Frontend
- [ ] Created `frontend/.env.production`
- [ ] Added `VITE_BACKEND_URL` environment variable
- [ ] Deployed to Vercel
- [ ] Verified frontend loads
- [ ] Test a few pages to ensure backend connection works

### Admin
- [ ] Created `admin/.env.production`
- [ ] Added `VITE_BACKEND_URL` environment variable
- [ ] Deployed to Vercel
- [ ] Verified admin dashboard loads
- [ ] Test login functionality

---

## Useful Commands

```bash
# View deployment logs
vercel logs

# Deploy a specific project
vercel --prod

# Check environment variables
vercel env ls

# Open Vercel dashboard
vercel dashboard
```

---

## Troubleshooting

### Backend Not Connecting
- ✅ Check CORS configuration
- ✅ Verify MongoDB connection string
- ✅ Check environment variables in Vercel
- ✅ View logs: `vercel logs`

### Frontend Build Fails
- ✅ Clear node_modules: `rm -rf node_modules`
- ✅ Reinstall: `npm install`
- ✅ Check for TypeScript errors
- ✅ Verify `VITE_BACKEND_URL` is set

### Environment Variables Not Working
- ✅ Redeploy after adding variables
- ✅ Use correct format: `VITE_*` for frontend/admin
- ✅ Ensure no quotes around values in Vercel UI

### MongoDB Connection Issues
- ✅ Use MongoDB Atlas connection string
- ✅ Whitelist Vercel IPs (or use 0.0.0.0/0)
- ✅ Verify database exists

---

## Final Live URLs Format

After complete deployment, you'll have:

```
Frontend:  https://your-frontend-project.vercel.app
Admin:     https://your-admin-project.vercel.app
Backend:   https://your-backend-project.vercel.app
```

Update your README with these live URLs!

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Node.js Deployment](https://vercel.com/docs/concepts/runtimes/nodejs)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Connecting GitHub to Vercel](https://vercel.com/docs/concepts/git)

---

Happy Deploying! 🚀
