import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textArea";

interface FormFieldProps {
  id: string;
  label: string;
  type: "text" | "textarea" | "date" | "time";
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  defaultValue,
  className = "col-span-3",
}) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <label htmlFor={id} className="text-right">
        {label}
      </label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={className}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={className}
        />
      )}
    </div>
  );
};
