type Item = {
  name: string;
  description: string;
};

export type TTag = {
  type: "block" | "function" | string;
  url: string;
  modifiers: Record<string, TLocalModifier>;
  deprecated?: true;
  added_version?: string;
} & Item;

export type TLocalModifier = {
  value: string[];
  type: "local" | string;
} & Item;

export type TGlobalModifier = {
  type: "global" | string;
  url: string;
  added_version?: string;
  value?: string[][];
} & Item;

export type Modifier = {
  type: "local" | "global" | string;
  url?: string;
  added_version?: string;
  value: {
    first?: string[];
    second?: string[];
  };
} & Item;

export type TagRecord = Record<string, TTag>;
export type GlobalModifierRecord = Record<string, TGlobalModifier>;
export type ModifierRecord = Record<string, Modifier>;
