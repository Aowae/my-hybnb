import React, { memo } from 'react'
//引入组件库
import Pagination from '@mui/material/Pagination';

import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  // currentPage:1
  //第 21- 40
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  /** 事件处理的逻辑 */
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    console.log(pageCount,totalPage,totalCount);
    // 回到顶部
    window.scrollTo(0, 0)
    // 更新最新的页码: redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {
        // 转换为布尔值
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} onChange={pageChangeHandle}/>
            <div className='desc'>
              第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination