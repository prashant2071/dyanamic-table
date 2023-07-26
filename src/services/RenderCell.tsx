import React from 'react'

const RenderCellDatata = (item: any) => {
  return (
    <>
            <table className="table table-bordered table-dark">
          {Object.keys(item).map((keys: any, index: number) => {
            return (
              <tr key={index}>
                <td>{keys}</td>
                <td>
                  {typeof item[keys] === "object"
                    ? RenderCellDatata(item[keys])
                    : item[keys]}
                </td>
              </tr>
            );
          })}
        </table>
    </>

  )
}

export default RenderCellDatata;