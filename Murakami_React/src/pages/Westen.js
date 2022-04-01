import React from 'react'
// import 'normalize.css';
import PropTypes from 'prop-types'
import "../App.css"
import Book from "./../components/Book"
import TableCell from '../components/TableCell'

const books= [
  {
      book:"關於跑步，我想說的是...",
      author:"村上春樹",
      place:"桃園總管",
      pic:"img/run.jpg",
  },{
      book: "遠方的鼓聲",
      author:"村上春樹",
      place:"中壢分館",
      pic:"img/drum.jpg",

  },
]

function Westen(props) {
  return (
    <>
      <div>

<h2 className='divWrapper'>Proses</h2>
<div className="bookWrapper">
{
    books.map((v,i)=>{
        return(
    <Book
        book={v.book}
        author={v.author}
        pic={v.pic}
    />
        )

    })
}
 
</div>
<div className='table'>
    <div className='cell'>書名</div>
    <div className='cell'>作者</div>
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
