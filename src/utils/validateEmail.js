const validateEmail = (email) => {
  return email.match(
    /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+([A-Za-z0-9]{2,4}|museum)$/
  );
};

export default validateEmail;
