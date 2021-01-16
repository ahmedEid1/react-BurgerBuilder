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
  - `navItems`
---
### DrawToggle
- in the toolbar
- when clicked change the `showSideDrawer` in the layout state to true
  - which open the side drawer

### Logo
- used in the toolBar + the sideDrawer
- has no state and affect no state
  - visual component

### NavItems
- inside the toolbar 
  - have `Desktop only class`
- consist of a list of `NavItem`

### NavItem 
- a lis item with a link inside it 

###  BackDrop 
- a background to the Checkout and the SideDrawer
- when clicked remove the element in display 
-------------------
## BurgerBuilder
































