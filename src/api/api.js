import axios from "axios";

import { db, storage } from "../config/firebase";
import { auth } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

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

export const signupUser = async (email, password) => {
  return await auth.createUserWithEmailAndPassword(email, password);
};

export const signinUser = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

export const signoutUser = async () => {
  return await auth.signOut();
};

export const currentUser = () => {
  return auth.currentUser;
};

export const updateProfile = (profile) => {
  return auth.currentUser.updateProfile(profile);
};

export const uploadFile = (file, userId) => {
  const storageRef = storage.ref();

  const profileRef = storageRef(userId + ".png");
  return;
};

export const sendEmailVerification = async () => {
  return await auth.currentUser.sendEmailVerification();
};

export const getCollection = async (collectionName) => {
  return await getDocs(collection(db, collectionName));
};

export const addCollection = async (collectionName) => {};
