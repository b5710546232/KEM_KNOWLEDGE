// import 'whatwg-fetch'
// export default class AuthService{
//   login({username, password}) {
//     let promise = new Promise(function (resolve, reject) {
//       fetch(API,
//         {
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(
//             data
//           )
//         }).then(function(response) {
//           if (!response.ok) {
//             throw Error(response.statusText);
//           }
//           return response;
//         }).then(function(response) {
//           console.log("ok");
//         }).catch(function(error) {
//           console.log(error);
//         });
//     });
//
//
//
//     return promise;
//   }
//
// }
module.exports = {
    login: function(username, pass, cb) {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    },

    logout: function() {
        delete localStorage.token
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(username, pass, cb) {
        $.ajax({
            type: 'POST',
            url: '/api/obtain-auth-token/',
            data: {
                username: username,
                password: pass
            },
            success: function(res){
                cb({
                    authenticated: true,
                    token: res.token
                })
            }
        })
    },
}
