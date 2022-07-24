import React, { useState } from 'react'
import Main from '../components/index/sections/Main.component';
import Menu from '../components/navegation/Menu.component';
import Experience from '../components/index/sections/Experience.component';
import Areas from '../components/index/sections/Areas.component';
import Projects from '../components/index/sections/Projects.component';
import Contact from '../components/index/sections/Contact.component';

const Index: React.FC<{}> = () => {

    const [main, setMain] = useState<boolean>(false);

    return (
        <>
            <Main setMain={setMain} />
            <Menu main={main} alt={false} />
            <Experience />
            <Areas />
            <Projects />
            <Contact />
        </>
    )
}

export default Index;