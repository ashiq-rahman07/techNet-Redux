import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-10 ">
      <div className="flex gap-3">
        <button className="mr-5" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By Amount
        </button>
        <div>{count}</div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
