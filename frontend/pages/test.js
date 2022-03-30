import { email } from "../components/apis/auth";

const response = email()
  .then((res) => {
    console.log(res);
    return res;
  })
  .catch((err) => {
    console.log(err);
  });
