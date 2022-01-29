import { useState } from "react";



const Home = () => {
    const [name,setName] = useState('maryo');
    return ( 
        <div className="home">
            <h2>Homepage</h2>
        </div>
     );
}
 
export default Home;