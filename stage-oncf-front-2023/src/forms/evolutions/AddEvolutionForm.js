import { Field, Form, Formik } from "formik";
import React from "react";
import { initialValues } from "./EvolutionHelper";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddEvolutionForm() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        await axios
          .post("http://localhost:8080/api/evolutions", values)
          .then((res) => {
            navigate("/evolutions");
          })
          .catch((err) => console.log(err));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-3 gap-5">
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">evolutionType</label>
            <Field
              name="evolutionType"
              placeholder="evolutionType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
            <Field
              name="title"
              placeholder="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">recommendedBy</label>
            <Field
              name="recommendedBy"
              placeholder="recommendedBy"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">status</label>
            <Field
              name="status"
              placeholder="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">module</label>
            <Field
              name="module"
              placeholder="module"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phase</label>
            <Field
              name="phase"
              placeholder="phase"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">application</label>
            <Field
              name="application"
              placeholder="application"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">channelType</label>
            <Field
              name="channelType"
              placeholder="channelType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">exploitationType</label>
            <Field
              name="exploitationType"
              placeholder="exploitationType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">priority</label>
            <Field
              name="priority"
              placeholder="priority"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">planifiedMeetingDate</label>
            <Field
              name="planifiedMeetingDate"
              placeholder="planifiedMeetingDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>

          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">meetingDate</label>
            <Field
              name="meetingDate"
              placeholder="meetingDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">productionDate</label>
            <Field
              name="productionDate"
              placeholder="productionDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">percentage</label>
            <Field
              name="percentage"
              placeholder="percentage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">stuationType</label>
            <Field
              name="stuationType"
              placeholder="stuationType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">observation</label>
            <Field
              name="observation"
              placeholder="observation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            />
          </div>

          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <div className="col-span-3 mt-5 flex items-center justify-center">
            <button
              //   disabled={isSubmitting}
              type="submit"
              className="text-white  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-1/2 text-center  px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="  w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddEvolutionForm;
