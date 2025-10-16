import { Editor, Notice, Plugin } from "obsidian";

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

const handleConversion = (
  input: string,
  inputBase: number,
  targetBase: number
) => {
  let output = 0;
  if (targetBase !== 10) {
    //convert from input base to decimal
    output = parseInt(input, inputBase);

    //convert to target base
    output = parseInt(output.toString(targetBase));
  }
  output = parseInt(input, inputBase);
  if (Number.isNaN(output)) {
    const notice = new Notice(
      "Error: Provided value is not a valid input for this command"
    );
    notice.messageEl;
    return;
  }
  window.navigator.clipboard.writeText(output.toString());
};

const BinaryToDecimal = (input: string) => {
  handleConversion(input, 2, 10);
};

const DecimalToBinary = (input: string) => {
  handleConversion(input, 10, 2);
};

const DecimalToHexidecimal = (input: string) => {
  handleConversion(input, 10, 16);
};

const HexidecimalToDecimal = (input: string) => {
  handleConversion(input, 16, 10);
};
