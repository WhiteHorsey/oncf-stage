import React from "react";
import NavBar from "../../components/NavBar";
import AddEvolutionForm from "../../forms/evolutions/AddEvolutionForm";

function AddEvolutionPage() {
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
        <section className="w-3/4 mx-auto mt-28  dark:bg-gray-900">
          <AddEvolutionForm />
        </section>
      </div>
    </div>
  );
}

export default AddEvolutionPage;
