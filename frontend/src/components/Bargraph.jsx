// Filename - App.js

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
} from "recharts";

const Bargraph = () => {
    // Sample data
    const data = [
        { name: "Week 1", students: 60 },
        { name: "Week 2", students: 100 },
        { name: "Week 3", students: 20 },
        { name: "Week 4", students: 40 },
        { name: "Week 5", students: 140 },
        { name: "Week 6", students: 120 },
    ];

    return (
        <BarChart height={200} width={350} data={data}>
             <Bar dataKey="students" fill="blue" className="rounded-t-2xl" />
           
            <XAxis dataKey="name" />
            
        </BarChart>
    );
};

export default Bargraph;