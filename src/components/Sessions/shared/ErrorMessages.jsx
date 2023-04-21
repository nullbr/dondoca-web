const ErrorMessages = ({ errors, errorMessages }) => {
  return (
    <>
      {(errors.length > 0 || errorMessages.length > 0) && (
        <legend className="bg-red py-5 px-10 mb-10 rounded-lg">
          <ul className="list-disc text-[1.6rem] text-white">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
            {errorMessages.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </legend>
      )}
    </>
  );
};

export default ErrorMessages;
