import React, { useState } from 'react';
import Account from './Account';
import Editname from './EditName';

const DashboardMain = () => {
        const [modeSet , setModeSet] = useState('normal')

    return (
        <main className={"main bg-dark-" + modeSet}>
     <Editname modeSet = {modeSet} setModeSet = {setModeSet}/>
      <h2 className="sr-only">Accounts</h2>
        <Account modeSet = {modeSet} setModeSet = {setModeSet}/>
     
    </main>
    );
};

export default DashboardMain;