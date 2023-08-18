import React from "react";
import NavBar from "../../components/NavBar";
import AddBugForm from "../../forms/bugs/AddBugForm";
import AddBugFixForm from "../../forms/bugsfixs/AddBugFixForm";

function AddBugFixPage() {
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
        <section className="w-1/2 mx-auto mt-28  dark:bg-gray-900">
          <AddBugFixForm />
        </section>
      </div>
    </div>
  );
}

export default AddBugFixPage;
