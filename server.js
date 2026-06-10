const express = require("express");

const asociadosRoutes = require("./src/routes/asociados.routes");
const fincasRoutes = require("./src/routes/fincas.routes");
const cosechasRoutes = require("./src/routes/cosechas.routes");
const ventasRoutes = require("./src/routes/ventas.routes");

const app = express();

app.use(express.json());

app.use("/asociados", asociadosRoutes);
app.use("/fincas", fincasRoutes);
app.use("/cosechas", cosechasRoutes);
app.use("/ventas", ventasRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "API Café de Altura funcionando"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(
        `Servidor ejecutándose en http://localhost:${PORT}`
    );
});