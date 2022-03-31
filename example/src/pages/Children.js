import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
// 引入元件
import Book from '../components/Book'
import TableCell from '../components/TableCell'
// 引入樣式
import "../App.css"
import "../css/pages.css"
import Menu from './../components/Menu';
// 前端操作，套用假資料Json檔案
// 此功能為模擬後端傳入前端的陣列資料
const books= [
    {
        num:"1",
        book:"羊男的聖誕節",
        author:"村上春樹",
        place:"桃園總管",
        pic:"img/sheep.jpg",
    },{
        num:"2",
        book: "毛茸茸　ふわふわ",
        author:"村上春樹,西安水丸",
        place:"中壢分館",
        pic:"img/fuwafuwa.jpg",

    },{
        num:"3",
        book: "襲擊麵包屋 パン屋を襲う",
        author:"村上春樹",
        place:"中壢分館",
        pic:"img/bread.jpg",
    }
]




function Children(props) {
      const[num,setNum]=useState(0);
  return (
    <>
    <div>
        <h2 className='divWrapper' key="1">Children</h2>
    <p>人數統計{num}</p>
    <button onClick={()=>{setNum(num+1)}}>到此一遊</button>

        <div className="bookWrapper" key="2">
        {
            books.map((v,i)=>{
                return(
            <Book
                key={v.num.toString()}
                pic={v.pic}
                book={v.book}
            />
                )
            })
        }
        </div>
        <div className='table' key="1">
            <div className='cell'>書名</div>
            <div className='cell'>作者</div>
            <div className='cell'>館藏地</div>    
        </div>
        <div className='tableContent'>

        {
            books.map((v,i)=>{
                return(
                <TableCell
                key={v.num}
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
