import { create } from "zustand";

type BaseSource = {
  name: string;
  type: "tile" | "raster" | "geojson";
};

type TileSource = BaseSource & {
  url: string;
};

type RasterSource = {
  url: string;
};

type GeoJsonStore = {
  data: unknown;
};

type SourceStore = {
  sources: (TileSource | RasterSource | GeoJsonStore)[];
};

export const useSourceStore = () =>
  create<SourceStore>((set) => ({
    sources: [],
    createTileSource: (source: TileSource) =>
      set(({ sources }) => ({ sources: [...sources, source] })),
    createRasterSource: (source: TileSource) =>
      set(({ sources }) => ({ sources: [...sources, source] })),
    createGeoJsonStore: (source: TileSource) =>
      set(({ sources }) => ({ sources: [...sources, source] })),
  }));
