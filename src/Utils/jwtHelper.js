export const jwtDecrypt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const tokenAlive = (exp) => {
  if (Date.now() >= exp * 1000) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    return false;
  }
  return true;
};
