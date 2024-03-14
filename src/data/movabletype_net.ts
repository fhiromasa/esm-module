import TAG from "./movabletype_net/tag.json";
import Modifier from "./movabletype_net/modifier.json";
import { GlobalModifierRecord, TagRecord } from "../item.ts";

export const movabletype_net: {
  tag: TagRecord;
  modifier: GlobalModifierRecord;
} = {
  tag: TAG,
  modifier: Modifier,
};
