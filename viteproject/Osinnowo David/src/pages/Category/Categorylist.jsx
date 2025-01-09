import React from 'react'
import { useParams } from 'react-router-dom'
import { useCategorylist } from '../../hooks/useCatehook.jsx'
export const Categorylist = ()  =>{

  const parems = useParams()
  const {id} = parems
 const {data,isLoading ,isFetching,error} = useCategorylist(id)
 if (isLoading){
  return(
    <h2> is loading </h2>
  )
 }
  if(isFetching){
    return(
      <h2> data fetching</h2>
    )
  }
  if (error){
    return(
      console.log(error.message)
    )
  }
 
  if (data){
  return (
    <div>
        {data.name}
</div>



// {console.log(data)}
// </div>

//   ))
// } */}
//     </div>

  )
  }
}

export default Categorylist
