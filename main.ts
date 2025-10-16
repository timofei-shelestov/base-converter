import { Editor, Notice, Plugin } from "obsidian";

export default class BaseConverter extends Plugin {
  onload(): Promise<void> | void {
    this.addCommand({
      id: "binary-to-octo",
      name: "Convert selected number from binary to octo",
      editorCallback: (editor: Editor) => BinaryToOcto(editor.getSelection()),
    });

    this.addCommand({
      id: "binary-to-decimal",
      name: "Convert selected number from binary to decimal",
      editorCallback: (editor: Editor) =>
        BinaryToDecimal(editor.getSelection()),
    });

    this.addCommand({
      id: "binary-to-hexidecimal",
      name: "Convert selected number from binary to hexidecimal",
      editorCallback: (editor: Editor) =>
        BinaryToHexidecimal(editor.getSelection()),
    });

    this.addCommand({
      id: "octo-to-binary",
      name: "Convert selected number from octo to binary",
      editorCallback: (editor: Editor) => OctoToBinary(editor.getSelection()),
    });

    this.addCommand({
      id: "octo-to-decimal",
      name: "Convert selected number from octo to decimal",
      editorCallback: (editor: Editor) => OctoToDecimal(editor.getSelection()),
    });

    this.addCommand({
      id: "octo-to-hexidecimal",
      name: "Convert selected number from octo to hexidecimal",
      editorCallback: (editor: Editor) =>
        OctoToHexidecimal(editor.getSelection()),
    });

    this.addCommand({
      id: "decimal-to-binary",
      name: "Convert selected number from decimal to binary",
      editorCallback: (editor: Editor) =>
        DecimalToBinary(editor.getSelection()),
    });

    this.addCommand({
      id: "decimal-to-octo",
      name: "Convert selected number from decimal to octo",
      editorCallback: (editor: Editor) => DecimalToOcto(editor.getSelection()),
    });

    this.addCommand({
      id: "decimal-to-hexidecimal",
      name: "Convert selected number from decimal to hexidecimal",
      editorCallback: (editor: Editor) =>
        DecimalToHexidecimal(editor.getSelection()),
    });

    this.addCommand({
      id: "hexidecimal-to-binary",
      name: "Convert selected number from hexidecimal to binary",
      editorCallback: (editor: Editor) =>
        HexidecimalToBinary(editor.getSelection()),
    });

    this.addCommand({
      id: "hexidecimal-to-octo",
      name: "Convert selected number from hexidecimal to octo",
      editorCallback: (editor: Editor) =>
        HexidecimalToOcto(editor.getSelection()),
    });

    this.addCommand({
      id: "hexidecimal-to-decimal",
      name: "Convert selected number from hexidecimal to decimal",
      editorCallback: (editor: Editor) =>
        HexidecimalToDecimal(editor.getSelection()),
    });
  }
}

const handleConversion = (
  input: string,
  inputBase: number,
  targetBase: number
) => {
  let output: string | number = 0;
  if (targetBase !== 10) {
    //convert from input base to decimal
    output = parseInt(input, inputBase);

    //convert to target base
    output = output.toString(targetBase);
  } else {
    output = parseInt(input, inputBase);
  }
  if (Number.isNaN(output)) {
    const notice = new Notice(
      "Error: Provided value is not a x input for this command"
    );
    notice.messageEl;
    return;
  }
  window.navigator.clipboard.writeText(output.toString());
};

const BinaryToOcto = (input: string) => {
  handleConversion(input, 2, 8);
};

const BinaryToDecimal = (input: string) => {
  handleConversion(input, 2, 10);
};

const BinaryToHexidecimal = (input: string) => {
  handleConversion(input, 2, 16);
};

const OctoToBinary = (input: string) => {
  handleConversion(input, 8, 2);
};

const OctoToDecimal = (input: string) => {
  handleConversion(input, 8, 10);
};

const OctoToHexidecimal = (input: string) => {
  handleConversion(input, 8, 16);
};

const DecimalToBinary = (input: string) => {
  handleConversion(input, 10, 2);
};

const DecimalToOcto = (input: string) => {
  handleConversion(input, 10, 8);
};

const DecimalToHexidecimal = (input: string) => {
  handleConversion(input, 10, 16);
};

const HexidecimalToBinary = (input: string) => {
  handleConversion(input, 16, 2);
};

const HexidecimalToOcto = (input: string) => {
  handleConversion(input, 16, 0);
};

const HexidecimalToDecimal = (input: string) => {
  handleConversion(input, 16, 10);
};
