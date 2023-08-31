import {
  ABS_MENUS_IMAGE,
  ARMS_MENUS_IMAGE,
  BACK_MENUS_IMAGE,
  CHEST_MENUS_IMAGE,
  LEG_MENUS_IMAGE,
  SHOULDERS_MENUS_IMAGE,
} from "./images";

export const LibraryMenu = [
  {
    id: 1,
    title: "Chest",
    image: CHEST_MENUS_IMAGE,
    navigateParmas: "Chest",
  },
  {
    id: 2,
    title: "Back",
    image: BACK_MENUS_IMAGE,
    navigateParmas: "back",
  },
  {
    id: 3,
    title: "Arms",
    image: ARMS_MENUS_IMAGE,
    navigateParmas: "Biceps",
  },
  {
    id: 4,
    title: "Shoulders",
    image: SHOULDERS_MENUS_IMAGE,
    navigateParmas: "shoulders",
  },
  {
    id: 5,
    title: "Legs",
    image: LEG_MENUS_IMAGE,
    navigateParmas: "leg",
  },
  {
    id: 6,
    title: "Abs",
    image: ABS_MENUS_IMAGE,
    navigateParmas: "ABS",
  },
];
