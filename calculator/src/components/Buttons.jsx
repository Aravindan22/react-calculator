import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Buttons() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button>log</Button>
        <Button>ln</Button>
        <Button>CLR</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>()</Button>
        <Button>√</Button>
        <Button>^</Button>
        <Button>/</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>.</Button>
        <Button>0</Button>
        <Button>x</Button>
        <Button>=</Button>
      </Stack>
    </Stack>
  );
}
