import { initializeApp } from "firebase/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import config from "./config";

const app = initializeApp(...config);

export default app;
