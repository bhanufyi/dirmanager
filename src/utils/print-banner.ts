import figlet from "figlet";

export const printBanner = () => {
  console.log(
    figlet.textSync("DIR MANAGER", {
      horizontalLayout: "full",
      font: "3D Diagonal",
    })
  );
};
