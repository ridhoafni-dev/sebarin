"use client";

import BaseDialog from "@/app/components/dialog/BaseDialog";
import React, { useEffect, useState } from "react";

export const DialogProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <BaseDialog />
    </>
  );
};
