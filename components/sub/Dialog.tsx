import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  emiOpen: boolean;
  setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dialogTitle: string;
};

export function DialogDemo({ emiOpen, setModelOpen, dialogTitle }: Props) {
  return (
    <Dialog open={emiOpen} onOpenChange={setModelOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[27%] rounded-none ">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl">
            {dialogTitle}
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="w-full gap-4 flex flex-col ">
          <Input
            className="rounded-xs"
            type="text"
            placeholder="Name"
            required
          />
          <Input
            className="rounded-xs"
            type="number"
            placeholder="Phone Number"
            required
          />
          <Input
            className="rounded-xs"
            type="text"
            placeholder={dialogTitle}
            required
          />
          <div className="  text-sm flex items-start">
            <Checkbox className="mt-1 visible" />
            <p className="w-full pl-2 tracking-tight">
              <span className="font-bold ">Disclaimer:</span> I authorize
              Kalyani Motors to send notifications via SMS, Kalyani Super App,
              WhatsApp, Email and RCS.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full text-white bg-[#ff6600] rounded-xs py-0  text-sm cursor-pointer"
        >
          {dialogTitle}
        </Button>
        <DialogFooter className="py6">
          <div>
            <span
              className="text-[#47ADcf] font-semibold capitalize text-sm px-4 cursor-pointer"
              onClick={() => setModelOpen(false)}
            >
              close
            </span>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
