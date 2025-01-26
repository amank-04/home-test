import data from "../data/compititors.json";

export default function Table() {
  return (
    <div className="overflow-x-auto text-white">
      <table className="w-full overflow-x-auto text-sm">
        <thead>
          <tr className="*:border *:border-primary-gray *:bg-gradient-to-t *:p-3 *:text-center *:text-lg *:font-semibold">
            <th className="bg-gradient-to-t from-[#777777] to-[#999797]">
              Platform Name
            </th>
            <th className="from-[#BD0331] to-[#DB1F34]">GAMERS TAG</th>
            <th className="from-[#3C3A3A] to-[#5C5C5C]">X Platform</th>
            <th className="from-[#3C3A3A] to-[#5C5C5C]">Y Platform</th>
            <th className="from-[#3C3A3A] to-[#5C5C5C]">Z Platform</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ title, values }, index) => (
            <tr key={index}>
              <td className="space-x-3 border border-l-8 border-primary-gray border-l-[#BD0331] bg-[#242020] indent-3 font-medium">
                {title}
              </td>
              <td className="border border-primary-gray bg-gradient-to-t from-[#C72045] to-[#DE3548] p-3 text-center font-normal">
                {values[0]}
              </td>
              {values.slice(1).map((value, idx) => (
                <td
                  className="border border-primary-gray bg-black p-3 text-center font-light"
                  key={idx}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
