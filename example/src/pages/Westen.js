import React from 'react'
import PropTypes from 'prop-types'
import "../App.css"
import Book from "./../components/Book"
import TableCell from '../components/TableCell'

const books= [
  {
      book:"1Q84(1)",
      author:"村上春樹",
      place:"桃園總管"
  },{
      book: "1Q84(2)",
      author:"村上春樹",
      place:"中壢分館"

  },{
      book: "1Q84(3)",
      author:"村上春樹",
      place:"中壢分館"
  }
]

function Westen(props) {
  return (
    <>
      <div>

<h2 className='divWrapper'>Children</h2>
<div className="bookWrapper">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
</div>
<div className='table'>
    <div className='cell'>書名</div>
    <div className='cell'>譯者</div>
    <div className='cell'>館藏地</div>    
</div>
<div className='tableContent'>

{
    books.map((v,i)=>{
        return(
        <TableCell
         book={v.book}
         author={v.author}
         place={v.place}
    />
        )
    })
    

} 
</div>
</div>

    </>
  )
}

Westen.propTypes = {}

export default Westen
