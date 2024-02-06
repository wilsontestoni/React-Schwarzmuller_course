export default function InputSection({ idContent, inputType, labelText, setData }) {

  const changeHandler = (e) => {
    const valueAsNumber = Number(e.target.value)
    setData(valueAsNumber);
  }

  return (
      <p>
        <label htmlFor={idContent}>{labelText}</label>
        <input onChange={changeHandler} type={inputType} id={idContent} required/>
      </p>
  );
}
