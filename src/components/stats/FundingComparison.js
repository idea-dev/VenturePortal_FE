import React from 'react';
import * as recharts from "recharts";
import XAxis from "recharts/es6/cartesian/XAxis";
import YAxis from "recharts/es6/cartesian/YAxis";
import CartesianGrid from "recharts/es6/cartesian/CartesianGrid";
import Tooltip from "@material-ui/core/Tooltip";

export default function FundingComparison() {

    const {ResponsiveContainer, ScatterChart, Scatter, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = recharts;
    const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
        {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
        {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];
    const colors = ['red', 'green', 'pink', 'yellow'];

    return (
        <ResponsiveContainer>
            <ScatterChart>
                <XAxis type="number" dataKey={'x'} name='stature' unit='cm'/>
                <YAxis type="number" dataKey={'y'} name='weight' unit='kg'/>
                <CartesianGrid />
                <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                <Scatter name='A school' data={data} fill='#8884d8'>
                    {
                        data.map((entry, index) => {
                            return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        })
                    }
                </Scatter>
            </ScatterChart>
        </ResponsiveContainer>
    );
}

