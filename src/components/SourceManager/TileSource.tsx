import type { FC } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import type { TileSource as TileSourceInput } from "@/types/sources";
import { useSourceStore } from "@/store/sources";

export const TileSource: FC = () => {
  const { register, handleSubmit } = useForm<TileSourceInput>({
    defaultValues: {
      name: "",
      type: "tile",
      url: "",
    },
  });

  const createTileSource = useSourceStore((store) => store.createTileSource);

  return (
    <form
      onSubmit={handleSubmit((values) => {
        createTileSource(values);
      })}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="buildings"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          type="text"
          placeholder="http://example.com/tile.json"
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
