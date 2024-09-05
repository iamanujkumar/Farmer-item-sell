"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./Routes/users"));
const auth_1 = __importDefault(require("./Routes/auth"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const cloudinary_1 = require("cloudinary");
const MyItemRouets_1 = __importDefault(require("./Routes/ItemRoutes/MyItemRouets"));
const ItemRoutes_1 = __importDefault(require("./Routes/ItemRoutes/ItemRoutes"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
mongoose_1.default.connect(process.env.MONGO_DB);
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/dist")));
app.use("/api/auth", auth_1.default);
app.use("/api/users", users_1.default);
app.use("/api/my-items", MyItemRouets_1.default);
app.use("/api/searchItems", ItemRoutes_1.default);
// app.get("*",(req:Request,res:Response)=>{
//     res.sendFile(path.join(__dirname,"../../frontend/dist/index.html"));
// });
app.listen(8000, () => {
    console.log("server is running");
});
