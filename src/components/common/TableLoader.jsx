import { Placeholder } from './Placeholder/Placeholder'
export function TableLoader() {
  return (
    <div className='table-responsive '>
      <table className="table table-bordered">
       
        <tbody>
          {
            [1, 1, 1,1].map((item, index) => (
              <tr key={index}>
                <th scope="row"><Placeholder styling={ {width:'50px',height:'20px'}} /></th>
                <td><Placeholder styling={ {width:'50px',height:'20px'}} /></td>
                <td><Placeholder styling={ {width:'50px',height:'20px'}} /></td>
                <td><Placeholder styling={ {width:'50px',height:'20px'}} /></td>
                <td><Placeholder  styling={ {width:'50px',height:'20px'}} /></td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}