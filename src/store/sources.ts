import type {
  GeoJsonSource,
  RasterSource,
  SourceStore,
  TileSource,
} from "@/types/sources";
import { create } from "zustand";

type SourceStoreFn = SourceStore & {
  createTileSource: (source: TileSource) => void;
  createRasterSource: (source: RasterSource) => void;
  createGeoJsonSource: (source: GeoJsonSource) => void;
};

export const useSourceStore = create<SourceStore & SourceStoreFn>((set) => ({
  sources: [],
  createTileSource: (source) =>
    set(({ sources }) => ({ sources: [...sources, source] })),
  createRasterSource: (source) =>
    set(({ sources }) => ({ sources: [...sources, source] })),
  createGeoJsonSource: (source) =>
    set(({ sources }) => ({ sources: [...sources, source] })),
}));
