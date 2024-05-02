import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import { FieldValues } from "react-hook-form";
import SelectField from "@/components/Forms/SelectField";
import { accountType } from "@/types/common";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FaMoneyBillTrendUp, FaPeopleArrows } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
type TModalProp = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataType: string;
};
export default function DebtsModal({ open, setOpen, dataType }: TModalProp) {
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(null);
  const [paybackDateValue, setPaybackDateValue] = React.useState<Dayjs | null>(
    null
  );

  const handleClose = () => {
    setOpen(false);
  };
  const getTitle = () => {
    if (dataType === "Credit") {
      return "New Credit";
    } else {
      return "New Debit";
    }
  };
  const handleSubmit = (values: FieldValues) => {
    // console.log(values);
    // const { email, account,client } = values;
    // console.log("Email:", email);
    // console.log("Account:", account);
    // console.log("Date:", dateValue?.format()); // Format the date value as needed
    // console.log("Payback Date:", paybackDateValue?.format());
    const detailData = {
      ...values,
      date : dateValue?.format(),
      paybackDate : paybackDateValue?.format(),
    };
    console.log(detailData);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {getTitle()}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Form onSubmit={handleSubmit}>
            <Box className="my-2 flex justify-center items-center gap-1">
              <FaMoneyBillTrendUp className="text-4xl text-amber-500" />
              <InputField
                name="amount"
                label="Amount"
                type="number"
                size="small"
                fullWidth={true}
              />
            </Box>
            <Box className="my-2 flex justify-center items-center gap-1">
              <MdAccountBalance className="text-4xl text-amber-500" />
              <SelectField name="account" label="Account" items={accountType} />
            </Box>

            <Box>
              <Box className="my-2 flex justify-center items-center gap-1">
                <FaRegCalendarAlt className="text-3xl text-amber-500" />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      label="Date"
                      value={dateValue}
                      onChange={(newValue) => setDateValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
              <Box className="my-2 flex justify-center items-center gap-1">
                <FaRegCalendarCheck className="text-3xl text-amber-500" />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      label="Payback Date"
                      value={paybackDateValue}
                      onChange={(newValue) => setPaybackDateValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Box>
            <Box className="my-2 flex justify-center items-center gap-1">
              <FaPeopleArrows className="text-4xl text-amber-500" />
              <InputField
                name="client"
                label="With"
                type="text"
                size="small"
                fullWidth={true}
              />
            </Box>
            <DialogActions>
              <Button
                fullWidth={true}
                sx={{ margin: "20px 0px" }}
                type="submit"
                variant="contained"
                autoFocus
                onClick={handleClose}
              >
                Submit
              </Button>
            </DialogActions>
          </Form>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
