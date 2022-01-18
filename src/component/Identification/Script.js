const Script = () => {
  var signin = document.querySelector("#sign_in");
  var register_f = document.querySelector("#register");
  setTimeout(function () {
    register_f.checked = true;
    console.log('Привет от JavaScript!');
  }, 200);
  setTimeout(function () {
    signin.checked = true;
    console.log('Привет от JavaScript!');
  }, 200);

  const sign_in = document.getElementById("sign_in");
  const user_name = document.getElementById("user_name");
  const password = document.getElementById("password");

  sign_in.addEventListener("click", () => {
    console.log("sign_in.addEventListener");
    const user = { user_name: user_name.value, password: password.value };

    fetch("/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          alert("Error login");
        } else {
          window.location = "/";
        }
      });
  });
};

export default Script;