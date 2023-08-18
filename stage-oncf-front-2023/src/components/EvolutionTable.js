import axios from "axios";
import React from "react";

function EvolutionTable({ header, content, setEvolutions }) {
  const deleteItem = async (id) => {
    setEvolutions(content.filter((b) => b.id !== id));
    await axios.delete(`http://localhost:8080/api/evolutions/${id}`);
  };
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
            <td className="px-4 py-3">{item.evolutionType}</td>
            <td className="px-4 py-3">{item.title}</td>
            <td className="px-4 py-3">{item.recommendedBy}</td>
            <td className="px-4 py-3">{item.module}</td>
            <td className="px-4 py-3">{item.phase}</td>
            <td className="px-4 py-3">{item.application}</td>
            <td className="px-4 py-3">{item.channelType}</td>
            <td className="px-4 py-3">{item.exploitationType}</td>
            <td className="px-4 py-3">{item.priority}</td>
            <td className="px-4 py-3">{item.needMeeting ? "Oui" : "non"}</td>
            <td className="px-4 py-3">{item.planifiedMeetingDate}</td>
            <td className="px-4 py-3">{item.meetingDate}</td>
            <td className="px-4 py-3">{item.productionDate}</td>
            <td className="px-4 py-3">{item.percentage}</td>
            <td className="px-4 py-3">{item.stuationType}</td>
            <td className="px-4 py-3">{item.observation}</td>

            <td className="px-4 py-3 flex items-center justify-end">
              <button
                className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                onClick={() => deleteItem(item.id)}
              >
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EvolutionTable;
