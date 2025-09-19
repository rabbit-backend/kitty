import type { FC } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import type { RasterSource as RasterSourceInput } from "@/types/sources";
import { useSourceStore } from "@/store/sources";

export const RasterSource: FC = () => {
  const { register, handleSubmit } = useForm<RasterSourceInput>({
    defaultValues: {
      url: "",
      name: "",
      type: "raster",
    },
  });

  const createRasterSource = useSourceStore(
    (store) => store.createRasterSource
  );

  return (
    <form
      onSubmit={handleSubmit((values) => {
        createRasterSource(values);
      })}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="coverage"
          {...register("name")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          type="text"
          placeholder="https://example.com/wms?request=GetMap&layer=coverage&bbox={bbox-epsg-3857}"
          {...register("url")}
        />
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button type="submit">Create</Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
};
