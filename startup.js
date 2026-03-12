const { spawn } = require("child_process");

const processBot = spawn("bash", ["start.sh"], {
  stdio: "inherit",
  shell: true
});

processBot.on("close", (code) => {
  console.log("Bot finalizado com código:", code);
});