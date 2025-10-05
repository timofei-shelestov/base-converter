import { Editor, Plugin } from "obsidian";

export default class BaseConverter extends Plugin {
  onload(): Promise<void> | void {
    this.addCommand({
      id: "binary-to-decimal",
      name: "Convert selected number from binary to decimal",
      editorCallback: (editor: Editor) =>
        BinaryToDecimal(editor.getSelection()),
    });

    this.addCommand({
      id: "decimal-to-binary",
      name: "Convert selected number from decimal to binary",
      editorCallback: (editor: Editor) =>
        DecimalToBinary(editor.getSelection()),
    });

    this.addCommand({
      id: "decimal-to-hexidecimal",
      name: "Convert selected number from decimal to hexidecimal",
      editorCallback: (editor: Editor) =>
        DecimalToHexidecimal(editor.getSelection()),
    });

    this.addCommand({
      id: "hexidecimal-to-decimal",
      name: "Convert selected number from hexidecimal to decimal",
      editorCallback: (editor: Editor) =>
        HexidecimalToDecimal(editor.getSelection()),
    });
  }
}

const BinaryToDecimal = (input: string) => {
  window.navigator.clipboard.writeText(parseInt(input, 2).toString());
};

const DecimalToBinary = (input: string) => {
  window.navigator.clipboard.writeText(parseInt(input, 10).toString(2));
};

const DecimalToHexidecimal = (input: string) => {
  window.navigator.clipboard.writeText(parseInt(input, 10).toString(16));
};

const HexidecimalToDecimal = (input: string) => {
  window.navigator.clipboard.writeText(parseInt(input, 16).toString(10));
};
