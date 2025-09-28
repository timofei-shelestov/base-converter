import { Plugin } from "obsidian";

interface Dictionary<T> {
  [key: string]: T;
}

const map: Dictionary<boolean> = {};

export default class BaseConverter extends Plugin {
  onload(): Promise<void> | void {
    document.addEventListener("keydown", (event) => {
      map[event.key] = true;
      if (window.getSelection()) {
        const selectedText = window.getSelection()!.toString();
        if (map.valueOf.length === 3) {
          if (map["Control"] && map["b"] && map["d"]) {
            BinaryToDecomal(selectedText);
          }

          if (map["Control"] && map["d"] && map["b"]) {
            DecimalToBinary(selectedText);
          }

          if (map["Control"] && map["d"] && map["h"]) {
            DecimalToHexidecimal(selectedText);
          }

          if (map["Control"] && map["h"] && map["d"]) {
            HexidecimalToDecimal(selectedText);
          }
        }
      }
    });
  }
}

const BinaryToDecomal = (input: string) => {
  console.log("Worked!!!!");
};

const DecimalToBinary = (input: string) => {};

const DecimalToHexidecimal = (input: string) => {};

const HexidecimalToDecimal = (input: string) => {};
