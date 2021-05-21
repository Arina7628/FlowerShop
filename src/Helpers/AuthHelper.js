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

module.exports =
{
    CheckAuth: CheckAuth,
    AuthHeader: AuthHeader
};