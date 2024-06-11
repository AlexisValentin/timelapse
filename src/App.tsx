import { SubmitHandler, useForm } from "react-hook-form";
import { TimerType } from "./consts/form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

type Inputs = {
  timerLabel: string;
  timerType: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <h1>Timelapse</h1>
      <h2>Timers and intervals manager progressive webapp</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="timerLabel"
            label="Timer name"
            variant="standard"
            {...register("timerLabel", { required: true })}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="timerType">Timer type</InputLabel>
          <Select
            labelId="timeType"
            {...register("timerType", { required: true })}
          >
            <MenuItem value={TimerType.classic}>Classic</MenuItem>
            <MenuItem value={TimerType.countdown}>Countdown</MenuItem>
            <MenuItem value={TimerType.interval}>Interval</MenuItem>
          </Select>

          {errors.timerLabel && <span>Timer name is required</span>}
          <input type="submit" />
        </FormControl>
      </form>
    </>
  );
};

export default App;
