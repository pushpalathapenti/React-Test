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

- Everything in react is a component.
  Component :
  They are 2 types of component in react
  1)Class based component - OLD Way
  2)Functional Component - New Way
  React Functional Component is just a normal javascript function which returns some JSX
  => component composition: composisng two components into one another
  Q) What is a Functional Component?
  its a normal Javascript Function which returns some piece of JSX code.
  =======================================================
  Advantages of using JSX.

1. Sanitizes the data
   If someone gets access to your JS code and sends some malicious
   data which will then get displayed on the screen, that attack is
   called cross-site scripting.
   It can read cookies, local storage, session storage, get
   cookies, get info about your device, and read data. JSx takes
   care of your data.
   If some API passes some malicious data JSX will escape it. It
   prevents cross-site scripting and sanitizes the data before
   rendering
2. Makes code readable
   JSX makes it easier to write code as we are no longer creating
   elements using React.createElement()
3. Makes code simple and elegant
4. Show more useful errors and warnings
5. JSX prevents code injections (attacks)
   Props:- Short form for properties. To dynamically send data to a
   component we use props. Passing a prop to a function is like
   passing an argument to a function.
   -->Config Driven UI:-
   It is a user Interface that is built and configured using a
   declaration configuration file or data structure, rather than
   being hardcoded.
   Config is the data coming from the api which keeps on changing
   according to different factors like user, location, etc.
   --Unique Key id while using map-
   Each item in the list must be uniquely identified
   Why?
   When we have components at same level and if a new component
   comes on the first without ID, DOM is going to re-render all the
   components again. As DOM can’t identify where to place it.
   But if we give each of them a unique ID then react knows where
   to put that component according to the ID. It is a good
   optimization and performance thing.
   _Note_ Never use index as keys in map. It is not recommended.
   ---Unique Key id while using map-
   Each item in the list must be uniquely identified
   Why?
   When we have components at same level and if a new component
   comes on the first without ID, DOM is going to re-render all the
   components again. As DOM can’t identify where to place it.
   But if we give each of them a unique ID then react knows where
   to put that component according to the ID. It is a good
   optimization and performance thing.
   Note\* Never use index as keys in map. It is not recommended.
