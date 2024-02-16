import React from "react";
import MDEditor from "@uiw/react-md-editor";
import Button from "../../../../components/button";

export const EditorView: React.FC<{ onCancel: () => void, onSave: (value:any) => void  }> = ({onCancel, onSave}) => {
  const [value, setValue] = React.useState<any>("");
  return (
    <div className="container w-full">
       <h3 className="text-lg font-medium mb-3">Editor</h3> 
      <MDEditor value={value} onChange={setValue} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
      <div className="flex justify-end gap-x-5 mt-10">
        <button
          className="text-zinc-500"
          onClick={onCancel}
        >
          Cancel
        </button>
        <Button type="submit" onClick={() => onSave(value)} text="Save" />
      </div>
    </div>
  );
}
