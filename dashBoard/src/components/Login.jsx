import { useFormik } from 'formik';
import * as Yup from 'Yup';

function Login() {
  const validateForm = Yup.object({
    username: Yup.string()
      .min(2, 'username must be atleast two character')
      .required('required '),
    password: Yup.string()
      .min(8, 'password must be atleast eight characters')
      .required('required'),
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validateForm,
    onSubmit: (values) => {
      console.log('data', values);
    },
  });
  return (
    <div className="w-full flex items-center justify-center shadow-lg h-[100vh] bg-green-300">
      <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col justify-center w-[50%] bg-slate-100 h-1/2 shadow-lg rounded-md gap-3"
      >
        <div className="flex flex-col mt-1 mx-2 gap-3">
          <label
            htmlFor="username"
            className="text-xl font-semibold"
          >
            Username :{' '}
          </label>
          <input
            type="text"
            name="username"
            placeholder="enter your username..."
            value={formik.values.username}
            onChange={formik.handleChange}
            className="w-full p-2"
          />
        </div>
        {formik.touched.username && formik.errors.username ? (
          <span>{formik.errors.username}</span>
        ) : null}
        <div className="flex flex-col mt-1 mx-2 gap-3">
          <label
            htmlFor="password"
            className="text-xl font-semibold"
          >
            Password :{' '}
          </label>
          <input
            type="text"
            name="password"
            placeholder="enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="w-full p-2"
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="text-red-950">{formik.errors.password}</span>
          ) : null}
          <button
            type="submit"
            className="w-1/3 bg-blue-400 py-2 rounded-md text-white hover:bg-blue-300"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
