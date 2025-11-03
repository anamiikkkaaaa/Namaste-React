
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