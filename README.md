Movie Universe.

1. Install dependencies: run "yarn install".
2. Run application: run "yarn start".

TECH STACK:
React, Sass, React router, Jest/React-test-renderer.

DESIGN:

App uses React router for page navigation. The url is used to store search information
allowing for accurate information when navigating back and forth and also refreshing the page.
A 404 not found page is used if the url does not have a match.

As the application is a simple application it has been developed using 'create-react-app'. Any more complex implementations
would require a more flexible Webpack configuration.

HOOKS have been used to separate logic from UI, also allowing for easy re-use of the logic across multiple
components if required. 

These hooks are:
UseMoviesResults.js - where movies can be searched and the response data is returned,
useMovie.js - where a movie can be searched for using an id, and the response data is returned.

A HIGHER ORDER COMPONENT - withGoBack.js allows for any component (that would require a go back button) to be wrapped and
for the logic and UI to be reused easily across the application.

Very basic styling has been used to make the application easier to use. Sass modules have been used allowing for the
encapsulation of styles within each component. This ensures styles don't bleed out. Along with this the 3rd party library
"classnames" allows for logic to be used alongside the styling.

COMPONENTS DESIGN (worth noting):

Header: This lies outside the React-router switch statement and is therefore always shown. Gives the user constant home access.

SearchPage: Holds the logic decisions for the search query change or submit, and the pagination change. Uses the
withMoviesResults hook to gain access to movies data.

InputForm: A basic and flexible component allowing for onChange or onSubmit, conditionally render a label or placeholder,
and pass optional validation in.

ResultsList: This has been designed to be a generic component, to be reusable for future development within the
application. It takes results as a prop and it allows for differing styles of result items to be passed in
(in this case MovieItem, maybe in the future a list of movie directors), and also includes the option for pagination if needed.

MoviePage: Similar to SearchPage, this holds the logic for listening to an id and calling the useMovie hook, passing the
results down to the relevant UI components.

Loader: This component wraps around the children it is loading for. Fetch information is used to either "show" or "hide",
the loader or the children within. To overcome the spinny loader flashing on and off when the api call is very quick (most times), 
a delay of 500ms is the default waiting time until this loader is called into action (the delay can be switched off).

TESTING:

Jest/React-test-renderer have been used to create unit tests. Only some functions have been tested - SearchPage.js and helpers.js.
The popular and well tested 3rd party library jest-fetch-mock has been used to mock the api calls.
The tests in SearchPage.js test the logic only, further snapshots can be taken for the UI components.
I prefer to shallow test, meaning for SearchPage.js I will only test what is the responsibility for that component i.e
expect the values of the props being passed down to have changed, rather than what is seen on the screen (the responsibility
of MovieItem).
If I had more time I would test each of the smaller components individually, again isolated.
For more 







