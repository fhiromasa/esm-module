import TAG from "./movabletype/tag.json";
import Modifier from "./movabletype/modifier.json";
import { GlobalModifierRecord, TagRecord } from "../item.ts";

export const movabletype: { tag: TagRecord; modifier: GlobalModifierRecord } = {
  tag: TAG,
  modifier: Modifier,
};
