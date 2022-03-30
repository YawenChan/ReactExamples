import React from 'react'
import PropTypes from 'prop-types'
// 引入元件
import Book from '../components/Book'
import TableCell from '../components/TableCell'
// 引入樣式
import "../App.css"
import Menu from './../components/Menu';
// 前端操作，套用假資料Json檔案
// 此功能為模擬後端傳入前端的陣列資料
const books= [
    {
        book:"羊男的聖誕節",
        author:"村上春樹",
        place:"桃園總管"
    },{
        book: "毛茸茸　ふわふわ",
        author:"村上春樹,西安水丸",
        place:"中壢分館"

    },{
        book: "襲擊麵包屋 パン屋を襲う",
        author:"村上春樹",
        place:"中壢分館"
    }
]




function Children(props) {
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

Children.propTypes = {}

export default Children
