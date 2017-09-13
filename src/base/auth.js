/*
* @Author: zhennann
* @Date:   2017-09-13 11:48:54
* @Last Modified by:   zhennann
* @Last Modified time: 2017-09-13 21:57:51
*/

export default function(Vue) {

  return {
    state: {
      loggedIn: false,
      user: null,
    },
    mutations: {
      login(state, { user }) {
        state.loggedIn = true;
        state.user = user;
      },
      logout(state) {
        state.loggedIn = false;
      },
    },
  };

}

