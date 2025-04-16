import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/hooks/use-dialog";
import { DialogType } from "@/types";
import React from "react";
import ThemeFilterDescription, { Color, Style } from "./ThemeFilterDescription";

const BaseDialog = () => {
  const id = useDialog((state) => state.params?.type);
  const title = useDialog((state) => state.params?.title);
  const isOpen = useDialog((state) => state.isOpen);
  const styles: Style[] = useDialog((state) =>
    Array.isArray(state.params?.customField1) ? state.params?.customField1 : []
  );
  const colors: Color[] = useDialog((state) =>
    Array.isArray(state.params?.customField2) ? state.params?.customField2 : []
  );
  const callback = useDialog((state) => state.params?.callback1);
  const onClose = useDialog((state) => state.onClose);

  const renderDescriptions = () => {
    switch (id) {
      case DialogType.FilterTheme:
        return (
          <ThemeFilterDescription
            styles={styles || []}
            colors={Array.isArray(colors) ? colors : []}
          />
        );
      default:
        return "Default Description";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} key={id}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-subtitle-2-semibold">
            {title || "Default Title"}
          </DialogTitle>
          <DialogDescription>{renderDescriptions()}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
