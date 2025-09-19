import type { FC } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

export const RasterSource: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="coverage" />
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

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Create</Button>
      </DialogFooter>
    </>
  );
};
