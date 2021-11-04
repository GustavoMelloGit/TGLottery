export function emailIsValid(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function passwordIsValid(password: string) {
  return password.length >= 6;
}

export function authenticationIsValid(
  email: string,
  password: string
): boolean {
  return emailIsValid(email) && passwordIsValid(password);
}
