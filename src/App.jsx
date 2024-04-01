import { useState } from 'react'
import { useForm } from "react-hook-form"
import lDistanceCalc from './lDistanceCalc'

function App() {
  const [lDistance, setLDistance] = useState(null);
  const {
    register,
    handleSubmit,
  } = useForm()
  const onSubmit = ({ str1, str2 }) => setLDistance(lDistanceCalc(str1, str2))

  return (
    <div className="App">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Levenshtein Distance Test
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="str1" className="block text-sm font-medium leading-6 text-gray-900">
                String 1
              </label>
              <div className="mt-2">
                <input
                  id="str1"
                  {...register("str1")}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="str2" className="block text-sm font-medium leading-6 text-gray-900">
                String 2
              </label>
              <div className="mt-2">
                <input
                  id="str2"
                  {...register("str2")}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
            </div>
          </form>

          {
            lDistance ? <p className="mt-10 text-center text-lg text-gray-500">
              The distance is:{' '}
              <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                {lDistance}
              </span>
            </p> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
