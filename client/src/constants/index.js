const constants = {
  /**
   * This is material item list (e.g. wall, floor, door, window).
   * Include color or design for default materials
   */
  MATERIAL_ITEM_LIST: [
    {
      id: 1,
      name: "wall",
      icon: "images/icons/wall_icon.png",
      colorList: [
        {
          name: "3D Room Rock Wallpaper",
          texture: "images/wallpapers/wallpaper.jpeg",
        },
        {
          name: "3D Room Normal Wallpaper",
          texture: "images/wallpapers/wallpaper_2.jpeg",
        },
        {
          name: "3D Room Wallpaper Color 1",
          texture: "images/wallpapers/color_5F9EA0.png",
        },
        {
          texture: "images/wallpapers/color_98FB98.jpeg",
        },
        {
          name: "3D Room Wallpaper Color 2",
          texture: "images/wallpapers/color_e587a0.png",
        },
        {
          name: "3D Room Wallpaper Color 3",
          texture: "images/wallpapers/color_E6F7FF.jpeg",
        },
        {
          name: "3D Room Wallpaper Color 4",
          texture: "images/wallpapers/color_FAEBD7.jpeg",
        },
        {
          name: "3D Room Wallpaper Color 5",
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
          name: "3D Room Cream Floor",
          texture: "images/floors/cream_floor.jpeg",
          size: [10, 10],
        },
        {
          name: "3D Room Whitewood Floor",
          texture: "images/floors/whitewood_floor.jpg",
          size: [10, 10],
        },
        {
          name: "3D Room Redwood Floor",
          texture: "images/floors/redwood_floor.jpeg",
          size: [10, 10],
        },
        {
          name: "3D Room Cotto Floor 1",
          texture: "images/floors/cotto_floor_1.jpg",
          size: [10, 10],
        },
        {
          name: "3D Room Cotto Floor 2",
          texture: "images/floors/cotto_floor.jpg",
          size: [10, 10],
        },
        {
          name: "3D Room Black And White Floor 1",
          texture: "images/floors/black_white_floor_2.jpeg",
          size: [10, 10],
        },
        {
          name: "3D Room Black And White Floor 2",
          texture: "images/floors/black_white_floor_1.png",
          size: [10, 10],
        },
        {
          name: "3D Room Black And White Floor 3",
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
          name: "3D Room Single Door 1",
          texture: "images/doors/single_1.png",
        },
        {
          name: "3D Room Single Door 2",
          texture: "images/doors/single_2.png",
        },
        {
          name: "3D Room Single Door 3",
          texture: "images/doors/single_3.png",
        },
        {
          name: "3D Room Single Door 4",
          texture: "images/doors/single_4.png",
        },
        {
          name: "3D Room Single Door 5",
          texture: "images/doors/single_5.png",
        },
        {
          name: "3D Room Single Door 6",
          texture: "images/doors/single_6.png",
        },
        {
          name: "3D Room Single Door 7",
          texture: "images/doors/single_7.png",
        },
        {
          name: "3D Room Double Door 1",
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
          name: "3D Room Single Window 1",
          texture: "images/windows/single_1.png",
          size: [2, 1.5],
        },
        {
          name: "3D Room Single Window 2",
          texture: "images/windows/single_2.png",
          size: [2, 2],
        },
        {
          name: "3D Room Single Window 3",
          texture: "images/windows/single_3.png",
          size: [2, 1.5],
        },
        {
          name: "3D Room Single Window 4",
          texture: "images/windows/single_4.png",
          size: [3, 1.5],
        },
        {
          name: "3D Room Single Window 5",
          texture: "images/windows/single_5.png",
          size: [2, 2],
        },
        {
          name: "3D Room Single Window 6",
          texture: "images/windows/single_6.png",
          size: [3, 2],
        },
        {
          name: "3D Room Single Window 7",
          texture: "images/windows/single_7.png",
          size: [1, 2],
        },
        {
          name: "3D Room Single Window 8",
          texture: "images/windows/single_8.png",
          size: [2, 2],
        },
      ],
    },
  ],

  /**
   * This is model list (e.g. bed, table, chair, sofa, cabinet).
   * Include color or design for materials
   */
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
          position: [0, 0.009, -1.5],
          color: [
            {
              name: "frame",
              meshNameList: [
                "alivar_arca_standard_mat_2_1",
                "alivar_arca_standard_mat_2_5",
              ],
              colorList: [
                {
                  name: "3D Room Bed Frame Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 10",
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 11",
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 12",
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 13",
                  texture: "images/model_colors/color_13.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 14",
                  texture: "images/model_colors/color_14.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "Futon, Pillow",
              meshNameList: ["alivar_arca_standard_mat_2_2"],
              colorList: [
                {
                  name: "3D Room Bed Futon And Pillow Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon And Pillow Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon And Pillow Color 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon And Pillow Color 6",
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon And Pillow Color 7",
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon And Pillow Color 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon And Pillow Color 9",
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon And Pillow Color 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "Sheet",
              meshNameList: ["alivar_arca_standard_mat_2_3"],
              colorList: [
                {
                  name: "3D Room Bed Sheet Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 6",
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 7",
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 9",
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "foot",
              meshNameList: ["alivar_arca_standard_mat_2_4"],
              colorList: [
                {
                  name: "3D Room Bed Foot Color 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Bed Foot Color 17",
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Bed Foot Color 18",
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Bed Foot Color 19",
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Bed Foot Color 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          image: "images/beds/bed_2.png",
          name: "bed 2",
          model: "models/beds/bed_2.glb",
          size: [1.5, 1.5, 1.5],
          position: [0, 0.009, -1.5],
          color: [
            {
              name: "frame",
              meshNameList: [
                "poltronafrau_flair_208x229",
                "poltronafrau_flair_208x236",
              ],
              colorList: [
                {
                  name: "3D Room Bed Frame Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 10",
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 11",
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 12",
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 13",
                  texture: "images/model_colors/color_13.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 14",
                  texture: "images/model_colors/color_14.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Frame Color 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "Futon",
              meshNameList: [
                "poltronafrau_flair_208x231",
                "poltronafrau_flair_208x230",
              ],
              colorList: [
                {
                  name: "3D Room Bed Futon Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon Color 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon Color 6",
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon Color 7",
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon Color 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon Color 9",
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Futon Color 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "Pillow",
              meshNameList: [
                "poltronafrau_flair_208x232",
                "poltronafrau_flair_208x233",
                "poltronafrau_flair_208x234",
              ],
              colorList: [
                {
                  name: "3D Room Bed Pillow Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Pillow Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Pillow Color 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Pillow Color 6",
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Pillow Color 7",
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Pillow Color 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Pillow Color 9",
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Pillow Color 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "sheet",
              meshNameList: ["poltronafrau_flair_208x235"],
              colorList: [
                {
                  name: "3D Room Bed Sheet Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 6",
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 7",
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 9",
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Bed Sheet Color 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
          ],
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
          position: [0.7, 0.3, 3.7],
          color: [
            {
              name: "cushion",
              meshNameList: ["Box", "Box2", "Box4"],
              colorList: [
                {
                  name: "3D Room Cushion Color 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Color 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Color 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Color 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Color 10",
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Color 11",
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Color 12",
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Color 13",
                  texture: "images/model_colors/color_13.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "back",
              meshNameList: ["Box1", "Box3", "Box5", "Box6", "Box7"],
              colorList: [
                {
                  name: "3D Room Cushion Back 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Back 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Back 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Back 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Back 10",
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Back 11",
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Back 12",
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion Back 13",
                  texture: "images/model_colors/color_13.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "foot",
              meshNameList: [
                "Cylinder",
                "Cylinder1",
                "Cylinder2",
                "Cylinder3",
                "Cylinder4",
                "Cylinder5",
                "Cylinder6",
                "Cylinder7",
                "Cylinder8",
                "Cylinder9",
                "Cylinder10",
                "Cylinder11",
                "Cylinder12",
                "Cylinder13",
                "Cylinder14",
                "Cylinder15",
                "Cylinder16",
                "Cylinder17",
              ],
              colorList: [
                {
                  name: "3D Room Cushion Foot Color 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot Color 17",
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot Color 18",
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot Color 19",
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot Color 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          image: "images/sofas/sofa_2.png",
          name: "sofa 2",
          model: "models/sofas/sofa_2.glb",
          size: [1, 1, 1],
          position: [0.5, 0.09, 3.5],
          color: [
            {
              name: "cushion",
              meshNameList: ["not_clear_obj_0_v1"],
              colorList: [
                {
                  name: "3D Room Cushion 5",
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion 8",
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion 10",
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion 11",
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion 12",
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Cushion 13",
                  texture: "images/model_colors/color_13.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "foot",
              meshNameList: ["not_clear_obj_1_v1"],
              colorList: [
                {
                  name: "3D Room Cushion Foot 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot 17",
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot 18",
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot 19",
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cushion Foot 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
              ],
            },
          ],
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
          position: [-3.2, -0.01, 4.7],
          color: [
            {
              name: "frame",
              meshNameList: [
                "LeftLegFront1",
                "Box10",
                "RightlegFrong1",
                "RightLegBack1",
                "Box8",
                "LeftLegBack1",
                "LeftLegBack",
                "Box4",
                "RightlegFrong",
                "LeftLegFront",
                "Box2",
                "RightLegBack",
                "Box",
                "Box6",
              ],
              colorList: [
                {
                  name: "3D Room Table Frame 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 17",
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 18",
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 19",
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
              ],
            },
            {
              name: "surface",
              meshNameList: ["Box1", "Box7"],
              colorList: [
                {
                  name: "3D Room Table Surface 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 18",
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 19",
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "storage",
              meshNameList: [
                "Box3",
                "Box5",
                "Box9",
                "Box11",
                "Cylinder",
                "Cylinder1",
                "Cylinder2",
                "Cylinder3",
              ],
              colorList: [
                {
                  name: "3D Room Table Storage 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 18",
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 19",
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [2, 2],
                },
              ],
            },
          ],
        },
        {
          id: 1,
          image: "images/tables/table_2.png",
          name: "table 2",
          model: "models/tables/table_2.glb",
          size: [1.25, 1.25, 1.25],
          position: [-2.5, 0.51, 4],
          color: [
            {
              name: "frame",
              meshNameList: [
                "Box",
                "Box1",
                "Box2",
                "Box3",
                "Box4",
                "Box5",
                "Box6",
                "Box7",
                "Box15",
                "Box15001",
                "Box16",
                "Box17",
                "Box18",
                "Box19",
                "Box20",
                "Box21",
                "Box22",
                "Box23",
                "Box24",
                "Box25",
                "Box26",
                "Box27",
                "Box28",
                "Box29",
                "Box30",
                "Box31",
                "Box32",
                "Box33",
                "Box34",
              ],
              colorList: [
                {
                  name: "3D Room Table Frame 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 17",
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 18",
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 19",
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Table Frame 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
              ],
            },
            {
              name: "surface",
              meshNameList: [
                "Box13",
                "Box8",
                "Box9",
                "Box10",
                "Box11",
                "Box12",
              ],
              colorList: [
                {
                  name: "3D Room Table Surface 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 18",
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 19",
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Surface 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "storage",
              meshNameList: ["Box14"],
              colorList: [
                {
                  name: "3D Room Table Storage 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 17",
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 18",
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 19",
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
                  name: "3D Room Table Storage 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [2, 2],
                },
              ],
            },
          ],
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
          position: [-3, 0, -3.5],
          color: [
            {
              name: "frame",
              meshNameList: ["04_LP"],
              colorList: [
                {
                  name: "3D Room Cabinet Frame 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Frame 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Frame 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Frame 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Frame 17",
                  texture: "images/model_colors/color_17.png",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Frame 18",
                  texture: "images/model_colors/color_18.png",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Frame 19",
                  texture: "images/model_colors/color_19.png",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Frame 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [10, 10],
                },
              ],
            },
            {
              name: "door",
              meshNameList: ["Object002"],
              colorList: [
                {
                  name: "3D Room Cabinet Door 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Door 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Door 3",
                  texture: "images/model_colors/color_3.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Door 4",
                  texture: "images/model_colors/color_4.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Door 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Door 19",
                  texture: "images/model_colors/color_19.png",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Door 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [10, 10],
                },
                {
                  name: "3D Room Cabinet Door 17",
                  texture: "images/model_colors/color_17.png",
                  size: [10, 10],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "chair",
      icon: "images/icons/chair_icon.png",
      list: [
        {
          id: 1,
          image: "images/chairs/chair_1.png",
          name: "chair 1",
          model: "models/chairs/chair_1.glb",
          size: [1.2, 1.2, 1.2],
          position: [-2.0, 0.55, 3.5],
          color: [
            {
              name: "frame",
              meshNameList: ["study_chair"],
              colorList: [
                {
                  name: "3D Room Cabinet Frame 1",
                  texture: "images/model_colors/color_1.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Cabinet Frame 2",
                  texture: "images/model_colors/color_2.jpg",
                  size: [1, 1],
                },
              ],
            },
          ],
        },
        {
          id: 1,
          image: "images/chairs/chair_2.png",
          name: "chair 2",
          model: "models/chairs/chair_2.glb",
          size: [0.3, 0.3, 0.3],
          position: [-2.0, 0.53, 3.5],
          color: [
            {
              name: "frame",
              meshNameList: [
                "Mechanisms",
                "Wheels_0",
                "Wheels_1",
                "SeatBack_notUVed_0",
                "Legs_1",
              ],
              colorList: [
                {
                  name: "3D Room Chair Frame 22",
                  texture: "images/model_colors/color_22.jpeg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Frame 23",
                  texture: "images/model_colors/color_23.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Frame 17",
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
              ],
            },
            {
              name: "SeatBack",
              meshNameList: ["SeatBack_notUVed_1"],
              colorList: [
                {
                  name: "3D Room Chair Seat Back 10",
                  texture: "images/model_colors/color_10.jpeg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat Back 11",
                  texture: "images/model_colors/color_11.jpeg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat Back 12",
                  texture: "images/model_colors/color_12.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat Back 13",
                  texture: "images/model_colors/color_13.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat Back 14",
                  texture: "images/model_colors/color_14.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat Back 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat Back 21",
                  texture: "images/model_colors/color_21.png",
                  size: [1, 1],
                },
              ],
            },
            {
              name: "Seat",
              meshNameList: ["Seat_notUVed"],
              colorList: [
                {
                  name: "3D Room Chair Seat 10",
                  texture: "images/model_colors/color_10.jpeg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat 11",
                  texture: "images/model_colors/color_11.jpeg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat 12",
                  texture: "images/model_colors/color_12.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat 13",
                  texture: "images/model_colors/color_13.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat 14",
                  texture: "images/model_colors/color_14.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Seat 15",
                  texture: "images/model_colors/color_15.jpg",
                  size: [1, 1],
                },
              ],
            },
            {
              name: "Legs",
              meshNameList: ["Legs_0"],
              colorList: [
                {
                  name: "3D Room Chair Legs 22",
                  texture: "images/model_colors/color_22.jpeg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Legs 23",
                  texture: "images/model_colors/color_23.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Legs 16",
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Legs 17",
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Legs 18",
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Legs 19",
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  name: "3D Room Chair Legs 20",
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default constants;
