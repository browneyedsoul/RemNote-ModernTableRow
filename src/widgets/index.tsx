import {declareIndexPlugin, ReactRNPlugin} from "@remnote/plugin-sdk";

export const [TABLE, WIDTH] = ["table", "width"];

let TableCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const response = await fetch("snippet.css");
    const text = await response.text();
    TableCSS = text;
    await plugin.app.registerCSS("tableCSS", TableCSS);
    console.log("Table Installed from local");
  } catch (error) {
    const response = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/src/snippet.css",
    );
    const text = await response.text();
    TableCSS = text;
    await plugin.app.registerCSS("tableCSS", TableCSS);
    console.log("Table Installed from cdn");
  }
  await plugin.settings.registerStringSetting({
    id: "opacity",
    title: "Ruler Opacity",
    description: "Opacity of the Ruler for measuring left column width",
    defaultValue: "0.25",
  });
  plugin.track(async (reactivePlugin) => {
    const opacityCtrl = await reactivePlugin.settings.getSetting<number>("opacity");
    await reactivePlugin.app.registerCSS(
      "opacity",
      `
#hierarchy-editor [data-rem-container-tags*="table1"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table2"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table3"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table4"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table5"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table6"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table7"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table8"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table9"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
      `,
    );
  });

  await plugin.app.registerPowerup("Table", TABLE, "Attribute Column Width", {
    slots: [
      {
        name: "TH",
        code: "tableheader",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table90",
        code: "table90",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table120",
        code: "table120",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table150",
        code: "table150",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table180",
        code: "table180",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table210",
        code: "table210",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table240",
        code: "table240",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table270",
        code: "table270",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table300",
        code: "table300",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table330",
        code: "table330",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table360",
        code: "table360",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table390",
        code: "table390",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        code: "table420",
        name: "Table420",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        name: "Table450",
        code: "table450",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table480",
        code: "table480",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table510",
        code: "table510",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table540",
        code: "table540",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table570",
        code: "table570",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table600",
        code: "table600",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table630",
        code: "table630",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table660",
        code: "table660",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table690",
        code: "table690",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table720",
        code: "table720",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table750",
        code: "table750",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table780",
        code: "table780",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table810",
        code: "table810",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table840",
        code: "table840",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table870",
        code: "table870",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table900",
        code: "table900",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table930",
        code: "table930",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table960",
        code: "table960",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table990",
        code: "table990",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table1020",
        code: "table1020",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table1050",
        code: "table1050",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table1080",
        code: "table1080",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table1110",
        code: "table1110",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table1140",
        code: "table1140",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table1170",
        code: "table1170",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: "Table1200",
        code: "table1200",
        hidden: false,
        onlyProgrammaticModifying: false,
      },
    ],
  });
  await plugin.app.registerPowerup("Width", WIDTH, "Global Column Width", {
    slots: [
      {
        code: "w100",
        name: "W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w200",
        name: "W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w300",
        name: "W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w400",
        name: "W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w500",
        name: "W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w600",
        name: "W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w700",
        name: "W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w800",
        name: "W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w900",
        name: "W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "w1000",
        name: "W1000",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w100",
        name: "C1W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w100",
        name: "C2W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w100",
        name: "C3W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w100",
        name: "C4W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w100",
        name: "C5W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w100",
        name: "C6W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w100",
        name: "C7W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w100",
        name: "C8W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w100",
        name: "C9W100",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w200",
        name: "C1W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w200",
        name: "C2W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w200",
        name: "C3W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w200",
        name: "C4W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w200",
        name: "C5W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w200",
        name: "C6W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w200",
        name: "C7W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w200",
        name: "C8W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w200",
        name: "C9W200",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w300",
        name: "C1W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w300",
        name: "C2W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w300",
        name: "C3W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w300",
        name: "C4W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w300",
        name: "C5W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w300",
        name: "C6W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w300",
        name: "C7W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w300",
        name: "C8W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w300",
        name: "C9W300",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w400",
        name: "C1W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w400",
        name: "C2W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w400",
        name: "C3W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w400",
        name: "C4W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w400",
        name: "C5W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w400",
        name: "C6W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w400",
        name: "C7W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w400",
        name: "C8W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w400",
        name: "C9W400",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w500",
        name: "C1W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w500",
        name: "C2W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w500",
        name: "C3W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w500",
        name: "C4W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w500",
        name: "C5W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w500",
        name: "C6W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w500",
        name: "C7W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w500",
        name: "C8W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w500",
        name: "C9W500",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w600",
        name: "C1W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w600",
        name: "C2W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w600",
        name: "C3W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w600",
        name: "C4W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w600",
        name: "C5W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w600",
        name: "C6W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w600",
        name: "C7W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w600",
        name: "C8W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w600",
        name: "C9W600",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w700",
        name: "C1W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w700",
        name: "C2W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w700",
        name: "C3W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w700",
        name: "C4W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w700",
        name: "C5W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w700",
        name: "C6W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w700",
        name: "C7W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w700",
        name: "C8W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w700",
        name: "C9W700",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w800",
        name: "C1W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w800",
        name: "C2W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w800",
        name: "C3W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w800",
        name: "C4W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w800",
        name: "C5W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w800",
        name: "C6W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w800",
        name: "C7W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w800",
        name: "C8W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w800",
        name: "C9W800",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c1w900",
        name: "C1W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c2w900",
        name: "C2W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c3w900",
        name: "C3W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c4w900",
        name: "C4W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c5w900",
        name: "C5W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c6w900",
        name: "C6W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c7w900",
        name: "C7W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c8w900",
        name: "C8W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: "c9w900",
        name: "C9W900",
        onlyProgrammaticModifying: false,
        hidden: false,
      },
    ],
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);