import { type FC } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TileSource } from "./TileSource";
import { RasterSource } from "./RasterSource";
import { GeoJsonSource } from "./GeoJsonSource";
import { useSourceStore } from "@/store/sources";
import type { BaseSource } from "@/types/sources";
import { SwatchBook, Image, FileJson2 } from "lucide-react";

export const SourceManager: FC = () => {
  const sources = useSourceStore(
    (state) => state.sources as unknown as BaseSource[]
  );

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-end">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">Add Source</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-4">
              <DialogHeader>
                <DialogTitle>Add Source</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="tiles">
                <TabsList>
                  <TabsTrigger value="tiles">Tiles</TabsTrigger>
                  <TabsTrigger value="raster">Raster</TabsTrigger>
                  <TabsTrigger value="geojson">GeoJson</TabsTrigger>
                </TabsList>
                <TabsContent value="tiles" className="mt-2 flex flex-col gap-4">
                  <TileSource />
                </TabsContent>
                <TabsContent
                  value="raster"
                  className="mt-2 flex flex-col gap-4"
                >
                  <RasterSource />
                </TabsContent>
                <TabsContent
                  value="geojson"
                  className="mt-2 flex flex-col gap-4"
                >
                  <GeoJsonSource />
                </TabsContent>
              </Tabs>
            </DialogContent>
          </form>
        </Dialog>
      </div>
      <div className="flex flex-col gap-1 p-1">
        {sources.map((source, id) => {
          return <ListItem key={id} {...source} />;
        })}
      </div>
    </div>
  );
};

const ListItem: FC<BaseSource> = (props) => {
  return (
    <div className="border p-2 min-h-12 flex items-center gap-1 bg-card">
      {props.type === "tile" && (
        <SwatchBook className="text-muted-foreground" />
      )}
      {props.type === "raster" && <Image className="text-muted-foreground" />}
      {props.type === "geojson" && (
        <FileJson2 className="text-muted-foreground" />
      )}
      <span className="text-lg">{props.name}</span>
    </div>
  );
};
