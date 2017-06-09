/**
 * Created by Administrator on 2017/5/15 0015.
 */
import React from 'react';
import PCHeader  from './pc-header';
import PCFooter  from './pc-footer';
import PcNewsContainer  from './pc_newscontainer';
export default class PCIndex extends React.Component{
    render(){
        return (
            <div>
                <PCHeader></PCHeader>
                <PcNewsContainer></PcNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}