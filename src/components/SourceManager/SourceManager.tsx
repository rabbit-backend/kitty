import { useRef, type FC } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CloudUpload } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { TileSource } from "./TileSource";
import { RasterSource } from "./RasterSource";
import { GeoJsonSource } from "./GeoJsonSource";

export const SourceManager: FC = () => {
  return (
    <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-1">{/* List of layers go here */}</div>
    </div>
  );
};
