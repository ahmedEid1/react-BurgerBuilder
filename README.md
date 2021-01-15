# The Burger Builder

## App structure
- starting point :
  - index.html >>> .root >>> \<`App` \/> 
---
- App structure :
  - `Layout`
    - `Layout` children :
      - `BurgerBuilder`
  


----
### Layout :  
- a higher order component that :
  - wrap the current page to add the site structure around it
    - site structure : 
      - `Toolbar`
      - `SideDrawer`
      - `main` :
        - the current page is embedded here (`props.children`)
  #### Layout State :
  - showSideDrawer 
    - whether to open the SideDrawer or close it
---
## ToolBar :
- ###### a navigation Component 
    - ### ToolBar Structure :
      - `DrawerToggle`
      - `Logo`
      - `NavItems`
- the navItem appear in desktop only
- rhe DrawerToggle mobile only
      
---
## SideDrawer :
- `BackDrop` on the background and sideDrawer div include :
  - `Logo`
  - `navItem`
---
### DrawToggle

### Logo

### NavItems






























