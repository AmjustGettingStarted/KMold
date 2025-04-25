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

export function SelectMenu() {
  return (
    <Select>
      <SelectTrigger className="w-[120px] text-gray-400 text-sm tracking-tighter border-none">
        <SelectValue
          placeholder="Bengaluru"
          className="-ml-2 placeholder:text-gray-400"
        />
      </SelectTrigger>
      <SelectContent className="border-none ">
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem
            className="text-gray-400 hover:text-gray-400"
            value="Hyderabad"
          >
            Hyderabad
          </SelectItem>
          <SelectItem
            className="text-gray-400 hover:text-gray-400"
            value="Bengaluru"
          >
            Bengaluru
          </SelectItem>
          <SelectItem
            className="text-gray-400 hover:text-gray-400"
            value="Mysore"
          >
            Mysore
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
