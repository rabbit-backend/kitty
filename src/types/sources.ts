export type BaseSource = {
  name: string;
  type: "tile" | "raster" | "geojson";
};

export type TileSource = BaseSource & {
  url: string;
};

export type RasterSource = BaseSource & {
  url: string;
};

export type GeoJsonSource = BaseSource & {
  data: unknown;
  cluster: boolean;
};

export type SourceStore = {
  sources: (TileSource | RasterSource | GeoJsonSource)[];
};
