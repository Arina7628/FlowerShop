function CheckAuth()
{
    let token = localStorage.getItem('token');
    if (token != null && token != '')
    {
      return true;
    }
    
    return false;
}

module.exports =
{
    CheckAuth: CheckAuth,
};