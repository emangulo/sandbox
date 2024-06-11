const bcrypt = require("bcrypt");

const input = "password";

const hashInput = async (input) => {
  try {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(input, salt);
    return hash;
  } catch (err) {
    console.error(err);
  }
};

const comparePasswords = async (password, hash) => {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (err) {
    console.error(err);
  }
};

const run = async () => {
  const hashedPassword = await hashInput(input);
  console.log(hashedPassword);

  const ismatching = await comparePasswords(input, hashedPassword);
  console.log(ismatching);
};

run();
