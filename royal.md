Build a production-grade AI powered gemstone trading platform for a company that deals only in loose Ruby and Sapphire gemstones (not jewellery).

Platform Name:
Royal Ruby & Sapphire Exchange

Goal:
Create a luxury AI powered gemstone marketplace where buyers can browse certified stones, save wishlist items, add to cart, request purchases, and interact with AI for gemstone insights.

Target Users:

Gemstone traders
Jewellery manufacturers
Collectors
B2B bulk buyers
Retail buyers

Tech Stack (Mandatory):

Frontend:
Next.js 14 (App Router)
React
TypeScript
Tailwind CSS
Shadcn UI
Framer Motion (animations)

Backend:
Node.js
Express.js

Database:
MongoDB (Mongoose ORM)

Authentication:
NextAuth or JWT
Google login optional

AI Integration:
OpenAI API or Gemini API
Langchain optional

Image storage:
Cloudinary or AWS S3

Search:
Algolia or MongoDB Atlas search

Payments (optional):
Stripe or Razorpay

Deployment:
Frontend → Vercel
Backend → Render
Database → MongoDB Atlas

--------------------------------

CORE FEATURES

--------------------------------

USER FEATURES

Authentication System:

Signup
Login
Logout
Forgot password
Email verification
JWT session handling

User Profile:

Profile page
Saved wishlist
Order history
Inquiry history
Account settings

Wishlist System:

Add to wishlist
Remove from wishlist
Move to cart
Wishlist page

Cart System:

Add to cart
Remove from cart
Update quantity
Save for later
Price on request option

Quick View Feature:

Modal popup on gemstone card
Shows:

Images
Carat
Color
Origin
Certification
Availability

Buttons:

Add to cart
Wishlist
View full details

--------------------------------

GEMSTONE FEATURES

--------------------------------

Gem Listing Page:

Grid layout
Luxury design
Filters:

Stone type
Carat range
Color
Origin
Certification
Treatment
Availability

Sorting:

Price
Newest
Carat
Popularity

Gem Details Page:

Image gallery
Zoom feature
Video support optional

Specifications:

Type
Weight
Dimensions
Color
Clarity
Cut
Origin
Treatment
Certification lab
Certificate number

Buttons:

Add to cart
Add to wishlist
Make inquiry
WhatsApp inquiry
Download certificate

--------------------------------

AI FEATURES (IMPORTANT)

--------------------------------

Add an AI assistant called:

GemAI Advisor

AI Features:

1 AI Gemstone Chatbot:

User can ask:

Is this ruby good quality?
What is best sapphire under 5 carat?
Investment grade stones?
Compare ruby vs sapphire

2 AI Stone Description Generator:

Auto generate description using:

Color
Origin
Carat
Treatment

3 AI Price Suggestion:

Suggest price range based on specs.

4 AI Stone Comparison Tool:

Compare two stones.

AI shows:

Value score
Rarity score
Investment score

5 AI Recommendation Engine:

Suggest:

Similar stones
Trending stones
Best value stones

6 AI Search:

User can type:

"Show me 3 carat natural ruby from Burma"

AI converts to filters.

7 AI Fraud Detection:

Detect duplicate certificates.
Detect unrealistic pricing.

--------------------------------

ADMIN FEATURES

--------------------------------

Admin Dashboard:

Stats:

Total stones
Total users
Total inquiries
Wishlist count
Most viewed stones

Admin Controls:

Add stone
Edit stone
Delete stone
Upload certificate
Upload multiple images
Mark sold stones
Price control
Inventory management

User Management:

View users
Suspend users
View activity

Inquiry Management:

View all inquiries
Reply from dashboard

--------------------------------

ADVANCED ECOMMERCE FEATURES

--------------------------------

Smart Cart:

Save for later
Inquiry instead of checkout
Bulk inquiry option

Optional Checkout:

Razorpay integration
Invoice generation
Order status

--------------------------------

PROFESSIONAL FEATURES

--------------------------------

Trust Features:

GIA Certified badge
IGI Certified badge
Natural Stone badge
Export Quality badge

Business Features:

Bulk order inquiry
Supplier sourcing info
Global shipping info
Certification process

--------------------------------

UI COMPONENTS REQUIRED

--------------------------------

Navbar:

Logo
Search
AI search bar
Login button
Wishlist icon
Cart icon
Profile dropdown

Components:

Gem Card
Quick view modal
AI chat widget
Filter sidebar
Search bar
Pagination
Testimonials
FAQ
Blog
Newsletter

Animations:

Hover effects
Smooth transitions
Loading skeletons

--------------------------------

DATABASE STRUCTURE

--------------------------------

User Model:

name
email
password
wishlist
cart
role
createdAt

Gemstone Model:

name
category
carat
color
origin
treatment
certification
certificateNumber
price
description
images
certificatePDF
availability
aiScore
createdAt

Wishlist Model:

userId
gemId

Cart Model:

userId
gemId
quantity

Inquiry Model:

name
email
phone
message
stoneReference

--------------------------------

SECURITY

--------------------------------

Password hashing
JWT authentication
Protected routes
Admin middleware
Rate limiting
Input validation
XSS protection

--------------------------------

AI IMPLEMENTATION DETAILS

--------------------------------

Use OpenAI API for:

Chatbot
Description generation
Recommendations

Use embeddings for:

Semantic search
Stone matching

Prompt examples:

"Generate luxury gemstone description"

"Compare these two gemstones"

"Suggest investment score"

--------------------------------

EXTRA PREMIUM FEATURES (IMPORTANT)

--------------------------------

Stone availability indicator:

Available
Reserved
Sold

Add:

Recently viewed stones
Trending stones
Popular stones

Add:

Stone video upload support
360 view support

Add:

Dark mode toggle

Add:

Multi currency support.

Add:

Export buyer inquiry form.

--------------------------------

FOLDER STRUCTURE

--------------------------------

frontend:

app
components
features
hooks
lib
store
types
utils

backend:

controllers
models
routes
middleware
services
ai
config
utils

--------------------------------

PERFORMANCE

--------------------------------

Lazy loading
Image optimization
API caching
MongoDB indexing
Code splitting

--------------------------------

DELIVERABLES

--------------------------------

Full working website
Production ready code
Clean architecture
Deployment guide
Environment variables guide
Admin setup guide

--------------------------------

IMPORTANT:

Make this look like a real international gemstone trading platform, not a demo.

Focus on:

Luxury UI
Trust design
AI features
Business usability
Clean architecture
Scalability

Code must be production quality.