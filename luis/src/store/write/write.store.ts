import { atom } from "recoil";
import { WriteType } from "../../types/write/wrtie.type";

export const WriteDataAtom = atom<WriteType>({
  key: "WriteDataAtom",
  default: { title: "", content: "" },
});

export const CategoryData = atom<string>({
    key: "CategoryData",
    default: "ALL",
})
