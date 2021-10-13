![logo.png](https://i.ibb.co/qRpcvwF/545.png)

#### Clothing shop made using `React` & `Firebase` with `Stripe` payments implemented.

> **You** can try it out on https://crwn-stor.herokuapp.com/

## Features

-   Persistant data with local storage
-   Authentication with either Google or email and password
-   Asynchronous events handling
-   Payments with Stripe

## Technologies

**Design**: _styled-components_  
**Authentication**: _Firebase auth_  
**Database**: _Firestore_  
**Backend**: _Firebase & Node.js_

**Libraries**:

> -   redux-logger: console logging redux data flow
> -   redux: state management
> -   redux-saga: handling asynchronous events keeping actions pure
> -   axios: implement api requests with ease
> -   reselect: reusing redux selectors in a performant way
> -   redux-persist: storing data in local storage
> -   compression: for gzipping our files on heroku

## Installation

### 1. Clone the project

```
~ git clone https://github.com/visibiIis/clothing-store.git
```

### 2. Get into it

```
~ cd clothing-store
```

### 3. Install dependencies for server and client

```
~ npm i && cd client && npm i
```

### 4. Too run app

```
~ npm run dev
```

## Connect to Firebase

### 1. Go to Firbase [console](<(https://console.firebase.google.com/)>) > Project setting

![config.png](https://i.ibb.co/dP7xPYc/Screenshot-1-1.png)

### 2. Replace **_src/firebase/firebase.utils.js_** `config` with it.

## Usage of Stripe

### 1. Go to Stripe [Dashboard](https://dashboard.stripe.com) > Developers > API keys

### 2. Set the `publishableKey` in the `StripeCheckoutButton` from "Publishable key" field

### 3. Set `STRIPE_SECRET_KEY="YOUR_STRIPE_SECRETKEY"` in the **_clothing-store/.env_**
