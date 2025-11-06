# Creating all files
- src folder
    -components
      -Header
        -Home
        -About(Component)
        -Contact(Component)
        -Cart
      -Body
        -Search
        -filter
        -RestaurantCard(Component)
          -RestaurantMenu(Component)
      -Error
      -Shimmer
    -utils
      -constants
      -dummy data etc
    -App.js (renders what?)
      -AppLayout
      -Contact
      -About
      -Body
      -Error
      -Header
      -RestaurantMenu
-index.html
-index.css
-README.md (notes)
-.gitignore(/dist, .parcel-cache, /node_modules)

# Initialising a node project (npm init)
-add github repo link
-define script
-remove main
    why???
    For example, if you publish your package to npm and someone writes:
    import myPackage from "my-package";
    Node will look at your package.json and load whatever file "main" points to — like "main": "index.js".
    💡 But in your case…
    You’re not building a Node.js library, you’re building a frontend React app using Parcel.
    Parcel automatically detects your entry file (index.html) and bundles everything starting from there.
    So you don’t need "main" because:
    You’re not exporting anything for others to import.
    Parcel doesn’t use "main" — it uses your HTML entry point.
    Keeping "main" sometimes confuses bundlers or causes warnings like:
    ⚠️ Could not resolve entry point "index.js" in package.json
# Installing dependencies 
-devDependencies (npm i -D)
   -parcel
-dependencies 
   -react
   -react-dom
   -react-dom-router


# Now let's code 
  # .gitignore
    -We have added files to not commit to github
    -They'll look a bit greyed-out
  # index.html
    -We give our document a title
    -we add a root div and add h1: App Not Rendered
    -we add script tag and src it to the App.js
    -we add Attribute type="module" 
        why??
        so that the browser knows our JavaScript file is written as an {ES6 Module} — meaning it can use modern syntax like:
        import React from "react";
        export default something;
        Without type="module", the browser treats it as a regular (classic) script and will throw errors for import/export.
   # Header.js
     -Inside the component Header
          -we define img: logo
          -home page
          -about page
          -contact page
          -cart page
          -login button
     -We export Header

   # RestaurantCard.js
     -Inside the RestaurantCard component
          -we define a div with headings(template for idea)
     -Export it
   # Body.js
     -import Restaurant card
     -Body component 
         -Search input
         -Search button
         -Render RestaurantCard
     -export it
   # App.js
     -import Body
     -import Header
     -import react-dom
     -AppLayout component
     -render Header and Body inside it
     -createRoot
     -render AppLayout inside root
     
