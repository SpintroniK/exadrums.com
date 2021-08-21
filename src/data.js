export const modals = 
{
    perf: 
    { 
        title: "About eXaDrums performance", 
        image_path: "./assets/perf.png", 
        paragraphs: [`From the beginning, eXaDrums has been designed to have the lowest latency possible.`, 
                    `The latency is the time it takes to output a sound after the drum head has been hit.
                    It depends on several factors, including the soundcard.`,
                    `With a good USB soundcard, eXaDrums averages 8 ms of latency.
                    And with an audio DAC, you can get this down to 5 or 6 ms, which is on par with professional drum modules.`] 
    },
    soft: 
    { 
        title: "How the software works", 
        image_path: "./assets/software.gif", 
        paragraphs: [`The eXaDrums software is made of several different parts. 
                    At its core, there's the libexadrums library, which controls everything.`,
                    `It is written in C++ for maximum performance, which makes it very flexible and usable in other programming languages.`,
                    `There's an electron GUI under development.
                    That will give eXaDrums a nice and modern interface.`] 
    },
    hard: 
    { 
        title: "What hardware do I need to make the module?", 
        image_path: "./assets/hw.png", 
        paragraphs: [`eXaDrums comes with a DIY sensor board.
                    It has 8 trigger inputs, and is compatible with Raspberry Pi 2 and newer versions.`,
                    `To make the board compatible with as many triggers as possible, each input is software and hardware configurable.`,
                    `When choosing a soundcard, pay attention to its buffer size, as it will have an impact on latency.`] 
    },
    case: 
    { 
        title: "3D-printable enclosure.", 
        image_path: "./assets/casing.png", 
        paragraphs: [`The enclosure is made of 4 different parts, and has been designed to be printed on small printers (15x15x15cm).`,
                    `Eight 3D-printed screws hold the enclosure together.`,
                    `It takes about 10 hours to print, but it's well worth the wait, as you can mount it on a Roland TD4-KP portable drum kit.`,
                    `Future enclosures will be mountable on higher end drum kit.`] 
    }
}

export const getMenus = app => { return [
  {
    // ********** SOFTWARE **********
    id: "software",
    title: "Software",
    icon: "",
    alignment: "right",
    icons: 
    [
      {
        name: "Linux",
        path: "./assets/tux_logo.svg",
        position: "right",
        description: "eXaDrums runs on Linux",
      },
      {
        name: "Debian",
        path: "./assets/debian_logo.svg",
        position: "center",
        description: "eXaDrums is available in Debian (bullseye)",
      },
      {
        name: "C++",
        path: "./assets/cpp_logo.svg",
        position: "left",
        description: "The core of eXaDrums is written in C++",
      },
    ],
    descriptions: 
    [
      {
        id: 1,
        text: "eXaDrums software is fully open source and runs on PC as well as Raspberry Pi.",
      },
      {
        id: 2,
        text: "It also brings high sound quality and very low latency, that are comparable to those of professional drum modules.",
      },
    ],
    image_path: "./assets/software.gif",
    buttons: 
    [
      {
        name: "More About the Software",
        icon: "",
        class: "btn-dark",
        link: null,
        click: _ => { app.modals.soft.isOpen = true }
      },
      {
        name: "More About Performance",
        icon: "",
        class: "btn-light",
        link: null,
        click: _ => { app.modals.perf.isOpen = true }
      },
    ],
  },
  {
    // ********** HARDWARE **********
    id: "hardware",
    title: "Hardware",
    icon: "",
    alignment: "left",
    icons: 
    [
      {
        name: "Raspberry pi",
        path: "./assets/raspberry_pi_logo.svg",
        position: "right",
        description: "eXaDrums is available in Raspberry Pi OS",
      },
      {
        name: "Osh Park",
        path: "./assets/oshpark_logo.svg",
        position: "left",
        description: "eXaDrums sensor board is shared on OSHPark",
      },
    ],
    descriptions: 
    [
      {
        id: 1,
        text: "eXaDrums runs on multiple platforms, including Raspberry Pi.",
      },
      {
        id: 2,
        text: "The DIY sensor board allows up to 8 triggers, and a 16-trigger version is on its way.",
      },
      {
        id: 3,
        text: "You can use any Raspberry Pi-compatible soundcard or DAC to achieve the best sound quality you can get.",
      },
    ],
    image_path: "./assets/hw.gif",
    buttons: 
    [
      {
        name: "More About the Hardware",
        icon: "",
        class: "btn-dark",
        link: null,
        click: _ => { app.modals.hard.isOpen = true }
      },
    ],
  },
  {
    // ********** ENCLOSURE **********
    id: "enclosure",
    title: "Enclosure",
    icon: "",
    alignment: "right",
    icons: 
    [
      {
        name: "3d-printed",
        path: "./assets/3d_printed_logo.svg",
        description: "The enclosure is fully 3D-printed!",
        position: "right",
      },
      {
        name: "thingiverse",
        path: "./assets/thingiverse_logo.svg",
        description: "Enclosure stl files are available at Thingiverse.",
        position: "left",
      },
    ],
    descriptions: 
    [
      {
        id: 1,
        text: "If you own a 3D printer, you can also 3D-print an enclosure for your module.",
      },
      {
        id: 2,
        text: "The enclosure has been designed for Raspberry Pi 3B+ and its official 7\" touchscreen.",
      },
      {
        id: 3,
        text: "Every piece of the enclosure is 3D printed, even the screws.",
      },
    ],
    /* image_path: "./assets/casing.png", */
    model_path: "./assets/enclosure_model.glb",
    buttons: 
    [
      {
        name: "More About the Enclosure",
        icon: "",
        class: "btn-dark",
        link: null,
        click: _ => { app.modals.case.isOpen = true }
      },
    ],
  },
]}