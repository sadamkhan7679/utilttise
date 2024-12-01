"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";
import { CreateDialog } from "@/components/incidents/create-dialog";



function SeverityTag({ severity }) {
  if (severity === "High") {
    return <Badge variant="destructive">{severity}</Badge>;
  }
  if (severity === "Medium") {
    return <Badge variant="secondary">{severity}</Badge>;
  }
  return <Badge variant="outline">{severity}</Badge>;
}

const Incidents = () => {
  const headers = [
    "ID",
    "Name",
    "Description",
    "Severity",
    "Status",
    "Case Owner",
    "Source IP",
    "Destination IP",
    "Domain Name",
    "Host Name",
    "User Name",
    "Email",
    "URL",
    "File Name",
    "File Hash",
    "Device Vendor",
    "Device Product",
    "MITRE Tactics",
    "Created On",
  ];

  const data = [
    {
      id: "1",
      name: "Milicious file downloaded chrome",
      description:
        "Milicious file downloaded from milicious url related to Indian Hack-For-Hire Group",
      severity: "High",
      status: "Open",
      case_Owner: "System Admin",
      source_ip: "154.213.184.15",
      destination_ip: "154.213.184.15",
      domain_name: "Netflip.com",
      host_name: "DC16",
      user_name: "AmiA1",
      email: "",
      url: "vall3y.com",
      file_name: "vall3y.exe",
      file_hash: "f211694aaf443b12b2eca9f5e7f25407",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
    {
      id: "2",
      name: "APT Malware",
      description:
        "Milicious file downloaded from milicious url related to Indian Hack-For-Hire Group",
      severity: "Medium",
      status: "Open",
      case_Owner: "System Admin",
      source_ip: "",
      destination_ip: "",
      domain_name: "Netflip.com",
      host_name: "DC16",
      user_name: "Aviad_12",
      email: "",
      url: "vall3y.com",
      file_name: "vall3y.exe",
      file_hash: "f211694aaf443b12b2eca9f5e7f25407",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
    {
      id: "3",
      name: "Milicious file found",
      description: "Milicious file found - not blocked",
      severity: "Informative",
      status: "Closed",
      case_Owner: "System Admin",
      source_ip: "154.213.184.15",
      destination_ip: "154.213.184.15",
      domain_name: "Netflip.com",
      host_name: "DC16",
      user_name: "Jhony.a",
      email: "",
      url: "",
      file_name: "",
      file_hash: "",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
    {
      id: "4",
      name: "communicate with suspicious address",
      description: "Internal host try to communicate with suspicious address",
      severity: "Informative",
      status: "Closed",
      case_Owner: "System Admin",
      source_ip: "154.213.184.15",
      destination_ip: "154.213.184.15",
      domain_name: "",
      host_name: "DC16",
      user_name: "AmiA1",
      email: "",
      url: "vall3y.com",
      file_name: "vall3y.exe",
      file_hash: "f211694aaf443b12b2eca9f5e7f25407",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
    {
      id: "5",
      name: "Milicious file downloaded chrome",
      description:
        "Milicious file downloaded from milicious url related to Indian Hack-For-Hire Group",
      severity: "High",
      status: "Open",
      case_Owner: "System Admin",
      source_ip: "154.213.184.15",
      destination_ip: "154.213.184.15",
      domain_name: "Netflip.com",
      host_name: "DC16",
      user_name: "AmiA1",
      email: "",
      url: "vall3y.com",
      file_name: "vall3y.exe",
      file_hash: "f211694aaf443b12b2eca9f5e7f25407",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
    {
      id: "6",
      name: "APT Malware",
      description:
        "Milicious file downloaded from milicious url related to Indian Hack-For-Hire Group",
      severity: "Medium",
      status: "Open",
      case_Owner: "System Admin",
      source_ip: "154.213.184.15",
      destination_ip: "",
      domain_name: "Netflip.com",
      host_name: "DC16",
      user_name: "Aviad_12",
      email: "",
      url: "vall3y.com",
      file_name: "vall3y.exe",
      file_hash: "f211694aaf443b12b2eca9f5e7f25407",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
    {
      id: "7",
      name: "Milicious file found",
      description: "Milicious file found - not blocked",
      severity: "Informative",
      status: "Closed",
      case_Owner: "System Admin",
      source_ip: "",
      destination_ip: "154.213.184.15",
      domain_name: "Netflip.com",
      host_name: "DC16",
      user_name: "Jhony.a",
      email: "",
      url: "vall3y.com",
      file_name: "vall3y.exe",
      file_hash: "f211694aaf443b12b2eca9f5e7f25407",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
    {
      id: "8",
      name: "communicate with suspicious address",
      description: "Internal host try to communicate with suspicious address",
      severity: "Informative",
      status: "Closed",
      case_Owner: "System Admin",
      source_ip: "154.213.184.15",
      destination_ip: "154.213.184.15",
      domain_name: "Netflip.com",
      host_name: "DC16",
      user_name: "AmiA1",
      email: "",
      url: "vall3y.com",
      file_name: "vall3y.exe",
      file_hash: "f211694aaf443b12b2eca9f5e7f25407",
      device_vendor: "",
      device_product: "",
      mitre_tactics: "Initial Access, Defense ",
      created_on: "2024-11-24",
    },
  ];

  return (
    <Fragment>
      <div className="min-w-[80w] flex flex-row justify-between">
        <h2>Incidents</h2>
        <CreateDialog></CreateDialog>
      </div>
      <ScrollArea className="h-[80vh] w-[80vw] rounded-md border p-4">
        <Table>
          <TableCaption>A list of your recent Incidents</TableCaption>
          <TableHeader>
            <TableRow>
              {headers &&
                headers.map((i, index) => {
                  return (
                    <TableHead
                      key={index.toString()}
                      className="whitespace-nowrap font-bold"
                    >
                      {i}
                    </TableHead>
                  );
                })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data.map((obj, index) => {
                return (
                  <TableRow key={index.toString()}>
                    <TableCell className="font-medium">{obj.id}</TableCell>
                    <TableCell className="min-w-[150px]">{obj.name}</TableCell>
                    <TableCell className="min-w-[250px]">
                      {obj.description}
                    </TableCell>

                    <TableCell>
                      <SeverityTag severity={obj.severity}></SeverityTag>
                    </TableCell>
                    <TableCell>{obj.status}</TableCell>
                    <TableCell>{obj.user_name}</TableCell>
                    <TableCell>{obj.source_ip}</TableCell>
                    <TableCell>{obj.destination_ip}</TableCell>
                    <TableCell>{obj.domain_name}</TableCell>
                    <TableCell>{obj.host_name}</TableCell>
                    <TableCell>{obj.user_name}</TableCell>
                    <TableCell>{obj.email}</TableCell>
                    <TableCell>{obj.url}</TableCell>
                    <TableCell>{obj.file_name}</TableCell>
                    <TableCell>{obj.file_hash}</TableCell>
                    <TableCell>{obj.device_vendor}</TableCell>
                    <TableCell>{obj.device_product}</TableCell>
                    <TableCell>{obj.mitre_tactics}</TableCell>
                    <TableCell>{obj.created_on}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Fragment>
  );
};

export default Incidents;
