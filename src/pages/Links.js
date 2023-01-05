import React, { useContext, useEffect} from 'react'
import AuthContext from '../context/user/AuthContext'
import UrlContext from '../context/url/urlContext';
import '../styles/dashboard.css';
import { useTable,useSortBy } from 'react-table'




export default function Links() {

    
    

    const {user} = useContext(AuthContext);
    const {urls,getUrls,hata}= useContext(UrlContext);

    

    // Add a new property to the data with mapping

    const datas = urls.map((url,index)=>{
        return {
            original_url:url.original_url,
            shortened_url:"http://localhost:3000/"+url.shortened_url,
            specialURL:url.specialURL,
            end_time:url.end_time,
            clicks:url.clicks,
            date:url.date
        }
    })

    const data = React.useMemo(
        () => datas,
        []
    )



    

    const columns = React.useMemo(
        () => [
            {
                Header: 'Orjinal Url',
                accessor: 'original_url', // accessor is the "key" in the data
            },
            {
                Header: 'Kısa Url',
                accessor: 'shortened_url',
            },
            {
                Header: 'Özel Url',
                accessor: 'specialURL',
            },
            {
                Header: 'Bitiş Zamanı',
                accessor: 'end_time',
            },
            {
                Header: 'Tıklanma',
                accessor: 'clicks',
            },
            {
                Header: 'Başlangıç Tarihi',
                accessor: 'date',
            },
        ],
        []
    )



    const tableInstance = useTable({ columns, data }, useSortBy)
 
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    } = tableInstance


    useEffect(()=>{
        getUrls(user.userMail)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])

    
    return (
        <div className='dashboard container mt-5'>
            {!hata &&
                <table {...getTableProps()}>
                <thead>
                  {// Loop over the header rows
                  headerGroups.map(headerGroup => (
                    // Apply the header row props
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {// Loop over the headers in each row
                      headerGroup.headers.map(column => (
                        // Apply the header cell props
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        </th>
                      ))}
                    </tr>

                  ))}
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                  {// Loop over the table rows
                  rows.map(row => {
                    // Prepare the row for display
                    prepareRow(row)
                    return (
                      // Apply the row props
                      <tr {...row.getRowProps()}>
                        {// Loop over the rows cells
                        row.cells.map(cell => {
                          // Apply the cell props
                          return (
                            <>
                                <td {...cell.getCellProps()}>
                                {// Render the cell contents
                                cell.render('Cell')}
                                </td>
                            
                            </>

                          )
                          
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
                
            }
            {hata && <h1>Henüz kısa url oluşturmadınız</h1>}
        </div>
    )
}
