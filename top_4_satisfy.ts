type RGB = readonly [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 0],
} as const satisfies Record<string, string | RGB>;

// Information about each property is still maintained.
const redComponent = palette;

const palette2: Record<string, string | RGB> = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 0],
} as const;

palette2.anyKey;
