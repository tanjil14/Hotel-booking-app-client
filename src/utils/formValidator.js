export const validation = (info,file) => {
  const errors = {};
  const { username, email, password, phone, country, city } = info;
  if (!username) {
    errors.username = "Please Provide Your Name!";
  }
  if (!email) {
    errors.email = "Please Provide Your Email!";
  }
  if (!password) {
    errors.password = "Please Provide Your Password!";
  }
  if (!phone) {
    errors.phone = "Please Provide Your Phone!";
  }
  if (!country) {
    errors.country = "Please Provide Your Country!";
  }
  if (!city) {
    errors.city = "Please Provide Your City!";
  }
  if (!file) {
    errors.file = "Please Provide Your Photo!";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
