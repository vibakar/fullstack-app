import app from "./app";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  const HOST = "0.0.0.0";
  app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
