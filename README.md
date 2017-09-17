# Dependency Inversion with Redux

This repository shows how to easily decouple your apps business logic from details like your API using the dependency inversion principle in redux with redux-thunks.
The full explanation will be in a blog post which I will link here as soon as I published it.


## How it works
This app can easily be started in two different modes:

# `npm run start` - Use Data from a real HTTP API Call (using Data from https://jsonplaceholder.typicode.com)
# `npm run start:mock` - Use Data from a locally created Mock-Array

The latter script simply sets an environment-variable which in turn will make webpack pass it to the Application via the `DefinePlugin`.
The Application then decides based on that Variable which Implementation of the `TodoRepository`-Interface (Mock or HTTP) it will pass as a third argument to all redux-thunks.

Since the thunk now only needs a dependency to the `TodoRepository`-Interface, it is decoupled from where the data is actually coming from, therefore adhering to the *Simple Responsibility Principle* as well
(as we decoupled the App-State-Control from the Data-Loading).

In other words: It decoupled the apps business logic from the API-Details.

This gives us several advantages:

* The App can be developed without a Internet Connection
* We don't have to wait for the implementation of the API to implement new features or simulate certain behaviours
* If the API changes, you will only have to change one service - not your App
* It would be very easy to add new ways for Data-Loading, e.g. LocalStorage, HTTP2, Websockets etc.
