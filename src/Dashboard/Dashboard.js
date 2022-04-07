import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [chart, setchart]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setchart(data))
        
    },[])
    // console.log( chart);
    return (


    //     <ResponsiveContainer width="100%" height="100%">
    //     <LineChart width={300} height={100} data={chart}>
    //       <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
    //     </LineChart>
    //   </ResponsiveContainer>
<div>
    
<div className="p-5 m-40 ">
    <h1 className="text-5xl text-teal-900 m-10">Month Chart</h1>
        <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width={800}
                        height={400}
                        data={chart}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
    </div>


    <div className="p-6 m-40">
    <h1 className="text-5xl text-teal-900 m-10">Investment Chart</h1>

    <AreaChart
      width={600}
      height={400}
      data={chart}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </div>
</div>



                    

    //   <LineChart width={800} height={500} data={data}>
    //       <Line datakey="sell"></Line>
    //       <Line datakey='investment'  ></Line>
         
    //       {/* <Line  datakey={'month'}></Line> */}
    //       <XAxis datakey="month"/>
    //       <Tooltip/>
    //       <YAxis datakey='revenue'></YAxis>
    //   </LineChart>
    // <div>
        
    // </div>
    );
   
};   

export default Dashboard;