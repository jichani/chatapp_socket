module.exports = function (io) {
  // io 관련된 모든 작업들
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
