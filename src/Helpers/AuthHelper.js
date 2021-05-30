function CheckAuth()
{
    let token = localStorage.getItem('token');
    if (token != null && token != '')
    {
      return true;
    }
    
    return false;
}

function AuthHeader()
{
  const token = localStorage.getItem('token')

  if (token && token != null && token != '') {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
}

function IsManager()
{
  let auth = CheckAuth()
  return auth ? ((localStorage['role'] == 'manager' || localStorage['role'] == 'administrator') ? true : false) : false;
}

function IsAdministrator()
{
  let auth = CheckAuth()
  return auth ? (localStorage['role'] == 'administrator' ? true : false) : false;
}

function Relogin()
{
  const login = localStorage.getItem('login')
  const password = localStorage.getItem('password')

  var request = new XMLHttpRequest();
  request.open("POST", `https://localhost:44350/connect/token`, true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.addEventListener("load", function ()
  {
      if (request.status == 200)
      {
          let data = JSON.parse(request.response);
          let token = data['access_token']
          console.log(data)
          localStorage.setItem('token', token)
          window.location.href = '/';
      }
      else
      {
        delete localStorage['token']
        delete localStorage['role']
        delete localStorage['login']
        delete localStorage['password'] 
      }
  });

  request.send(
      "grant_type=password" +
      "&client_id=quickapp_spa" +
      "&scope=quickapp_api" +
      "&client_secret=not_used" +
      "&username=" + login +
      "&password=" + password);
}

module.exports =
{
    CheckAuth: CheckAuth,
    AuthHeader: AuthHeader,
    IsManager: IsManager,
    IsAdministrator: IsAdministrator,
    Relogin: Relogin
};