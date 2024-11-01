import { DialogWrapper } from "@/components/dashboard/dialog-wrapper";
import { FormField } from "@/components/dashboard/form-field";

export const IncidentReportDialog: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <DialogWrapper
      title="Report Incident"
      description="Fill out the details of the incident below. Click 'Submit' when you're done."
      triggerText="Report Incident"
      onSubmit={handleSubmit}
    >
      <FormField id="date" label="Date" type="date" />
      <FormField id="time" label="Time" type="time" />
      <FormField
        id="location"
        label="Location"
        type="text"
        placeholder="Enter location"
      />
      <FormField
        id="reportedBy"
        label="Reported By"
        type="text"
        placeholder="Your name"
      />
      <FormField
        id="description"
        label="Description"
        type="textarea"
        placeholder="Describe the incident in detail..."
      />
      <FormField
        id="actionsTaken"
        label="Actions Taken"
        type="textarea"
        placeholder="Describe any actions taken..."
      />
    </DialogWrapper>
  );
};
