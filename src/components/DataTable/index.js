import React from 'react'


const DataTable = ({ columns, tableData }) => {

    const getDataVal = (itmObj, keyName) => {

        const splitName = keyName.split('.')

        // console.log(splitName)
        if (splitName.length === 1) {
            return itmObj[keyName]
        }

        if (splitName.length === 2) {
            return itmObj[splitName[0]][splitName[1]]
        }


    }

    return (
        <div>
            <h2>Data Table</h2>

            <table>
                <thead>
                    <tr>
                        {
                            columns.map((itm, idx) => {
                                return (
                                    <td key={`column-${idx}`}>{itm.name}</td>
                                )
                            })
                        }

                    </tr>
                </thead>
                <tbody>

                    {
                        tableData.map((itm, idx) => {
                            return (
                                <tr key={`table-row-${idx}`}>
                                    {
                                        columns.map((itm2, idx2) => {
                                            return (
                                                <td key={`$column-item-${idx2}`}>
                                                    {getDataVal(itm, itm2.key)}
                                                </td>
                                            )
                                        })
                                    }

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </div>
    )

}

export { DataTable as default }