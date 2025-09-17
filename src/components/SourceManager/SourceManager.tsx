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

export const SourceManager: FC = () => {
  const fileUploadInputRef = useRef<HTMLInputElement>(undefined!);

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
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="buildings"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      name="url"
                      type="text"
                      placeholder="http://example.com/tile.json"
                    />
                  </div>
                </TabsContent>
                <TabsContent
                  value="raster"
                  className="mt-2 flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="coverage"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      name="url"
                      type="text"
                      placeholder="https://example.com/wms?request=GetMap&layer=coverage&bbox={bbox-epsg-3857}"
                    />
                  </div>
                </TabsContent>
                <TabsContent
                  value="geojson"
                  className="mt-2 flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="earthquakes"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Data</Label>
                    <div className="relative">
                      <Textarea
                        id="name"
                        name="name"
                        placeholder="geojson"
                        className="max-h-[240px] min-h-[140px]"
                      />
                      <input type="file" hidden ref={fileUploadInputRef} />
                      <span className="absolute inline bottom-0 right-0">
                        <Button
                          size={"icon"}
                          variant={"link"}
                          onClick={() => fileUploadInputRef.current.click()}
                        >
                          <CloudUpload />
                        </Button>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <Checkbox name="clustering" />
                    <Label htmlFor="clustering">Cluster</Label>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="clusterMinZoom">Min Zoom</Label>
                      <Input
                        id="clusterMinZoom"
                        name="clusterMinZoom"
                        type="number"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <Label htmlFor="clusterMaxZoom">Max Zoom</Label>
                      <Input
                        id="clusterMaxZoom"
                        name="clusterMaxZoom"
                        type="number"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="clusterRadius">Radius</Label>
                      <Input
                        id="clusterRadius"
                        name="clusterRadius"
                        type="number"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Create</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
      <div className="flex flex-col gap-1">{/* List of layers go here */}</div>
    </div>
  );
};
