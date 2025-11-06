
  if no dependency array => useEffect is called on every render
  if dependency array is empty = [] =>
  useEffect is called on initial render and just once
  if dependecy array contains a state, then
  useEffect is called everytime that state re-renders

  do not create your states outside component
  or inside if/else, loops, functions
  only declare then at top inside your component

  # there are 2 types of Routing in web apps
  -Client Side Routing
  -Server Side Routing


 # Starbucks Coffee Menu api
  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7041103&lng=75.888232&restaurantId=403809&catalog_qa=undefined&submitAction=ENTER
  # Apna Sweets Menu api
  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7041103&lng=75.888232&restaurantId=199664&catalog_qa=undefined&submitAction=ENTER

  https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576


  when a class based component is rendered first the constructor is called then the render is called, then
  ComponentDidMount is called
  componentDidMount is used to make an api call
  why?
  in functional based component we make api calls 
  inside the useEffect because load-->render-->api call-->re-render cycle is supposed to be carried out

  -parent constructor
  -parent render
    
    -Akshay constructor first child
    -Akshay Render 
    
    -Anamika constructor second child
    -Anamika Render

  -Akshay component did mount
  -Anamika component did mount

  -Parent component did mount 

  why???
  look up on website react lifecycle method
  after the first child render then second child render 
  then the diff is calculated then the reconciliation is
  done then dom is updated, 
  react tries to batch the dom manipulation, dom is updated in a single batch rendering as it is 
  expensive task
  

  Constructor (dummy)
  Render (dummy)
    <HTML Dummy> 
  Component Did Mount
    <API call>
    <this.setState> --> State is updated

----Update
     
    render(API data)



    hooks are utility functions
