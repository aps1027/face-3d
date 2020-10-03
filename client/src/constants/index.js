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
              meshNameList: ["alivar_arca_standard_mat_2_1", "alivar_arca_standard_mat_2_5"],
              colorList: [
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_13.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_14.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "foot",
              meshNameList: [
                "alivar_arca_standard_mat_2_4"
              ],
              colorList: [
                {
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
              ],
            },
          ]
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
              meshNameList: ["poltronafrau_flair_208x229", "poltronafrau_flair_208x236"],
              colorList: [
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_13.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_14.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "Futon",
              meshNameList: ["poltronafrau_flair_208x231", "poltronafrau_flair_208x230"],
              colorList: [
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
            {
              name: "Pillow",
              meshNameList: ["poltronafrau_flair_208x232", "poltronafrau_flair_208x233", "poltronafrau_flair_208x234"],
              colorList: [
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_6.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_7.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_9.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
              ],
            },
          ]
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
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
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
                  texture: "images/model_colors/color_5.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_8.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_10.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_11.jpeg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_12.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
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
                  texture: "images/model_colors/color_1.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
                {
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
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_1.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
                {
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
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_15.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_1.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [2, 2],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [2, 2],
                },
                {
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
                  texture: "images/model_colors/color_1.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [10, 10],
                },
                {
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
                  texture: "images/model_colors/color_1.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_2.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_3.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_4.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_16.jpg",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [10, 10],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [10, 10],
                },
                {
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
                  texture: "images/model_colors/color_1.jpg",
                  size: [1, 1],
                },
                {
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
              meshNameList: ["Mechanisms", "Wheels_0", "Wheels_1", "SeatBack_notUVed_0", "Legs_1"],
              colorList: [
                {
                  texture: "images/model_colors/color_22.jpeg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_23.png",
                  size: [1, 1],
                },
                {
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
                  texture: "images/model_colors/color_10.jpeg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_11.jpeg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_12.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_13.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_14.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_15.jpg",
                  size: [1, 1],
                },
                {
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
                  texture: "images/model_colors/color_10.jpeg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_11.jpeg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_12.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_13.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_14.jpg",
                  size: [1, 1],
                },
                {
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
                  texture: "images/model_colors/color_22.jpeg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_23.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_16.jpg",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_17.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_18.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_19.png",
                  size: [1, 1],
                },
                {
                  texture: "images/model_colors/color_20.jpg",
                  size: [1, 1],
                },
              ],
            },
          ],
        },
      ]
    }
  ],
};

export default constants;
