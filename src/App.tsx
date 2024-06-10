import { SubmitHandler, useForm } from "react-hook-form";
import { TimerType } from "./consts/form";

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
        <label htmlFor="timerLabel">Timer name</label>
        <input {...register("timerLabel", { required: true })} />
        <label htmlFor="timerType">Timer type</label>
        <select {...register("timerType", { required: true })}>
          <option value={TimerType.classic}>Classic</option>
          <option value={TimerType.countdown}>Countdown</option>
          <option value={TimerType.interval}>Interval</option>
        </select>

        {errors.timerLabel && <span>Timer name is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
