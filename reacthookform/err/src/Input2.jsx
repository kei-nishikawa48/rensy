import React from 'react';
import { useForm } from "react-hook-form"
const Input2 = () => {
  const { register, handleSubmit } = useForm()
  const submit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        name="name"
        ref={register}
      />
      <input
        name="email"
        ref={register}
      />
      <input
        name="pass"
        ref={register}
      />
      <input
        name="confirmpass"
        ref={register}
      />
      <button>コンソール</button>
    </form>
  );
}
export default Input2;