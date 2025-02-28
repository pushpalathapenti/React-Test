#React

#parcel
-Dev Build
-Local Server
-HMR = HOT MODULE REPLACEMENT
-Parcel uses FILE MATCHING ALGORITHM - written by c++
-Parcel cache gives you faster building
-parcel bacically do Image Optimization
-parcel will do bundling and minify and optimize it, parcel compresses the large files.
-it also do consistent Haching
-it will do code splitting
-it will also do differential bundling
-Error Handling
-HTTPs
-tree shaking-> remove unused code
-Different build for DEV and Production bundles
-JSX is not a valid Pure javascript,
-JS engine can not understand jsx language, it understands all the versions of ECMA Script language
-When you write a code in JSX ,this jsx code is transpiled before it reaches the Javascript Engine.
-transpiled means this code is coverted to the code that browsers and react can understand.
-BABEL is transpiling our code.
-BABEL is a javascript compiler,
-If we want to give an attribute in jsx we have to give in camelCase

#Food Ordering App - React Learning
/\*\*

- Header
- -Logo Component
- -NavItem Component
-
- Body
- -Search Component
- -Restaurent Container
- --Restaurent Cards
- ---Img
- ---Name of Res, Star Rating,Cuisine,DeliveryTime.
-
- Footer
- -Copyright
- -Links
- --Adress
- --Contact
- \*/

----->>>>>>
Two types of Export/Import

-Default Export/Import

export default <name of component>

import component from 'path'

-Named Export/Import

export const component;

import {component} from 'path';

#React Hooks
{Normal Javascript utility functions}
There are multiple react Hooks
-useState():-This is used to generate super Powerful react variables
firstly we have to import useState from react[Lite a named import i mean {useState}like this]
-useState is used to create a state Variable(becoz it maintains the state of the component.)
How we create it is ?
=> const[listOfRestarants] = useState([])
=>WhenEver a state variable changes React will rerender the component.
-useEffect()
