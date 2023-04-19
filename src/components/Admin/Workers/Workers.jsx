import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWorkersAsync,
  Statuses,
} from "../../../features/workers/workerSlice";

const Workers = () => {
  const dispatch = useDispatch();
  const { workers, status } = useSelector((store) => store.workers);

  useEffect(() => {
    dispatch(fetchWorkersAsync());
  }, [dispatch]);

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>;
  } else {
    contents = (
      <div>
        <div>
          <h3>{status}</h3>
          {/* Form goes here */}
          {workers &&
            workers.length > 0 &&
            workers.map((emp) => {
              return (
                <div key={emp.id}>
                  <h3>{emp.name}</h3>
                  <p>{emp.job}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return <>{contents}</>;
};
export default Workers;
