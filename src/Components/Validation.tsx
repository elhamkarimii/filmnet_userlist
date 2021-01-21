export default function ({ name, val, validation }: any) {
  const promise = new Promise((resolve) => {
    let valid = { ...validation };
    const reg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (name === "first_name") {
      if (val.length > 20 || val.length === 0) {
        valid.first_name = "  value between 1 and 20 characters";
      } else {
        valid.first_name = "";
      }
    }
    if (name === "last_name") {
      if (val.length > 20 || val.length === 0) {
        valid.last_name = " value between 1 and 20 characters";
      } else {
        valid.last_name = "";
      }
    }
    if (name === "email") {
      if (!reg.test(val) || val.length === 0) {
        valid.email = "invalid email addres";
      } else {
        valid.email = "";
      }
    }
    valid.firstValidation = false;
    resolve(valid);
  });
  return promise;
}
