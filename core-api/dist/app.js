"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { appConfig } from './helpers/config'
const service_1 = __importDefault(require("./database/service"));
const body_parser_1 = __importDefault(require("body-parser"));
const registration_route_1 = __importDefault(require("./routes/registration.route"));
const login_route_1 = __importDefault(require("./routes/login.route"));
const crop_route_1 = __importDefault(require("./routes/crop.route"));
const farm_route_1 = __importDefault(require("./routes/farm.route"));
const harvest_route_1 = __importDefault(require("./routes/harvest.route"));
const distributor_route_1 = __importDefault(require("./routes/distributor.route"));
// Configurations 
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// const HOST = appConfig.hostProd 
const PORT = 3000;
// @zakhaev26 this will end in blood and dust
(0, service_1.default)();
// Routes
//Auth Routes [NO_JWT_MIDDLEWARE]
app.use("/registration", registration_route_1.default);
app.use("/login", login_route_1.default);
app.use("/crop", crop_route_1.default);
app.use("/farm", farm_route_1.default);
app.use("/harvest", harvest_route_1.default);
app.use("/distributor", distributor_route_1.default);
app.get('/healthz', (_, res) => {
    res.json({
        "health": "Server Healthy.",
        "isPunitGay?": true,
    });
});
app.listen(PORT, () => {
    console.log(`Server live at http://uhh...:${PORT}`);
});
