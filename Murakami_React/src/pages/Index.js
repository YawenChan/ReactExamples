import React from 'react'
// import 'normalize.css';
// import PropTypes from 'prop-types'
import "../App.css"
import { useState } from 'react';
function Index(props) {
  const[num,setNum]=useState(0);



  return (
    <>
    <div className='indexWrapperIndex'>
      <div>
        <p>村上春樹粉絲數量:<span>{num}</span></p>
        <button onClick={()=>{setNum(num+1)}}>我是鐵粉</button>
      
      </div>
      <div>
        <img className='avatar' src="img/muragami.jpg" alt="" />
        <div>

          <p>村上春樹（日語：村上 春樹／むらかみ はるき Haruki Murakami，1949年1月12日－），日本小說家、美國文學翻譯家。熱愛音樂。</p>
          <p>29歲開始寫作，第一部作品《聽風的歌》，即獲得日本群像新人獎，1987年第五部長篇小說《挪威的森林》在日本暢銷四百萬冊，廣泛引起「村上現象」[1]。村上春樹作品的寫作風格深受歐美作家影響，基調輕盈，少有日本戰後陰鬱沉重的文字氣息。被稱作第一個純正的「二戰後時期作家」[2]，並譽為日本1980年代的文學旗手。</p>
        </div>
      </div>
    </div>

    </>
  )
}

Index.propTypes = {}

export default Index
