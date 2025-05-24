# 🛒 EZCart - React E-commerce App

**EZCart** is a modern, responsive e-commerce web app built with **React** and **Tailwind CSS**. It includes features like product listing, filtering, searching, cart management, and a smooth checkout experience — everything needed for a full-fledged shopping frontend.

---

## 🚀 Features

- 🖼️ Browse Products with Image & Price  
- 🔍 Search, Category, Price & Rating Filters  
- 📦 Add to Cart / Remove from Cart  
- 🧮 Quantity Update & Subtotal Calculation  
- 🛑 Protected Routes (Dummy Auth Logic)  
- 💾 Cart Persistence using LocalStorage  
- 🧾 Checkout Page UI (Frontend only)  
- 📱 Mobile-Responsive Design  

---

## ⚙️ Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Routing**: React Router DOM  
- **State Management**: React Context API  
- **API**: DummyJSON / Fake Store API  

---

## 📁 Folder Structure


```
ezcart/
├── public/
├── src/
│   ├── components/       # Navbar, ProductCard, etc.
│   ├── context/          # Cart Context API
│   ├── pages/            # Home, Cart, Login, Signup, Checkout
│   ├── data/             # Local product data (if any)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```


---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/2kAiwithAnmol/EZCart.git
cd ezcart

### 2. Install Dependencies
npm install

### 3. Run the App
npm run dev

##. Made with 💙 by Anmol