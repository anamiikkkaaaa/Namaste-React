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
    -we add index.css link
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
          -Inside div: logo-container
              -we define img: logo
          -Inside div: nav-items
              -we create a list inside which these are the list items
                -home page
                -about page
                -contact page
                -cart page
                -login button
              -we define a state variable to change the
              login logout button on 
      Now our header is done, its css is done 
      Now we will create res-card with actual data;
     -We export Header
     -we define a basic RestaurantCard because we need to render it in our body and we need to define body first because we're passing the resData while rendering Restaurant card
     -we add links
   # Body.js
     -import Restaurant card, Restaurant_list_api
     -import useState, useEffect, Shimmer
     -Body component 
          -define state variables
          -fetchData function
          -call the fetchData function inside useEffect
          -div: body
              -div: filter
                  -div: search
                     -input: search-box
                        -define the value of input so that we can read it in react
                     -button: search-btn
                        -use that value to filter res that includes that value
                  -button: filter
              -div: res-container
                  -{map the restaurants, pass data, pass key}
     -export it
     -Now we go back to the RestaurantCard to make it dynamic
     -we add a link in res-card div and in the link we pass the key, path to the menu and we render restaurantCard in it while passing resData

   # RestaurantCard.js
     -Inside the RestaurantCard component
          -we define a div with headings(template for idea)
          -import cdn_url
          -pass the props
          -define the props variables
          -now inside return div we =>
          -define the img with src cdn_url          +cloudinaryImageId
          -we define the h3, h4 for res info 
     -Export it
     -Now we go to define css for our res-cards
     -then we go to define our shimmer component
     and it's css
     -we got a perfectly fine home page now
     -we basic basic define RestaurantMenu, about, contact components.
     -so that can can deal with our links, routing system is our App.js
     
   # App.js
     -import Body
     -import Header
     -import react-dom
     -AppLayout component
     -render Header and Body inside it
     -createRoot
     -render AppLayout inside root
     -now we have imported about, body, header, contact, resturantmenu
     -import Outlet, createBrowserRouter, RouterProvider
     -render Header and Outlet inside AppLayout
     -then we define appRouter
     -we render RouterProvider and inside it we pass appRouter
     -now we add links in restaurantMenu and header
     -link for res-menu is added in body while rendering res-card so when we click on that card we got to res-menu
     -Now our link system is done we need to define res-menu and about page and error page

   # index.css
     -write it while you keep adding features and components to your site
     -just remember to define well structured classes and then it'll be easy peesy
     -Margin, padding, hover, border, list-style-type,
     cursor, display, remember that a div takes height of it's content, define width, width takes entire width of the page by default
     -By default, flex items all try to fit in one line even if they overflow the container.
     flex-wrap controls whether they stay on one line or wrap to the next.
     flex-wrap: wrap;
     -This changes the mouse cursor appearance when hovering over an element.
     it’s mainly for clickable elements like buttons, links, or cards.
     cursor: pointer;

   # Restaurant Menu
     - we import Res-menu-api
     -useState variable for menu
     -fetchMenuData, setmenudata
     -call fetchMenuData fn inside the useEffect hook
     -basic structure with res-info and menu
     -if code written it at the top of the file,      outside the component function.
      That means it runs as soon as the file is imported, not when the component is rendered.
     -Suppose restaurant.info.id === 123456.
      Clicking the link changes the browser URL to /restaurant/123456. ✅
      React Router checks your route definitions.
      /restaurant/123456 matches /restaurant/:resId, so it mounts <RestaurantMenu />.
      Notice: the number 123456 travels in the URL, not as a JavaScript variable.
     -so it renders the res-menu with that id, and we can use the resId in resmenu now using params
     -In JavaScript, everything is either truthy or falsy when used in a condition (if, !, ||, etc).
     -✅ Truthy means: the value counts as “true” in an if-statement.
     -❌ Falsy means: the value counts as “false”.
     -These are the only values that are treated as false:

      Value	      Meaning
      false	      obviously false 😄
      0	          zero
      ""	        empty string
      null	      nothing
      undefined	  not defined
      NaN	        not a number
        
     -Everything else is truthy — even things that look empty like [] or {}.
     -map over the item-cards array

   # Error.js
    -import useRouteError
    -define err variable inside Error component
    -return div
       -h1
       -h3 with err.status and err.statusText
     
