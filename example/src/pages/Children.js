import React from 'react'
import PropTypes from 'prop-types'
// 引入元件
import Book from '../components/Book'
import TableCell from '../components/TableCell'
// 引入樣式
import "../App.css"

// 前端操作，套用假資料Json檔案
// 此功能為模擬後端傳入前端的陣列資料
const books= [
    {
        book:"聽風的歌",
        author:"村上春樹",
        place:"桃園總管"
    },{
        book:"1973年的彈珠玩具",
        author:"村上春樹",
        place:"中壢分館"

    },{
        book:"1Q84 Book1 ",
        author:"村上春樹",
        place:"中壢分館"
    },
    {
        book:"1Q84 Book2 ",
        author:"村上春樹",
        place:"中壢分館"
    },
    {
        book:"1Q84 Book3 ",
        author:"村上春樹",
        place:"中壢分館"
    }
]




function Children(props) {
  return (
    <div>
        <h2>Children</h2>
        <div className="bookWrapper">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
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


  )
}

Children.propTypes = {}

export default Children
