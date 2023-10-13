export const base_house = {
  1: "assets/ar/TreeTop_Base.glb",
  2: "assets/ar/House_Main_Frame.glb",
};

export const thumbnails = {
  door: {
    options: [
      {
        model: "assets/ar/Door_Rectangular.glb",
      },
      {
        model: "assets/ar/Door_Rounded.glb",
      },
    ],
  },
  windows: {
    options: [
      {
        model: "assets/ar/Square_Windows.glb",
      },
      {
        model: "assets/ar/Rounded_Windows.glb",
      },
    ],
  },
  roof: {
    options: [
      {
        model: "assets/ar/Lattice_Roof.glb",
      },
      {
        model: "assets/ar/Solid_Roof.glb",
      },
    ],
  },
  additions: {
    options: [
      {
        model: "assets/ar/Keebler_Sign_Snow.glb",
      },
      {
        model: "assets/ar/Wreath.glb",
      },
      {
        model: "assets/ar/Gumdrops.glb",
      },
      {
        model: "assets/ar/Chimney.glb",
      },
    ],
  },
  lawn: {
    options: [
      {
        model: "assets/ar/Fudge_Cone.glb",
      },
      {
        model: "assets/ar/Fudge_Tree.glb",
        position: {
          1: { x: 0, y: 1.5, z: -0.2 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/MM_Cookie_Regular.glb",
        position: {
          1: { x: 0, y: 1.5, z: -0.2 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/Snowballs.glb",
        position: {
          1: { x: 0, y: 1.5, z: -0.2 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/Candy_Cane.glb",
        position: {
          1: { x: 0, y: 1.5, z: -0.2 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
    ],
  },
  keebler: {
    options: [
      {
        model: "assets/ar/Ernie.glb",
        position: {
          1: { x: 0, y: 1.5, z: -0.2 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/Elf_2.glb",
        position: {
          1: { x: 0, y: 0, z: 0 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/Elf_3.glb",
        position: {
          1: { x: 0, y: 0, z: 0 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
    ],
  },
  elf: {
    options: [
      {
        model: "assets/ar/Buddy.glb",
        position: {
          1: { x: 0, y: 1.5, z: -0.2 },
          2: { x: 0, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/Jovi.glb",
        position: {
          1: { x: 0, y: 0, z: 0 },
          2: { x: -0.07, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/Narwhal.glb",
        position: {
          1: { x: 0, y: 0, z: 0 },
          2: { x: -0.07, y: 1.5, z: -0.2 },
        },
      },
      {
        model: "assets/ar/Puffin.glb",
        position: {
          1: { x: 0, y: 0, z: 0 },
          2: { x: -0.07, y: 1.5, z: -0.2 },
        },
      },
    ],
  },
};

export const DEFAULT_THUMBNAILS = {
  1: {
    title: "Choose your door",
    name: "door",
    assets: [
      {
        image: "/images/house-builder/thumbnails/01_Opt1.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/door1.png",
            position: {
              mobile: {
                left: "left-1/3",
                top: "top-2.5",
              },
              desktop: {
                left: "md:left-[45%]",
                top: "md:top-1",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/door1.png",
            position: {
              mobile: {
                left: "left-[35%]",
                top: "top-[30%]",
              },
              desktop: {
                left: "md:left-[50%]",
                top: "md:top-[40%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/01_Opt2.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/door2.png",
            position: {
              mobile: {
                left: "left-1/3",
                top: "top-2.5",
              },
              desktop: {
                left: "md:left-[45%]",
                top: "md:top-1",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/door2.png",
            position: {
              mobile: {
                left: "left-[35%]",
                top: "top-[30%]",
              },
              desktop: {
                left: "md:left-[50%]",
                top: "md:top-[40%]",
              },
            },
          },
        },
        isSelected: false,
      },
    ],
  },
  2: {
    title: "Choose your windows",
    name: "windows",
    assets: [
      {
        image: "/images/house-builder/thumbnails/02_Opt1.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/windows1.png",
            position: {
              mobile: {
                left: "left-1/4",
                top: "top-2.5",
              },
              desktop: {
                left: "md:left-[40%]",
                top: "md:top-1",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/windows1.png",
            position: {
              mobile: {
                left: "left-[20%]",
                top: "top-[25%]",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-[20%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/02_Opt2.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/windows2.png",
            position: {
              mobile: {
                left: "left-1/4",
                top: "top-2.5",
              },
              desktop: {
                left: "md:left-[40%]",
                top: "md:top-1",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/windows2.png",
            position: {
              mobile: {
                left: "left-[20%]",
                top: "top-[25%]",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-[20%]",
              },
            },
          },
        },
        isSelected: false,
      },
    ],
  },
  3: {
    title: "Choose your roof",
    name: "roof",
    assets: [
      {
        image: "/images/house-builder/thumbnails/03_Opt1.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/roof1.png",
            position: {
              mobile: {
                left: "left-1/4",
                top: "-top-8",
              },
              desktop: {
                left: "md:left-[40%]",
                top: "md:-top-6",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/roof1.png",
            position: {
              mobile: {
                left: "left-[20%]",
                top: "top-[15%]",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-0",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/03_Opt2.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/roof2.png",
            position: {
              mobile: {
                left: "left-1/4",
                top: "-top-8",
              },
              desktop: {
                left: "md:left-[40%]",
                top: "md:-top-6",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/roof2.png",
            position: {
              mobile: {
                left: "left-[20%]",
                top: "top-[15%]",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-0",
              },
            },
          },
        },
        isSelected: false,
      },
    ],
  },
  4: {
    title: "Choose house additions",
    subtitle: "(select multiple)",
    name: "additions",
    multipleSelection: true,
    assets: [
      {
        image: "/images/house-builder/thumbnails/04_Opt1.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/keebler.png",
            position: {
              mobile: {
                left: "left-[35%]",
                top: "top-[30%]",
              },
              desktop: {
                left: "md:left-[43%]",
                top: "md:top-[30%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/keebler.png",
            position: {
              mobile: {
                left: "left-[40%]",
                top: "top-[20%]",
              },
              desktop: {
                left: "md:left-[53%]",
                top: "md:top-[15%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/04_Opt2.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/wreath.png",
            position: {
              mobile: {
                left: "left-[35%]",
                top: "top-[5%]",
              },
              desktop: {
                left: "md:left-[45%]",
                top: "md:top-[5%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/wreath.png",
            position: {
              mobile: {
                left: "left-[35%]",
                top: "top-[28%]",
              },
              desktop: {
                left: "md:left-[50%]",
                top: "md:top-[30%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/04_Opt3.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/gumdrops.png",
            position: {
              mobile: {
                left: "left-[20%]",
                top: "-top-12",
              },
              desktop: {
                left: "md:left-[40%]",
                top: "md:-top-12",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/gumdrops.png",
            position: {
              mobile: {
                left: "left-[20%]",
                top: "top-[5%]",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-[-20%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/04_Opt4.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/chimney.png",
            position: {
              mobile: {
                left: "left-[12%]",
                top: "-top-16",
              },
              desktop: {
                left: "md:left-[36%]",
                top: "md:-top-12",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/chimney.png",
            position: {
              mobile: {
                left: "left-[13%]",
                top: "top-[5%]",
              },
              desktop: {
                left: "md:left-[30%]",
                top: "md:top-[-20%]",
              },
            },
          },
        },
        isSelected: false,
      },
    ],
  },
  5: {
    title: "Choose lawn décor",
    subtitle: "(select multiple)",
    name: "lawn",
    multipleSelection: true,
    assets: [
      {
        image: "/images/house-builder/thumbnails/05_Opt1.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/icecream.png",
            position: {
              mobile: {
                left: "left-[10%]",
                top: "top-[50%]",
              },
              desktop: {
                left: "md:left-[30%]",
                top: "md:top-[40%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/icon-cone-tree.png",
            position: {
              mobile: {
                left: "left-[-10%]",
                top: "top-[30%]",
              },
              desktop: {
                left: "md:left-[10%]",
                top: "md:top-[30%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/05_Opt2.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/fudge.png",
            position: {
              mobile: {
                left: "left-[-5%]",
                top: "top-[50%]",
              },
              desktop: {
                left: "md:left-[25%]",
                top: "md:top-[40%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/fudge-tree.png",
            position: {
              mobile: {
                left: "left-[10%]",
                top: "top-[33%]",
              },
              desktop: {
                left: "md:left-[26%]",
                top: "md:top-[30%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/05_Opt3.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/cookie-candy.png",
            position: {
              mobile: {
                left: "left-[15%]",
                top: "top-[5%]",
              },
              desktop: {
                left: "md:left-[34%]",
                top: "md:top-0",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/cookie-candy.png",
            position: {
              mobile: {
                left: "left-[5%]",
                top: "top-[30%]",
              },
              desktop: {
                left: "md:left-[22%]",
                top: "md:top-[30%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/05_Opt4.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/snowballs.png",
            position: {
              mobile: {
                left: "left-[25%]",
                top: "top-[60%]",
              },
              desktop: {
                left: "md:left-[37%]",
                top: "md:top-[50%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/snowballs.png",
            position: {
              mobile: {
                left: "left-[30%]",
                top: "top-[35%]",
              },
              desktop: {
                left: "md:left-[43%]",
                top: "md:top-[35%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/05_Opt5.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/candy-cane.png",
            position: {
              mobile: {
                left: "left-[5%]",
                top: "top-[5%]",
              },
              desktop: {
                left: "md:left-[30%]",
                top: "md:top-0",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/candy-cane.png",
            position: {
              mobile: {
                left: "left-[22%]",
                top: "top-[26%]",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-[25%]",
              },
            },
          },
        },
        isSelected: false,
      },
    ],
  },
  6: {
    title: "Choose a Keebler character",
    name: "keebler",
    assets: [
      {
        image: "/images/house-builder/thumbnails/06_Opt1.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/characters/keebler1.png",
            position: {
              mobile: {
                left: "left-11",
                top: "top-2/4",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-[50%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/characters/keebler1.png",
            position: {
              mobile: {
                left: "left-[53%]",
                top: "top-[25%]",
              },
              desktop: {
                left: "md:left-[63%]",
                top: "md:top-[25%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/06_Opt2.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/characters/keebler2.png",
            position: {
              mobile: {
                left: "left-11",
                top: "top-2/4",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-[50%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/characters/keebler2.png",
            position: {
              mobile: {
                left: "left-[53%]",
                top: "top-[25%]",
              },
              desktop: {
                left: "md:left-[63%]",
                top: "md:top-[25%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/06_Opt3.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/characters/keebler3.png",
            position: {
              mobile: {
                left: "left-11",
                top: "top-2/4",
              },
              desktop: {
                left: "md:left-[35%]",
                top: "md:top-[50%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/characters/keebler3.png",
            position: {
              mobile: {
                left: "left-[53%]",
                top: "top-[25%]",
              },
              desktop: {
                left: "md:left-[63%]",
                top: "md:top-[25%]",
              },
            },
          },
        },
        isSelected: false,
      },
    ],
  },
  7: {
    title: "Choose an Elf character",
    name: "elf",
    assets: [
      {
        image: "/images/house-builder/thumbnails/07_Opt1.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/characters/buddy.png",
            position: {
              mobile: {
                left: "left-40",
                top: "top-2/4",
              },
              desktop: {
                left: "md:left-[50%]",
                top: "md:top-[45%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/characters/buddy.png",
            position: {
              mobile: {
                left: "left-[19%]",
                top: "top-[35%]",
              },
              desktop: {
                left: "md:left-[34%]",
                top: "md:top-[34%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/07_Opt2.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/characters/jovie.png",
            position: {
              mobile: {
                left: "left-40",
                top: "top-2/4",
              },
              desktop: {
                left: "md:left-[50%]",
                top: "md:top-[45%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/characters/jovie.png",
            position: {
              mobile: {
                left: "left-[19%]",
                top: "top-[35%]",
              },
              desktop: {
                left: "md:left-[34%]",
                top: "md:top-[34%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/07_Opt3.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/characters/narwhal.png",
            position: {
              mobile: {
                left: "left-40",
                top: "top-2/4",
              },
              desktop: {
                left: "md:left-[50%]",
                top: "md:top-[45%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/characters/narwhal.png",
            position: {
              mobile: {
                left: "left-[19%]",
                top: "top-[35%]",
              },
              desktop: {
                left: "md:left-[34%]",
                top: "md:top-[34%]",
              },
            },
          },
        },
        isSelected: false,
      },
      {
        image: "/images/house-builder/thumbnails/07_Opt4.png",
        imageToPlace: {
          1: {
            path: "/images/house-builder/treehouse-pieces/characters/puffin.png",
            position: {
              mobile: {
                left: "left-40",
                top: "top-2/4",
              },
              desktop: {
                left: "md:left-[50%]",
                top: "md:top-[45%]",
              },
            },
          },
          2: {
            path: "/images/house-builder/snowhouse-pieces/characters/puffin.png",
            position: {
              mobile: {
                left: "left-[19%]",
                top: "top-[35%]",
              },
              desktop: {
                left: "md:left-[34%]",
                top: "md:top-[34%]",
              },
            },
          },
        },
        isSelected: false,
      },
    ],
  },
};
