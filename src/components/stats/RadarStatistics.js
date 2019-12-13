import React from 'react';
import * as recharts from "recharts";
import RadarChart from "recharts/es6/chart/RadarChart";
import PolarAngleAxis from "recharts/es6/polar/PolarAngleAxis";
import PolarGrid from "recharts/es6/polar/PolarGrid";
import PolarRadiusAxis from "recharts/es6/polar/PolarRadiusAxis";
import Radar from "recharts/es6/polar/Radar";

export default function RadarStatistics() {

    const {ResponsiveContainer} = recharts;

    const data = [
        {subject: 'Pitch', A: 120, B: 110, fullMark: 150},
        {subject: 'Team', A: 98, B: 130, fullMark: 150},
        {subject: 'Expertise', A: 86, B: 130, fullMark: 150},
        {subject: 'Connections', A: 99, B: 100, fullMark: 150},
        {subject: 'Product', A: 85, B: 90, fullMark: 150},
        {subject: 'Market Fit', A: 65, B: 85, fullMark: 150},
    ];


    return (
        <ResponsiveContainer>
            <RadarChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }} data={data}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="subject"/>
                <PolarRadiusAxis/>
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
            </RadarChart>
        </ResponsiveContainer>
    );
}