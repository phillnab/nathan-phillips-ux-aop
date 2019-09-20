import firebase from "firebase/app";
import "firebase/database";

class firebaseApi {

  static getUsers() {
    const existingUsers = firebase.database().ref().child('users');
    existingUsers.on('value', snap => console.log(snap.val()));
    console.log(existingUsers);
    return existingUsers;
  }

  // static getUser(userId) {
  //   return localStorageApi.getUsers().find(storedUsers =>  storedUsers.id === userId );
  // }

  // static createUser(newUserProfile) {
  //   const existingUsers = localStorageApi.getUsers();
  //   existingUsers.push(newUserProfile);
  //   localStorage.setItem("storedUsers", JSON.stringify(existingUsers));
  // }

  // static updateUser(userId, newUserData) {
  //   const existingUsers = localStorageApi.getUsers();
  //   const newUserProfile = Object.assign(localStorageApi.getUser(userId), newUserData);
  //   const userKey = existingUsers.findIndex(user => user.id === userId);
  //   existingUsers.splice(userKey, 1, newUserProfile);
  //   localStorage.setItem("storedUsers", JSON.stringify(existingUsers));
  // }

  // static deleteUser(userId) {
  //   const existingUsers = localStorageApi.getUsers();
  //   const userKey = existingUsers.findIndex(user => user.id === userId);
  //   existingUsers.splice(userKey, 1);
  //   localStorage.setItem("storedUsers", JSON.stringify(existingUsers));
  // }

  // static deleteUsers() {
  //   localStorage.clear();
  //   const existingUsers = localStorageApi.getUsers();
  //   localStorage.setItem("storedUsers", JSON.stringify(existingUsers));
  // }

  static genId() {
    return '' + Math.random().toString(9).substr(2, 3);
  }

  // static validateUser(user) {
  //   const existingUsers = localStorageApi.getUsers();
  //   const existingIds = existingUsers.map(user => user.id); 
  //   if (!existingIds.includes(user.id)) {
  //     return true;
  //   }
  //   else {
  //     return console.log("insert attempt failed. "), false;
  //   }
  // }
}
export default firebaseApi;