import React from "react";

function BugTable({ header, content }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {header?.map((item, index) => (
            <th key={index} scope="col" className="px-4 py-3">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content?.map((item, index) => (
          <tr className="border-b dark:border-gray-700" key={index}>
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.id}
            </th>
            <td className="px-4 py-3">{item.createdAt}</td>
            <td className="px-4 py-3">{item.bugType}</td>
            <td className="px-4 py-3">{item.title}</td>
            <td className="px-4 py-3">{item.status}</td>
            <td className="px-4 py-3">{item.dangerType}</td>
            <td className="px-4 py-3">{item.managerProvider}</td>
            <td className="px-4 py-3">{item.planifiedResolutionDate}</td>
            <td className="px-4 py-3">{item.resolutionDate}</td>
            <td className="px-4 py-3">{item.productionDate}</td>
            <td className="px-4 py-3">{item.observation}</td>
            <td className="px-4 py-3 flex items-center justify-end">
              <button
                id="apple-imac-27-dropdown-button"
                data-dropdown-toggle="apple-imac-27-dropdown"
                className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                type="button"
              >
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div
                id="apple-imac-27-dropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Show
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Edit
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BugTable;
