import { app } from "electron";

import { onReady } from "@main/ready";

app.whenReady().then(onReady);
