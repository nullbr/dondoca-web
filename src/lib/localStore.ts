export function storeRefreshToken(token: string) {
  localStorage.setItem("refreshToken", token);
}

export function removeRefreshToken() {
  localStorage.removeItem("refreshToken");
}

export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}
