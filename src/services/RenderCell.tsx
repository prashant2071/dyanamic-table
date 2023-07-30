
const RenderCellDatata = (item: any) => {
  return (
    <>
            <table className="table table-bordered">
            <thead>

              <tr >
              {Object.keys(item).map((keys: any, index: number) => { return <th>{keys}</th>})}
                </tr>
                </thead>
                <tr>
                {Object.keys(item).map((keys: any, index: number) => { return<td>
                  {typeof item[keys] === "object"
                    ? RenderCellDatata(item[keys])
                    : item[keys]}
                </td>})}
              </tr>
          
        </table>
    </>

  )
}

export default RenderCellDatata;