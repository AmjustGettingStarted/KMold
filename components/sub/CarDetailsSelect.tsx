import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CarDetailsSelect({ title }: { title: string }) {
  return (
    <Select>
      <SelectTrigger className="w-[120px] text-sm tracking-tighter border-none">
        <SelectValue placeholder={title} className=" w-[200px] -ml-2 " />
      </SelectTrigger>
      <SelectContent className="border-none ">
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem
            className="text-gray-400 hover:text-gray-400"
            value="value"
          >
            {title}
          </SelectItem>
          <SelectItem
            className="text-gray-400 hover:text-gray-400"
            value="value"
          >
            other...
          </SelectItem>
          <SelectItem
            className="text-gray-400 hover:text-gray-400"
            value="Mysore"
          >
            other...
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
