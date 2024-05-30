Country Redux
The main branch has the app build by using general state management principles.

The redux branch has the same app build using Redux Old.

Redux
Redux has three main components

Store : which has all the data
Reducer : which will mutate the data - tell how to do
Actions : which will tell what to do.

Genreal design thinking:

Identify what state exists in the app.
Identify how state changes over time.
Group together common piece of state.
Create a slice for each group.

We start with the state.
state : countryList,country
Actions : COUNTRIES_RECIEVED, SET_COUNTRY

Will create the state from the reducers.
