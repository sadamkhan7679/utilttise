import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textArea";
import { FC } from "react";

export const IncidentReportDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center mt-4 w-full">
          <Button
            variant="outline"
            className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow-lg transition duration-200"
          >
            Report Incident
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Report Incident</DialogTitle>
          <DialogDescription>
            Fill out the details of the incident below. Click "Submit" when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="date" className="text-right">
              Date
            </label>
            <Input id="date" type="date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="time" className="text-right">
              Time
            </label>
            <Input id="time" type="time" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="location" className="text-right">
              Location
            </label>
            <Input id="location" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="reportedBy" className="text-right">
              Reported By
            </label>
            <Input id="reportedBy" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="description" className="text-right">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Describe the incident in detail..."
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="actionsTaken" className="text-right">
              Actions Taken
            </label>
            <Textarea
              id="actionsTaken"
              placeholder="Describe any actions taken in response..."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
