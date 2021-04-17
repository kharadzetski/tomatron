import { app } from "electron";

import { configWindow } from "@main/config/configWindow";
import { configureTray } from "@main/config/configTray";

app.whenReady().then(configWindow).then(configureTray);
