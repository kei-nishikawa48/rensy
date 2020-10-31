import './App.css';
import { useForm } from 'react-hook-form';
import Input2 from "./Input2"
function App() {
  const { register, handleSubmit, errors ,reset} = useForm()
  const submit = (data) => {
    console.table(data)
    reset()
  }
  const passReg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  const mailReg = new RegExp("^([a-zA-Z0-9])+([a-zA-Z0-9_-])*@([a-zA-Z0-9\._-])+([a-zA-Z0-9\._-]+)+$")
  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit(submit)}>
        <label>name</label>
        <input
          name="name"
          ref={register({
            required: "名前を入力してください",
            minLength: {
              value: 2,
              message: "名前は2文字以上です"
            }
          })}
        />
        {errors.name && errors.name.message}
        <label>email</label>
        <input
          name="email"
          ref={register({
            required: "メールアドレスを入力して下さい",
            pattern:{
              value: mailReg,
              message:"正しいメールアドレスを入力してください"
            }
          })}
        />
        {errors.email && errors.email.message}
        
        <label>pass</label>
        <input
        type="password"
          name="password"
          ref={register({ required:"パスワードを入力して下さい",
          pattern:{
              value:passReg,
              message:"パスワードは6文字以上かつ１つの小文字と１つの大文字のアルファベット文字、１つの英数字を含む必要性があります。"
            }
          })}
        />
        {errors.password && errors.password.message}
        <button>サインイン</button>
      </form> */}
      <Input2/>
    </div>
  )
}

export default App;
