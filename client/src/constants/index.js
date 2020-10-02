const constants = {
  MATERIAL_ITEM_LIST: [
    {
      id: 1,
      name: "wall",
      icon: "images/icons/wall_icon.png",
      colorList: [
        {
          texture: "images/wallpapers/wallpaper.jpeg",
        },
        {
          texture: "images/wallpapers/wallpaper_2.jpeg",
        },
        {
          texture: "images/wallpapers/color_5F9EA0.png",
        },
        {
          texture: "images/wallpapers/color_98FB98.jpeg",
        },
        {
          texture: "images/wallpapers/color_e587a0.png",
        },
        {
          texture: "images/wallpapers/color_E6F7FF.jpeg",
        },
        {
          texture: "images/wallpapers/color_FAEBD7.jpeg",
        },
        {
          texture: "images/wallpapers/color_FAFAD2.jpeg",
        },
      ],
    },
    {
      id: 2,
      name: "floor",
      icon: "images/icons/floor_icon.png",
      colorList: [
        {
          texture: "images/floors/cream_floor.jpeg",
          size: [10, 10],
        },
        {
          texture: "images/floors/whitewood_floor.jpg",
          size: [10, 10],
        },
        {
          texture: "images/floors/redwood_floor.jpeg",
          size: [10, 10],
        },
        {
          texture: "images/floors/cotto_floor_1.jpg",
          size: [10, 10],
        },
        {
          texture: "images/floors/cotto_floor.jpg",
          size: [10, 10],
        },
        {
          texture: "images/floors/black_white_floor_2.jpeg",
          size: [10, 10],
        },
        {
          texture: "images/floors/black_white_floor_1.png",
          size: [10, 10],
        },
        {
          texture: "images/floors/black_white_floor_3.jpg",
          size: [10, 10],
        },
      ],
    },
    {
      id: 3,
      name: "door",
      icon: "images/icons/door_icon.png",
      colorList: [
        {
          texture: "images/doors/single_1.png",
        },
        {
          texture: "images/doors/single_2.png",
        },
        {
          texture: "images/doors/single_3.png",
        },
        {
          texture: "images/doors/single_4.png",
        },
        {
          texture: "images/doors/single_5.png",
        },
        {
          texture: "images/doors/single_6.png",
        },
        {
          texture: "images/doors/single_7.png",
        },
        {
          texture: "images/doors/double_1.png",
        },
      ],
    },
    {
      id: 4,
      name: "window",
      icon: "images/icons/window_icon.png",
      colorList: [
        {
          texture: "images/windows/single_1.png",
          size: [2, 1.5],
        },
        {
          texture: "images/windows/single_2.png",
          size: [2, 2],
        },
        {
          texture: "images/windows/single_3.png",
          size: [2, 1.5],
        },
        {
          texture: "images/windows/single_4.png",
          size: [3, 1.5],
        },
        {
          texture: "images/windows/single_5.png",
          size: [2, 2],
        },
        {
          texture: "images/windows/single_6.png",
          size: [3, 2],
        },
        {
          texture: "images/windows/single_7.png",
          size: [1, 2],
        },
        {
          texture: "images/windows/single_8.png",
          size: [2, 2],
        },
      ],
    },
  ],
  MODEL_LIST: [
    {
      id: 1,
      name: "bed",
      icon: "images/icons/bed_icon.png",
      list: [
        {
          id: 1,
          image: "images/beds/bed_1.png",
          name: "bed 1",
          model: "models/beds/bed_1.glb",
          size: [1.5, 1.5, 1.5],
          position: [0, 0.009, 0],
        },
        {
          id: 2,
          image: "images/beds/bed_2.png",
          name: "bed 2",
          model: "models/beds/bed_2.glb",
          size: [1.5, 1.5, 1.5],
          position: [0, 0.009, 0],
        },
      ],
    },
    {
      id: 2,
      name: "sofa",
      icon: "images/icons/sofa_icon.png",
      list: [
        {
          id: 1,
          image: "images/sofas/sofa_1.png",
          name: "sofa 1",
          model: "models/sofas/sofa_1.glb",
          size: [0.15, 0.15, 0.15],
          position: [0, 0.3, 3.7],
        },
        {
          id: 2,
          image: "images/sofas/sofa_2.png",
          name: "sofa 2",
          model: "models/sofas/sofa_2.glb",
          size: [1, 1, 1],
          position: [0, 0.09, 3],
        },
      ],
    },
    {
      id: 3,
      name: "table",
      icon: "images/icons/table_icon.png",
      list: [
        {
          id: 1,
          image: "images/tables/table_1.png",
          name: "table 1",
          model: "models/tables/table_1.glb",
          size: [0.25, 0.25, 0.25],
          position: [1, -0.01, 3],
        },
        {
          id: 1,
          image: "images/tables/table_2.png",
          name: "table 2",
          model: "models/tables/table_2.glb",
          size: [1.25, 1.25, 1.25],
          position: [1, 0.5, 3],
        },
      ],
    },
    {
      id: 4,
      name: "cabinet",
      icon: "images/icons/cabinet_icon.png",
      list: [
        {
          id: 1,
          image: "images/cabinets/cabinet_1.png",
          name: "cabinet 1",
          model: "models/cabinets/cabinet_1.glb",
          size: [1.2, 1.2, 1.2],
          position: [1, 0, 3],
        },
      ],
    },
  ],
};

export default constants;
