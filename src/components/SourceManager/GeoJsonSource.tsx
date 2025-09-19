import { useRef, useState, type FC } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { CloudUpload } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { DialogClose, DialogFooter } from "../ui/dialog";

export const GeoJsonSource: FC = () => {
  const fileUploadInputRef = useRef<HTMLInputElement>(undefined!);

  const [isClusteringEnabled, setIsClusteringEnabled] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="earthquakes" />
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
        <Checkbox
          checked={isClusteringEnabled}
          onCheckedChange={(checked) =>
            setIsClusteringEnabled(checked ? true : false)
          }
          name="clustering"
        />
        <Label htmlFor="clustering">Cluster</Label>
      </div>

      {isClusteringEnabled && (
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="clusterMinZoom">Min Zoom</Label>
            <Input id="clusterMinZoom" name="clusterMinZoom" type="number" />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="clusterMaxZoom">Max Zoom</Label>
            <Input id="clusterMaxZoom" name="clusterMaxZoom" type="number" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="clusterRadius">Radius</Label>
            <Input id="clusterRadius" name="clusterRadius" type="number" />
          </div>
        </div>
      )}

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Create</Button>
      </DialogFooter>
    </>
  );
};
