import React from "react";
import { SnackbarProvider } from "notistack";
import PrimaryButton from "../Buttons/Primary/PrimaryButton";

const NotiStack = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <PrimaryButton />
      </SnackbarProvider>
    </>
  );
};

export default NotiStack;
