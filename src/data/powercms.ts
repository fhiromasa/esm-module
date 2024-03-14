import TAG from "./powercms/tag.json";
import Modifier from "./powercms/modifier.json";
import { GlobalModifierRecord, TagRecord } from "../item.ts";

export const powercms: { tag: TagRecord; modifier: GlobalModifierRecord } = {
  tag: TAG,
  modifier: Modifier,
};
