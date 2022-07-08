import axios from "axios";

// import { db, storage,auth } from "../config/firebase";
import { auth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";

import {
  fetchCoinsFailure,
  fetchCoinsPending,
  fetchCoinsSuccess,
  fetchCoinsPricesFailure,
  fetchCoinsPricesPending,
  fetchCoinsPricesSuccess,
} from "../redux/actions";

export const everyCoin = () => async (dispatch) => {
  const baseUrl = "https://api.coinranking.com/v2";
  dispatch(fetchCoinsPending());

  try {
    const res = await axios({
      method: "GET",
      url: `${baseUrl}/coins`,
      headers: {
        // "x-access-token": process.env.REACT_APP_COINRANKING_ORIGINAL_KEY,
      },
    });

    dispatch(fetchCoinsSuccess(res.data.data));
    const coinList = res.data.data.coins.reduce((arr, coin) => {
      arr.push(coin.symbol);
      return arr;
    }, []);
    dispatch(getCoins(coinList));
  } catch (err) {
    dispatch(fetchCoinsFailure(err));
  }
};

const getCoins = (coinList) => async (dispatch) => {
  const baseUrl = "https://min-api.cryptocompare.com/data";
  const currencies = "USD,GBP,GHS,EUR,NGN";

  // const coins = coinList.slice(0, 60).join(",");
  const coins = coinList.join(",");

  const apikey = process.env.REACT_APP_CRYPTOCOMPARE_API_KEY;

  dispatch(fetchCoinsPricesPending());

  try {
    const res = await axios({
      method: "GET",
      url: `${baseUrl}/pricemulti`,
      params: { api_key: apikey, fsyms: coins, tsyms: currencies },
    });
    dispatch(fetchCoinsPricesSuccess(res.data));
  } catch (error) {
    dispatch(fetchCoinsPricesFailure(error));
    console.log(error);
  }
};

export const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signinUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signoutUser = () => {
  return signOut(auth);
};

export const currentUserLogged = (callBackFn) => {
  return onAuthStateChanged(auth, callBackFn);
};

export const currentUser = () => {
  return auth.currentUser;
};

export const updateUserProfile = (profile) => {
  return updateProfile(auth.currentUser, profile);
};

export const sendUserEmailVerification = () => {
  return sendEmailVerification(auth.currentUser);
};

export const sendUserResetEmail = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const addDataToDb = async (data) => {
  const docRef = await addDoc(collection(db, "users"), data);
  return docRef;
};

export const getDataFromDb = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot;
};
