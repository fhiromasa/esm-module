import TAG from "./powercms_x/tag.json";
import Modifier from "./powercms_x/modifier.json";
import { GlobalModifierRecord, TagRecord } from "../item.ts";

export const powercms_x: { tag: TagRecord; modifier: GlobalModifierRecord } = {
  tag: TAG,
  modifier: Modifier,
};
