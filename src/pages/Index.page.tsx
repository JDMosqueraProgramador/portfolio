import React, { useState } from 'react'
import Main from '../components/index/sections/Main.component';
import Menu from '../components/index/navegation/Menu.component';
import Experience from '../components/index/sections/Experience.component';
import Areas from '../components/index/sections/Areas.component';
import Projects from '../components/index/sections/Projects.component';

const Index: React.FC<{}> = () => {

    const [main, setMain] = useState<boolean>(false);

    return (
        <>
            <Main setMain={setMain} />
            <Menu main={main} />
            <Experience />
            <Areas />
            <Projects />
        </>
    )
}

export default Index;