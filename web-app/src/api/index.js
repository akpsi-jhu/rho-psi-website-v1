import {BrotherApi} from "./Firestore/BrotherApi";
// import FakeApi from "./Fake/FakeApi";
//const Api = new FakeApi();

const Api = new BrotherApi();

export {Api as BrotherApi};
