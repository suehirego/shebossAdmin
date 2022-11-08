import React, { useState, useEffect, useMemo } from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import WidgetRevenue from '../../components/widget/WidgetRevenue';
import WidgetUser from '../../components/widget/WidgetUser';
import PastChart from '../../components/pastchart/PastChart';
import Table from '../../components/table/TableComponent';
import WidgetStock from '../../components/widget/WidgetStock';
import WidgetPrevious from '../../components/widget/WidgetPrevious';
// import axios from 'axios';
import { axiosInstance } from '../../config';




const Home = () => {

     const [userStats, setUserStats] = useState([]);

     const MONTHS = useMemo(
          () => [
               'Jan',
               'Feb',
               'Mar',
               'Apr',
               'May',
               'June',
               'July',
               'Aug',
               'Sept',
               'Oct',
               'Nov',
               'Dec'
          ],
          []
     );

     useEffect(() => {
          const getStats = async () => {
               try {
                    const res = await axiosInstance.get("/users/stats");
                    const statsList = res.data.sort(function (a, b) {
                         return a._id - b._id;
                    });
                    statsList.map((item) =>
                         setUserStats((prev) => [
                              ...prev,
                              { name: MONTHS[item._id - 1], "New User": item.total },
                         ])
                    );
               } catch (err) {
                    console.log(err);
               }
          };
          getStats();
     }, [MONTHS]);


     return (
          <div className='home'>
               <Sidebar />
               <div className='homeContainer'>

                    <Navbar />

                    <div className='widgets'>
                         <WidgetUser />
                         <WidgetPrevious />
                         <WidgetRevenue />
                         <WidgetStock/>
                    </div>

                    <div className='charts'>
                         <PastChart title="Monthly User Stats" data={userStats} grid dataKey="New User" />
                    </div>

                    <div className="tableCointainer">
                         <div className="listTitle">Latest Transactions</div>
                         <Table />
                    </div>
               </div>
               
          </div>
     )
}

export default Home