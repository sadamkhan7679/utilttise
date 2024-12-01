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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textArea";
import { Plus } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function CreateDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus></Plus>
          Button
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[80vw]">
        <DialogHeader>
          <DialogTitle>Create Incident</DialogTitle>
          <DialogDescription>
            Input required fields and Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[70vh] p-4">
          <form>
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Incident Tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Laptop">Laptop</SelectItem>
                    <SelectItem value="Phishing">Phishing</SelectItem>
                    <SelectItem value="VIP">VIP</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Incident Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ransomeware">Ransomeware</SelectItem>
                    <SelectItem value="Fileless Malware">
                      Fileless Malware
                    </SelectItem>
                    <SelectItem value="Spyware">Spyware</SelectItem>
                    <SelectItem value="Adware">Adware</SelectItem>
                    <SelectItem value="Trojans">Trojans</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Incident Owner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="User A">User A</SelectItem>
                    <SelectItem value="User B">User B</SelectItem>
                    <SelectItem value="User C">User C</SelectItem>
                    <SelectItem value="User D">User D</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="text" placeholder="Name" />
                <Textarea placeholder="Description" />
                <Textarea placeholder="Identification" />
                <Textarea placeholder="Analysis" />
                <Textarea placeholder="Containment" />
                <Input id="files" type="file" placeholder="Screenshot/docx"/>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Incident Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Close">Close</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Incident Severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Critical">Critical</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Informative">Informative</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="text" placeholder="Source IP" />
                <Input type="text" placeholder="Destination IP" />
                <Input type="text" placeholder="Domain Name" />
                <Input type="text" placeholder="Host Name" />
                <Input type="text" placeholder="User Name" />
                <Input type="text" placeholder="Email Address" />
                <Input type="text" placeholder="URL" />
                <Input type="text" placeholder="File Name" />
                <Input type="text" placeholder="File Hash" />
                <Input type="text" placeholder="MITRE Tactics" />
              </div>
            </div>
          </form>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
