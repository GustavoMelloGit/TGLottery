function calculateRemainingTime(expirationTime: string) {
  const now = new Date();
  const difference = new Date(expirationTime).getTime() - now.getTime();
  const remainingTime = difference / 1000;
  return remainingTime;
}

export { calculateRemainingTime };
