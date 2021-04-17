import { app, Menu, Tray } from "electron";
import path from "path";

import tomato from "@assets/tomato.png";

let tray: Tray = null;
export const configureTray = (): void => {
  tray = new Tray(path.join(__dirname, tomato));
  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "Quit",
        type: "normal",
        click() {
          app.quit();
        },
      },
    ])
  );
};
