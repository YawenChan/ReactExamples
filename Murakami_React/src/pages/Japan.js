import React from 'react'
import "../App.css"
import Book from "./../components/Book.js"
import TableCell from '../components/TableCell.js'

const books= [
  {
      book:"聽風的歌",
      author:"村上春樹",
      place:"桃園總管",
      pic:"img/windSong.jpg",
  },{
      book:"1973年的彈珠玩具",
      author:"村上春樹",
      place:"中壢分館",
      pic:"img/windSong.jpg",


  },{
      book:"1Q84 Book1 ",
      author:"村上春樹",
      place:"中壢分館",
      pic:"img/windSong.jpg",
  },
  {
      book:"1Q84 Book2 ",
      author:"村上春樹",
      place:"中壢分館",
      pic:"img/windSong.jpg",
  },
  {
      book:"1Q84 Book3 ",
      author:"村上春樹",
      place:"中壢分館",
      pic:"img/windSong.jpg",
  },
  {
      book:"海邊的卡夫卡(上)",
      author:"村上春樹",
      place:"平鎮分館",
      pic:"img/windSong.jpg",
  },
  {
      book:"海邊的卡夫卡(下)",
      author:"村上春樹",
      place:"平鎮分館",
      pic:"img/windSong.jpg",
  },
]


function Japan() {
  return (
    <>
    <div>
        <h2 className='divWrapper'>Novals</h2>
        <div className="bookWrapper">
        {
            books.map((v,i)=>{
                return(
            <Book
                pic={v.pic}
                book={v.book}
            />
                )
            })
        }
        </div>
         <div className="tableFull">
            <div className='tableOut'>
            <div className='table'>
                <div className='cell'>書名</div>
                <div className='cell'>作者</div>
                <div className='cell'>館藏地</div>    

            </div>
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
    </div>
    </>
  )
}

export default Japan