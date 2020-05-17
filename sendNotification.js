const config = require("./config.js");
const axios = require("axios");

// Send notification to pushover
// axios
//   .post("https://api.pushover.net/1/messages.json", {
//     token: config.pushover_api,
//     user: config.pushover_user,
//     message: "ring fit on sale!!!!",
//   })
//   .then((res) => {
//     // console.log(`statusCode: ${res.status}`);
//     // console.log(res);
//   })
//   .catch((error) => {
//     // console.error(error);
//   });

// Send notification to slack
axios
  .post(config.slack_webhook, {
    text: "<!channel> wakkkeeee wakkkeee!",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
