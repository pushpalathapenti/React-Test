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
