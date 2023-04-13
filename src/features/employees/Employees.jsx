import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeesAsync, Statuses } from "./employeeSlice";

const Employees = () => {
  const dispatch = useDispatch();
  const { employees, status } = useSelector((store) => store.employees);

  useEffect(() => {
    dispatch(fetchEmployeesAsync());
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
          {employees &&
            employees.length > 0 &&
            employees.map((emp) => {
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

  return <div>{contents}</div>;
};
export default Employees;
