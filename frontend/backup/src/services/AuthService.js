import 'whatwg-fetch'
export default class AuthService{
  login({username, password}) {
    let promise = new Promise(function (resolve, reject) {
      // $.ajax({
      //   url: 'http://localhost:1337/api/auth/local',
      //   method: 'POST',
      //   data: {
      //     identifier: username,
      //     password: password
      //   },
      //   dataType: 'json',
      //   success: function (data) {
      //     // TODO: create a LoginActions that will process the token
      //     resolve(data);
      //   },
      //   error: function (xhr, status, err) {
      //     reject(err);
      //   }
      // });
      fetch(API,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            data
          )
        }).then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        }).then(function(response) {
          console.log("ok");
        }).catch(function(error) {
          console.log(error);
        });
    });



    return promise;
  }

}
