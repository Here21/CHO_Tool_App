export const BMR = (weight, stature, age, gender) => {
  if (gender === 1) {
    return 66 + (13.7 * weight) + (5.0 * stature) - (6.8 * age);
  }
  return 655 + (9.6 * weight) + (1.7 * stature) - (4.7 * age);
}

export const BMRP = (weight, stature, age) => {
  return 66 + (13.7 * weight) + (5.0 * stature) - (6.8 * age);
}
